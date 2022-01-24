from collections import defaultdict
from datetime import timedelta

from django.apps import apps
from django.conf import settings
from django.core.checks import Error, Info, Warning, register as register_check
from django.core.exceptions import ImproperlyConfigured
from django.db.utils import OperationalError, ProgrammingError

import requests.exceptions

from normandy.recipes import exports, signing, geolocation


INFO_COULD_NOT_RETRIEVE_ACTIONS = "normandy.recipes.I001"
INFO_COULD_NOT_RETRIEVE_RECIPES = "normandy.recipes.I002"
INFO_COULD_NOT_RETRIEVE_SIGNATURES = "normandy.recipes.I003"
WARNING_COULD_NOT_CHECK_SIGNATURES = "normandy.recipes.W001"
ERROR_MISMATCHED_ACTION_HASH = "normandy.recipes.E001"
ERROR_INVALID_RECIPE_SIGNATURE = "normandy.recipes.E002"
ERROR_BAD_SIGNING_CERTIFICATE = "normandy.recipes.E003"
ERROR_INVALID_ACTION_SIGNATURE = "normandy.recipes.E004"
ERROR_COULD_NOT_VERIFY_CERTIFICATE = "normandy.recipes.E005"
ERROR_GEOIP_DB_NOT_AVAILABLE = "normandy.recipes.E006"
ERROR_GEOIP_DB_UNEXPECTED_RESULT = "normandy.recipes.E007"
ERROR_REMOTE_SETTINGS_INCORRECT_CONFIG = "normandy.recipes.E008"


def actions_have_consistent_hashes(app_configs, **kwargs):
    errors = []
    try:
        Action = apps.get_model("recipes", "Action")
        actions = list(Action.objects.filter(implementation__isnull=False))
    except (ProgrammingError, OperationalError, ImproperlyConfigured) as e:
        errors.append(Info(f"Could not retrieve actions: {e}", id=INFO_COULD_NOT_RETRIEVE_ACTIONS))
    else:
        for action in actions:
            if action.compute_implementation_hash() != action.implementation_hash:
                msg = "Action '{action}' (id={action.id}) has a mismatched hash".format(
                    action=action
                )
                errors.append(Error(msg, id=ERROR_MISMATCHED_ACTION_HASH))

    return errors


def recipe_signatures_are_correct(app_configs, **kwargs):
    errors = []
    try:
        Recipe = apps.get_model("recipes", "Recipe")
        # pre-fetch signatures, to avoid race condition with deleted signatures
        signed_recipes = list(Recipe.objects.exclude(signature=None).select_related("signature"))
    except (ProgrammingError, OperationalError, ImproperlyConfigured) as e:
        errors.append(Info(f"Could not retrieve recipes: {e}", id=INFO_COULD_NOT_RETRIEVE_RECIPES))
        return errors

    try:
        for recipe in signed_recipes:
            data = recipe.canonical_json()
            signature = recipe.signature.signature
            pubkey = recipe.signature.public_key
            x5u = recipe.signature.x5u
            try:
                if x5u:
                    signing.verify_signature_x5u(data, signature, x5u)
                else:
                    signing.verify_signature_pubkey(data, signature, pubkey)
            except signing.BadSignature as e:
                msg = "Recipe '{recipe}' (id={recipe.id}) has a bad signature: {detail}".format(
                    recipe=recipe, detail=e.detail
                )
                errors.append(Error(msg, id=ERROR_INVALID_RECIPE_SIGNATURE))
            except requests.RequestException as exc:
                msg = (
                    f"The signature for recipe with ID {recipe.id} could not be be verified due to "
                    f"network error when requesting the url {x5u!r}. {exc}"
                )
                errors.append(Error(msg, id=ERROR_COULD_NOT_VERIFY_CERTIFICATE))
    except (ProgrammingError, OperationalError, ImproperlyConfigured) as e:
        errors.append(
            Warning(f"Could not check signatures: {e}", id=WARNING_COULD_NOT_CHECK_SIGNATURES)
        )

    return errors


def action_signatures_are_correct(app_configs, **kwargs):
    errors = []
    try:
        Action = apps.get_model("recipes", "Action")
        # pre-fetch signatures, to avoid race condition with deleted signatures
        signed_actions = list(Action.objects.exclude(signature=None).select_related("signature"))
    except (ProgrammingError, OperationalError, ImproperlyConfigured) as e:
        msg = f"Could not retrieve actions: f{e}"
        errors.append(Info(msg, id=INFO_COULD_NOT_RETRIEVE_ACTIONS))
        return errors

    try:
        for action in signed_actions:
            data = action.canonical_json()
            signature = action.signature.signature
            pubkey = action.signature.public_key
            x5u = action.signature.x5u
            try:
                if x5u:
                    signing.verify_signature_x5u(data, signature, x5u)
                else:
                    signing.verify_signature_pubkey(data, signature, pubkey)
            except signing.BadSignature as e:
                msg = f"Action '{action}' (id={action.id}) has a bad signature: {e.detail}"
                errors.append(Error(msg, id=ERROR_INVALID_ACTION_SIGNATURE))
            except requests.RequestException as exc:
                msg = (
                    f"The signature for action with ID {action.id} could not be be verified due to "
                    f"network error when requesting the url {x5u!r}. {exc}"
                )
                errors.append(Error(msg, id=ERROR_COULD_NOT_VERIFY_CERTIFICATE))
    except (ProgrammingError, OperationalError, ImproperlyConfigured) as e:
        errors.append(
            Warning(f"Could not check signatures: {e}", id=WARNING_COULD_NOT_CHECK_SIGNATURES)
        )

    return errors


def signatures_use_good_certificates(app_configs, **kwargs):
    errors = []
    expire_early = None
    if settings.CERTIFICATES_EXPIRE_EARLY_DAYS:
        expire_early = timedelta(days=settings.CERTIFICATES_EXPIRE_EARLY_DAYS)

    try:
        Recipe = apps.get_model("recipes", "Recipe")
        Action = apps.get_model("recipes", "Action")

        x5u_urls = defaultdict(list)
        for recipe in Recipe.objects.exclude(signature__x5u=None).select_related("signature"):
            x5u_urls[recipe.signature.x5u].append(str(recipe))
        for action in Action.objects.exclude(signature__x5u=None).select_related("signature"):
            x5u_urls[action.signature.x5u].append(str(action))
    except (ProgrammingError, OperationalError, ImproperlyConfigured) as e:
        msg = f"Could not retrieve signatures: {e}"
        errors.append(Info(msg, id=INFO_COULD_NOT_RETRIEVE_SIGNATURES))
    else:

        for url in x5u_urls:
            try:
                signing.verify_x5u(url, expire_early)
            except signing.BadCertificate as exc:
                bad_object_names = x5u_urls[url]
                msg = (
                    f"{len(bad_object_names)} objects are signed with a bad cert: "
                    f"{bad_object_names}. {exc.detail}. Certificate url is {url}. "
                )
                errors.append(Error(msg, id=ERROR_BAD_SIGNING_CERTIFICATE))
            except requests.RequestException as exc:
                bad_object_names = x5u_urls[url]
                msg = (
                    f"The certificate at {url} could not be fetched due to a network error to "
                    f"verify. {len(bad_object_names)} objects are signed with this certificate: "
                    f"{bad_object_names}. {exc}"
                )
                errors.append(Error(msg, id=ERROR_COULD_NOT_VERIFY_CERTIFICATE))

    return errors


def geoip_db_is_available(app_configs, **kwargs):
    errors = []
    if geolocation.geoip_reader is None:
        # try loading it
        geolocation.load_geoip_database()
        if geolocation.geoip_reader is None:
            errors.append(Error("GeoIP DB not available", id=ERROR_GEOIP_DB_NOT_AVAILABLE))

    if not errors:
        # DB seems to be available, try and do a lookup that should resolve to
        # some country. The specific country isn't important.
        ip = "1.2.3.4"
        country = geolocation.get_country_code(ip)
        if country is None:
            errors.append(
                Error(
                    f"GeoIP DB returned no country for {ip!r}", id=ERROR_GEOIP_DB_UNEXPECTED_RESULT
                )
            )

    return errors


def remotesettings_config_is_correct(app_configs, **kwargs):
    errors = []
    try:
        exports.RemoteSettings().check_config()
    except ImproperlyConfigured as e:
        errors.append(
            Error(
                f"Remote Settings config is incorrect: {e}",
                id=ERROR_REMOTE_SETTINGS_INCORRECT_CONFIG,
            )
        )
    return errors


def register():
    register_check(actions_have_consistent_hashes)
    register_check(recipe_signatures_are_correct)
    register_check(action_signatures_are_correct)
    register_check(signatures_use_good_certificates)
    register_check(geoip_db_is_available)
    register_check(remotesettings_config_is_correct)
