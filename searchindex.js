Search.setIndex({docnames:["adrs/adr-0001-content-signing","adrs/adr-0002-remote-settings","adrs/adr-0003-double-signatures","adrs/index","dev/api-tests","dev/ci","dev/concepts","dev/coverage","dev/docker","dev/feature-experiments","dev/index","dev/install","dev/remote-settings","dev/workflow","index","ops/config","ops/index","qa/environments","qa/example","qa/index","qa/test_engineering","user/actions/console-log","user/actions/index","user/actions/opt-out-study","user/actions/preference-experiment","user/actions/preference-rollback","user/actions/preference-rollout","user/actions/show-heartbeat","user/api","user/data_collection","user/end_user_interaction","user/filters","user/index","user/peer_approval"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["adrs/adr-0001-content-signing.rst","adrs/adr-0002-remote-settings.rst","adrs/adr-0003-double-signatures.rst","adrs/index.rst","dev/api-tests.rst","dev/ci.rst","dev/concepts.rst","dev/coverage.rst","dev/docker.rst","dev/feature-experiments.rst","dev/index.rst","dev/install.rst","dev/remote-settings.rst","dev/workflow.rst","index.rst","ops/config.rst","ops/index.rst","qa/environments.rst","qa/example.rst","qa/index.rst","qa/test_engineering.rst","user/actions/console-log.rst","user/actions/index.rst","user/actions/opt-out-study.rst","user/actions/preference-experiment.rst","user/actions/preference-rollback.rst","user/actions/preference-rollout.rst","user/actions/show-heartbeat.rst","user/api.rst","user/data_collection.rst","user/end_user_interaction.rst","user/filters.rst","user/index.rst","user/peer_approval.rst"],objects:{"":{DATABASE_URL:[15,6,1,"-"],DJANGO_ADMIN_ENABLED:[15,6,1,"-"],DJANGO_ALLOWED_HOSTS:[15,6,1,"-"],DJANGO_API_CACHE_ENABLED:[15,6,1,"-"],DJANGO_API_CACHE_TIME:[15,6,1,"-"],DJANGO_APP_SERVER_URL:[15,6,1,"-"],DJANGO_AUTOGRAPH_HAWK_ID:[15,6,1,"-"],DJANGO_AUTOGRAPH_SECRET_KEY:[15,6,1,"-"],DJANGO_AUTOGRAPH_SIGNATURE_MAX_AGE:[15,6,1,"-"],DJANGO_AUTOGRAPH_URL:[15,6,1,"-"],DJANGO_AUTOGRAPH_X5U_CACHE_BUST:[15,6,1,"-"],DJANGO_AWS_ACCESS_KEY_ID:[15,6,1,"-"],DJANGO_AWS_SECRET_ACCESS_KEY:[15,6,1,"-"],DJANGO_AWS_STORAGE_BUCKET_NAME:[15,6,1,"-"],DJANGO_CDN_URL:[15,6,1,"-"],DJANGO_CERTIFICATES_CHECK_VALIDITY:[15,6,1,"-"],DJANGO_CERTIFICATES_EXPECTED_ROOT_HASH:[15,6,1,"-"],DJANGO_CERTIFICATES_EXPECTED_SUBJECT_CN:[15,6,1,"-"],DJANGO_CERTIFICATES_EXPIRE_EARLY_DAYS:[15,6,1,"-"],DJANGO_CONFIGURATION:[15,6,1,"-"],DJANGO_CONN_MAX_AGE:[15,6,1,"-"],DJANGO_CORS_ALLOW_METHODS:[15,6,1,"-"],DJANGO_CORS_ORIGIN_ALLOW_ALL:[15,6,1,"-"],DJANGO_CORS_ORIGIN_WHITELIST:[15,6,1,"-"],DJANGO_CSP_REPORT_URI:[15,6,1,"-"],DJANGO_DEBUG:[15,6,1,"-"],DJANGO_DEFAULT_FILE_STORAGE:[15,6,1,"-"],DJANGO_GEOIP2_DATABASE:[15,6,1,"-"],DJANGO_GS_BUCKET_NAME:[15,6,1,"-"],DJANGO_HTTPS_REDIRECT_CACHE_TIME:[15,6,1,"-"],DJANGO_IMMUTABLE_CACHE_TIME:[15,6,1,"-"],DJANGO_LOGGING_USE_JSON:[15,6,1,"-"],DJANGO_MEDIA_URL:[15,6,1,"-"],DJANGO_METRICS_STATSD_HOST:[15,6,1,"-"],DJANGO_METRICS_STATSD_NAMESPACE:[15,6,1,"-"],DJANGO_METRICS_STATSD_PORT:[15,6,1,"-"],DJANGO_METRICS_USE_DEBUG_LOGS:[15,6,1,"-"],DJANGO_METRICS_USE_STATSD:[15,6,1,"-"],DJANGO_NUM_PROXIES:[15,6,1,"-"],DJANGO_OIDC_LOGOUT_URL:[15,6,1,"-"],DJANGO_OIDC_REMOTE_AUTH_HEADER:[15,6,1,"-"],DJANGO_OIDC_USER_ENDPOINT:[15,6,1,"-"],DJANGO_PEER_APPROVAL_ENFORCED:[15,6,1,"-"],DJANGO_PERMANENT_REDIRECT_CACHE_TIME:[15,6,1,"-"],DJANGO_RAVEN_CONFIG_DSN:[15,6,1,"-"],DJANGO_RAVEN_CONFIG_RELEASE:[15,6,1,"-"],DJANGO_REMOTE_SETTINGS_BUCKET_ID:[15,6,1,"-"],DJANGO_REMOTE_SETTINGS_CAPABILITIES_COLLECTION_ID:[15,6,1,"-"],DJANGO_REMOTE_SETTINGS_PASSWORD:[15,6,1,"-"],DJANGO_REMOTE_SETTINGS_URL:[15,6,1,"-"],DJANGO_REMOTE_SETTINGS_USERNAME:[15,6,1,"-"],DJANGO_SECRET_KEY:[15,6,1,"-"],DJANGO_STATIC_URL:[15,6,1,"-"],DJANGO_USE_OIDC:[15,6,1,"-"],DJANGO_X5U_CACHE_TIME:[15,6,1,"-"],DJANGO_X5U_ERROR_CACHE_TIME:[15,6,1,"-"],DJANGO_X5U_REQUEST_TIMEOUT:[15,6,1,"-"],GUNICORN_MAX_REQUESTS:[15,6,1,"-"],GUNICORN_WORKER_CLASS:[15,6,1,"-"],REMOTE_SETTINGS_RETRY_REQUESTS:[15,6,1,"-"],WEB_CONCURRENCY:[15,6,1,"-"],bucketSample:[31,1,1,""],date:[31,1,1,""],intersect:[31,1,1,""],keys:[31,1,1,""],normandy:[31,2,1,""],preferenceExists:[31,1,1,""],preferenceIsUserSet:[31,1,1,""],preferenceValue:[31,1,1,""],showNotification:[18,1,1,""],stableSample:[31,1,1,""]},"normandy.addon":{id:[31,0,1,""]},"normandy.experiments":{active:[31,0,1,""],expired:[31,0,1,""]},"normandy.normandy.experiments":{all:[31,0,1,""]},"normandy.normandy.recipe":{id:[31,0,1,""]},"normandy.recipe":{arguments:[31,0,1,""]},"normandy.recipes":{filters:[31,3,0,"-"]},"normandy.recipes.filters":{AddonActiveFilter:[31,4,1,""],AddonInstalledFilter:[31,4,1,""],AndFilter:[31,4,1,""],BucketSampleFilter:[31,4,1,""],ChannelFilter:[31,4,1,""],CountryFilter:[31,4,1,""],DateRangeFilter:[31,4,1,""],JexlFilter:[31,4,1,""],LocaleFilter:[31,4,1,""],NamespaceSampleFilter:[31,4,1,""],NegateFilter:[31,4,1,""],OrFilter:[31,4,1,""],PlatformFilter:[31,4,1,""],PrefCompareFilter:[31,4,1,""],PrefExistsFilter:[31,4,1,""],PrefUserSetFilter:[31,4,1,""],PresetFilter:[31,4,1,""],ProfileCreateDateFilter:[31,4,1,""],QaOnlyFilter:[31,4,1,""],StableSampleFilter:[31,4,1,""],VersionFilter:[31,4,1,""],VersionRangeFilter:[31,4,1,""],WindowsBuildNumberFilter:[31,4,1,""],WindowsVersionFilter:[31,4,1,""]},"normandy.recipes.filters.AddonActiveFilter":{addons:[31,5,1,""],any_or_all:[31,5,1,""],type:[31,5,1,""]},"normandy.recipes.filters.AddonInstalledFilter":{addons:[31,5,1,""],any_or_all:[31,5,1,""],type:[31,5,1,""]},"normandy.recipes.filters.AndFilter":{subfilters:[31,5,1,""],type:[31,5,1,""]},"normandy.recipes.filters.BucketSampleFilter":{count:[31,5,1,""],input:[31,5,1,""],start:[31,5,1,""],total:[31,5,1,""],type:[31,5,1,""]},"normandy.recipes.filters.ChannelFilter":{channels:[31,5,1,""],type:[31,5,1,""]},"normandy.recipes.filters.CountryFilter":{countries:[31,5,1,""],type:[31,5,1,""]},"normandy.recipes.filters.DateRangeFilter":{not_after:[31,5,1,""],not_before:[31,5,1,""],type:[31,5,1,""]},"normandy.recipes.filters.JexlFilter":{capabilities:[31,5,1,""],comment:[31,5,1,""],expression:[31,5,1,""],type:[31,5,1,""]},"normandy.recipes.filters.LocaleFilter":{locales:[31,5,1,""],type:[31,5,1,""]},"normandy.recipes.filters.NamespaceSampleFilter":{count:[31,5,1,""],namespace:[31,5,1,""],start:[31,5,1,""],type:[31,5,1,""]},"normandy.recipes.filters.NegateFilter":{filter_to_negate:[31,5,1,""],type:[31,5,1,""]},"normandy.recipes.filters.OrFilter":{subfilters:[31,5,1,""],type:[31,5,1,""]},"normandy.recipes.filters.PlatformFilter":{platforms:[31,5,1,""],type:[31,5,1,""]},"normandy.recipes.filters.PrefCompareFilter":{comparison:[31,5,1,""],pref:[31,5,1,""],type:[31,5,1,""],value:[31,5,1,""]},"normandy.recipes.filters.PrefExistsFilter":{type:[31,5,1,""],value:[31,5,1,""]},"normandy.recipes.filters.PrefUserSetFilter":{pref:[31,5,1,""],type:[31,5,1,""],value:[31,5,1,""]},"normandy.recipes.filters.PresetFilter":{name:[31,5,1,""],preset_choices:[31,5,1,""],type:[31,5,1,""]},"normandy.recipes.filters.ProfileCreateDateFilter":{date:[31,5,1,""],direction:[31,5,1,""],type:[31,5,1,""]},"normandy.recipes.filters.StableSampleFilter":{input:[31,5,1,""],rate:[31,5,1,""],type:[31,5,1,""]},"normandy.recipes.filters.VersionFilter":{type:[31,5,1,""],versions:[31,5,1,""]},"normandy.recipes.filters.VersionRangeFilter":{max_version:[31,5,1,""],min_version:[31,5,1,""]},"normandy.recipes.filters.WindowsBuildNumberFilter":{comparison:[31,5,1,""],type:[31,5,1,""],value:[31,5,1,""]},"normandy.recipes.filters.WindowsVersionFilter":{type:[31,5,1,""],versions_list:[31,5,1,""]},addon:{installDate:[31,0,1,""],isActive:[31,0,1,""],name:[31,0,1,""],type:[31,0,1,""],version:[31,0,1,""]},normandy:{addons:[31,0,1,""],channel:[31,0,1,""],country:[31,0,1,""],distribution:[31,0,1,""],doNotTrack:[31,0,1,""],experiments:[31,0,1,""],isDefaultBrowser:[31,0,1,""],isFirstRun:[31,0,1,""],locale:[31,0,1,""],plugins:[31,0,1,""],recipe:[31,0,1,""],request_time:[31,0,1,""],searchEngine:[31,0,1,""],syncDesktopDevices:[31,0,1,""],syncMobileDevices:[31,0,1,""],syncSetup:[31,0,1,""],syncTotalDevices:[31,0,1,""],telemetry:[31,0,1,""],userId:[31,0,1,""],version:[31,0,1,""]}},objnames:{"0":["js","attribute","JavaScript attribute"],"1":["js","function","JavaScript function"],"2":["js","data","JavaScript data"],"3":["py","module","Python module"],"4":["py","class","Python class"],"5":["py","attribute","Python attribute"],"6":["std","envvar","environment variable"]},objtypes:{"0":"js:attribute","1":"js:function","2":"js:data","3":"py:module","4":"py:class","5":"py:attribute","6":"std:envvar"},terms:{"0":[4,6,15,31],"00":31,"000":31,"0001":[2,3,14],"0002":[3,14],"00z":31,"01":[11,17,31],"01t00":31,"02":[0,31],"03":[1,17,31],"04":[11,17,18],"05":[1,2,11],"07":[2,31],"07t00":31,"0b5":31,"0e":17,"0f":17,"1":[6,11,15,19,24,31],"10":[15,24,31],"100":[7,31],"10000":31,"10t14":31,"11":8,"110":31,"12":[6,17],"12t19":0,"14":17,"1506175":12,"15063":31,"1513854":12,"1538248":12,"16":11,"18":0,"19":[11,31],"1980":31,"1c":17,"1st":31,"2":[0,15,19,24,31],"20":17,"2011":31,"201403021422":31,"2017":11,"2019":20,"2020":31,"2021":[0,1,2],"23":17,"25":0,"2592000":15,"274":11,"29":17,"2f":17,"3":[4,11,15,19,24,31],"30":[15,24],"301":11,"31536000":15,"3166":31,"32":17,"35":17,"36":[0,17],"38":17,"3c":17,"3dhoaupudifjjvm7xznd9bn73159xn3xwr77b61kzdjwzzsjt":11,"4":[0,11,15,19,24,31],"40":24,"42":17,"44":17,"45":17,"4574dbc126af07cd031a0da29d625a11365403ea":18,"46":17,"47":[17,31],"48":31,"4c":17,"4d":17,"5":[0,6,11,15,31],"50":31,"5000":31,"504464z":0,"509":0,"53":17,"55":17,"56":17,"57":17,"58":11,"59":31,"6":[8,31],"600":15,"604800":15,"61":31,"62":[17,31],"65":6,"66":[6,12,13],"67":12,"68":12,"6a":17,"7":[4,31],"70":31,"72":31,"75":31,"7515":0,"78":17,"7e":17,"7th":31,"7tlsh4_w5i4akb_edkggzk31fxmli5c9lmotbdfo5":0,"8":11,"8000":[4,8,11,17],"81":17,"8125":15,"83":17,"86":17,"8601":31,"8765":11,"8888":11,"8a":17,"8d":17,"8f":17,"9":[4,11,15],"90":17,"93":17,"97":17,"99":31,"9a":17,"9c":17,"9f":17,"boolean":[6,9,24,31],"break":28,"byte":0,"case":[1,15,24,31],"class":[15,18,31],"const":18,"default":[9,11,12,15,17,18,23,24,26,28,30,31],"do":[2,4,5,6,7,11,13,15,17,22,24,26,28,31,33],"export":18,"final":31,"function":[2,17,19,20,31],"import":[1,3,6,15,18,23],"long":[0,2,15,31],"new":[0,1,2,6,9,10,11,15,17,18,23,24,25,26,27,30,31],"public":[0,6,11,15,17,28],"return":[6,15,18,28,31],"short":[0,1,27,31],"static":[13,15],"switch":1,"true":[0,5,9,15,18,27,31],"try":15,"while":[13,15,23,24,26,27,30,31],A:[6,12,15,18,23,24,25,26,27,31,33],AND:31,ANDed:31,As:[1,6,12],At:[0,23],BE:17,Be:28,By:[9,11],For:[0,2,5,6,13,14,15,18,24,31],IN:31,If:[4,8,11,13,15,18,20,23,24,26,27,28,30,31,33],In:[0,6,13,15,18,20,23,24,28,31],It:[0,1,2,4,6,8,11,15,17,20,21,23,28,30,31],No:[10,11],Not:[15,17,31],On:[23,31,33],One:6,That:17,The:[0,1,2,4,5,6,7,8,10,11,12,13,15,17,18,20,21,23,24,25,26,27,28,30,31,33],Their:[23,24],Then:31,There:[0,1,5,20,31],These:[4,6,8,10,11,13,15,16,17,18,19,23,27,32],To:[4,6,7,9,11,13,17,28],With:[4,11,31],_build:13,_even:31,_study_:23,a0:17,a3:17,a4:17,a5:17,a7:17,a9:17,abil:[18,28],abl:[11,15],about:[2,6,7,9,14,17,18,23,31,32],abov:[18,24,30,31],absolut:15,ac:17,accept:[6,11,15,22,28,31],access:[1,6,11,15,17,23,28,31],accord:[6,15],account:[6,11,15,31],accuraci:[0,1,2],across:[9,31],act:6,action:[10,11,13,14,15,19,21,23,24,25,26,27,31,32],action_nam:18,activ:[0,1,4,6,11,17,18,24,25,26,30,31],actual:[0,1,2,6,9,22,25],ad:[1,2,10,11,12,15,19,31],add:[0,1,11,13,18,22,28,30,31,32],addit:[0,1,2,18,20,23,24,28,31],addition:[1,24,28],addon:[23,31],addonact:31,addonactivefilt:31,addoninstal:31,addoninstalledfilt:31,address:[3,18],adjust:11,admin:[17,20,24,32],adr:[3,14],adversari:6,advis:8,ae:17,affect:[13,23],after:[0,1,2,5,6,11,13,15,18,23,27,31,33],ag:15,again:[5,25,26,27,30,31,33],against:[0,2,4,15,18,23,31],ahead:31,aid:6,aim:[15,19],all:[0,6,7,8,11,13,15,17,18,20,26,31],all_linux:31,all_mac:31,all_window:31,allow:[0,1,2,6,11,12,15,24,26,30,31],almost:5,alon:0,along:[3,15,24,26],alpha:31,alphanumer:27,alreadi:[1,8,11,13,23,24,25,33],also:[13,15,20,26,27,28,30,31],altair:28,alter:13,although:[8,11,23,24],alwai:[17,31],amazondotcom:31,among:[24,26],amount:[0,1,2,24],an:[0,2,3,4,6,8,9,11,13,15,17,18,20,23,24,26,27,30,31,33],analysi:27,andfilt:31,ani:[0,1,2,5,13,15,24,25,27,30,31],anoth:[1,5,17,18,24,31,33],answer:[6,27,31],any_or_al:31,anyon:[24,26],anywher:[24,31],api:[0,1,2,6,8,10,11,14,15,17,18,20,31,32],api_url:17,app:[9,15,17,30,31],appear:31,appli:[15,26,27,31],applic:[1,4,11,15,20,28],approach:[0,20],appropri:[24,26,31],approv:[14,15,18,32],ar:[0,1,2,4,5,6,8,9,11,13,15,17,18,19,20,22,23,24,25,26,27,28,31,33],arbitrari:[0,31],architectur:14,area:20,aren:[8,13],argument:[6,18,22,31],arguments_schema:18,arithmet:31,around:[6,28,31],arrai:31,arrang:15,articl:30,ask:[23,31],assembl:1,asset:[10,15],assign:[24,26,31],associ:[17,18],assum:[8,11,13,15],asterisk:28,async:18,attack:[0,2,6],attempt:[11,13,15],attribut:31,au:31,aurora:31,australi:31,auth0:15,auth:[15,17],authent:[15,17],author:[0,6,15],autograph:[0,2,6,10,15,17],autom:[13,20,24,31],automat:[11,13,15,17,30,31,33],avail:[2,11,13,15,17,18,22,23,28,31],avoid:[2,15],aw:15,await:18,awar:[23,28],b1:17,b2:17,b3:17,b4:17,b4hand:20,b7:17,b:24,ba:17,back:[15,26],backend:15,background:5,bad:[0,1,2],balanc:[0,15],balrog:0,bandwidth:12,bar:[27,31],base:[2,5,12,14,15,23,24,31],bash:8,basi:27,basic:[13,20],bearer:[15,17],becaus:[0,1,2,5,15,24],becom:[0,12,15,30],been:[0,6,11,13,18,20,23,24,29,33],befor:[0,4,6,15,17,18,24,30,31,33],begin:31,behavior:[1,6],behind:6,being:[0,15,20,24,25,30,31],below:[8,11,17,31],benefit:12,besid:31,beta:31,better:[1,6,23],between:[0,1,2,15,23,27,31],bf:17,bin:11,bing:31,blank:[15,27],bodi:28,both:[0,1,4,11,15,17,25,30],box:31,branch:[17,26],brittl:0,broken:17,browser:[6,15,20,21,24,27,28,31],bucket:[11,12,15,31],bucketsampl:31,bucketsamplefilt:31,bug:[1,12,24],bugzilla:24,build:[4,5,8,10,11,15,31],buildid:31,built:[1,6,11,13,15,26,31],bundl:13,button:[27,30],bypass:[11,15],c2:17,c3:17,c5:17,c7:17,c:24,ca:[17,31],cach:[1,15,17],cacheabl:[1,15],cachebust:15,calcul:9,call:[1,6,9,13,23,24,31],can:[0,1,2,4,5,6,8,11,13,15,17,18,22,23,24,25,26,27,28,30,31,33],cannot:[0,6,15,25],canon:0,capabl:[1,6,11,15,31],capit:15,captur:3,care:7,carefulli:0,carri:0,caus:[0,1,24,30,31],cc:17,cd:[8,11,13],cdn:[0,15,17,18],ce:17,center:31,cert:0,certain:[6,18,31],certif:[0,11,15,23],chain:[0,15],chanc:0,chang:[0,1,2,4,8,11,13,15,17,18,20,22,23,25,28,31,32],channel:[12,24,31],channelfilt:31,chartj:20,check:[6,8,11,13,15,18,23,24,30,31],checkbox:30,choic:[3,31],chosen:[0,1,2],chrome:0,ci:[5,7,8,15],ciprian:20,circleci:5,claim:15,classif:10,classifi:[1,11],classify_cli:18,clearer:31,cli:4,click:[27,31],client:[0,1,2,10,11,13,14,15,18,19,23,24,25,26,28,31,33],clone:[8,11],close:[15,27,30,33],cloudop:[4,17],cmuresan:20,code:[0,6,7,8,11,12,13,15,17,18,31],collect:[1,2,6,11,12,14,15,23,24],collector:5,com:[4,8,11,15,31],combin:31,comma:15,command:[4,5,8,11,12,13,15],comment:31,commit:[11,13],common:[15,31],commonli:31,commun:[1,28],compar:[24,31],comparison:[24,31],compat:23,complet:[6,20,23,24,30,33],complex:[1,2,31],complic:[0,1],compon:[1,6,14,29],compos:[4,5,8],compromis:[0,2,6],comput:[0,8,11],concaten:31,concept:[10,14],concern:14,conclus:23,confid:0,config:[5,30],configur:[11,14,16,17,18,26,27,28,31,32],confus:23,conn_max_ag:15,connect:[11,15,20,31],consequ:3,consid:[15,20,24,28,31],consider:10,consist:[6,24,31],consol:[6,19,22,23,32],consolelogact:18,constraint:13,constructor:18,contact:23,contain:[5,6,8,11,17,18,24,26,31],content:[3,6,11,12,14,15,17,27,28,31],context:[3,18],continu:[2,10,14,23,24,26],contract:[10,14],control:[0,1,6,14,15,18,30],copi:[5,15,23],cor:15,correct:[0,23],correl:27,correspond:[0,6,23,25,31],cost:0,could:[0,1,6,23],count:31,countri:[15,18,31],countryfilt:31,cov:13,cover:[0,7,31],coverag:[10,13,14],crash:31,creat:[0,4,7,9,10,11,13,15,19,31,32,33],createdb:11,createstorag:18,createsuperus:11,creation:31,critera:31,criteria:[1,14],cryptographi:0,curiou:0,curl:[11,12],current:[1,9,15,17,18,20,27,28,31],custom:11,cycl:15,d0:17,d6:17,d9:17,d:[4,8,11,24],dai:[15,27,31],dash:[15,27],data:[0,3,4,6,11,12,13,14,17,18,23,24,27,28,30,31],databas:[4,6,8,11,13,15],database_nam:11,database_url:[11,15],date:[1,15,31],daterang:31,daterangefilt:31,datestr:31,db:31,ddg:31,de:[17,31],debug:[5,15],decim:31,decis:14,dedic:[5,11],dedupl:1,defaultvalu:31,defend:2,defens:2,defin:[0,15,18,24,31],definit:23,delai:27,delet:[12,15],deliv:31,deliveri:[19,23,31,32],demand:2,denial:15,depend:[0,4,10,11,27,31],deploi:[6,16,17,18,26],deploy:17,depth:2,describ:[6,8,9,10,11,18,22,24,31,32],descript:[18,23],design:[1,3,4,5,6,24,26],desir:2,desktop:31,detail:[1,2,6,11,13,14,18,23,24,31,33],determin:[1,6,9,20,31],dev:[13,19],develop:[0,1,6,13,14,15,17,18,23,31],devic:31,devtool:[17,32],di:23,dictionari:31,did:[0,2,25],diff:12,differ:[2,11,13,15,17,20,23,27,31],difficult:[0,23],digit:0,direct:[15,31],directli:[11,15],directori:[4,7,11,13],disabl:[6,12,15,24,30,31],disappear:27,discard:18,disk:2,dismiss:27,displai:[6,18,27],distanc:[0,1,2],distinguish:[27,31],distribut:[6,31],dj:15,django:[6,16,17],django_admin_en:15,django_allowed_host:15,django_api_cache_en:15,django_api_cache_tim:15,django_app_server_url:15,django_autograph_hawk_id:[11,15],django_autograph_hawk_secret_kei:11,django_autograph_secret_kei:15,django_autograph_signature_max_ag:15,django_autograph_url:[11,15],django_autograph_x5u_cache_bust:15,django_aws_access_key_id:15,django_aws_secret_access_kei:15,django_aws_storage_bucket_nam:15,django_cdn_url:15,django_certificates_check_valid:15,django_certificates_expected_root_hash:15,django_certificates_expected_subject_cn:15,django_certificates_expire_early_dai:15,django_configur:15,django_conn_max_ag:15,django_cors_allow_method:15,django_cors_origin_allow_al:15,django_cors_origin_whitelist:15,django_csp_report_uri:15,django_debug:15,django_default_file_storag:15,django_foo:15,django_geoip2_databas:15,django_gs_bucket_nam:15,django_https_redirect_cache_tim:15,django_immutable_cache_tim:15,django_logging_use_json:15,django_media_url:15,django_metrics_statsd_host:15,django_metrics_statsd_namespac:15,django_metrics_statsd_port:15,django_metrics_use_debug_log:15,django_metrics_use_statsd:15,django_num_proxi:15,django_oidc_logout_url:15,django_oidc_remote_auth_head:15,django_oidc_user_endpoint:15,django_peer_approval_enforc:15,django_permanent_redirect_cache_tim:15,django_raven_config_dsn:15,django_raven_config_releas:15,django_remote_settings_bucket_id:15,django_remote_settings_capabilities_collection_id:15,django_remote_settings_password:[11,15],django_remote_settings_url:[11,15],django_remote_settings_usernam:[11,15],django_secret_kei:15,django_static_url:15,django_use_oidc:15,django_x5u_cache_tim:15,django_x5u_error_cache_tim:15,django_x5u_request_timeout:15,djangoproject:15,doc:[8,11,13,14,15,17,29],docker:[4,5,10,11,14,15,17],dockerfil:[8,15],document:[0,1,2,3,6,9,11,14,15,17,18,22,24,27,28,29,31],doe:[2,7,11,13,15,17,24,27,28,31],doesn:[1,2,7,17,23,24,26,31],dom:31,domain:15,don:[0,1,9,13,17],done:[6,18,20,23],donottrack:31,dot:[24,26,31],doubl:31,down:[1,31],download:[1,6,8,13,18,23,31],download_geolite2:11,dozen:0,draft:[18,33],draw:23,driver:19,dry:12,dsn:15,duplic:13,dure:[6,15,24,27],dynam:0,e3:17,e6:17,e7:17,e8:17,e:[15,17,24,31],each:[0,2,5,15,17,18,20,23,24,26,28,31],earli:[24,31],eas:[15,33],easi:12,easier:[5,13,31],easiest:[11,17],ec:17,ed:[17,31],edit:[0,5,8,10,20],ef:17,effect:[24,25,26],effici:1,either:[0,1,6,27,33],element:31,elig:23,email:15,empti:[15,31],en:[15,31],enabl:[6,9,11,12,14,15,18,25,30,31,33],end:[0,6,14,15,18,32],endpoint:[1,9,11,18],enforc:[11,15,25],engag:27,engin:[1,14,19,31],english:31,enough:[6,31],enrol:[23,24,26,30,31],ensur:[3,6,14,31],enter:[13,31],entir:[0,1,2,6,27,31],enumer:31,env:[7,11,13],environ:[4,10,11,14,15,16,18,19,24,26,31],ephemer:0,equal:[24,31],error:[11,12,15],es:31,especi:0,etc:11,evalu:[1,6,18,31],even:[6,17],evenli:31,event:[24,30],eventlet:15,eventu:[2,26],ever:[11,15,31],evergreen:12,everi:[1,2,6,13,15,17,26,27,31],everyth:[5,15],exactli:23,examnpl:31,exampl:[1,2,5,6,8,11,14,15,19,24],exce:31,except:[5,11,24,31],exec:8,execut:[0,1,6,11,17,18,23,24,31],exfiltr:6,exist:[0,1,2,4,6,8,11,13,23,24,25,26,31],expect:[4,15,26,31],expens:1,experi:[0,1,6,10,14,22,23,26,30,31,32],experiment:28,expir:[15,24,31],explain:30,explanatori:5,expos:28,express:[6,18,23,32],extens:[0,23,28,31],extra:[0,2,27],extrem:[0,20],f1:17,f4:17,f:[5,8],fa:17,face:[6,17,23],factor:0,fail:[0,15,23,31],failur:[0,1],fall:31,fals:[2,11,15,23,24,31],falsi:31,familiar:31,far:[0,27],faster:1,fe:17,featur:[0,2,10,14,15,20,23,26,31],feedback:6,fetch:[2,6,12,15,18,28,30],few:[6,15,17,24,30],field:[15,18,24,26,27,31],figur:31,file:[5,7,8,11,13,15],filter:[1,6,9,11,14,18,23,32],filter_express:[6,18],filter_to_neg:31,finish:[11,31],firefox:[0,2,3,6,11,12,13,14,15,17,19,23,24,26,29,30,31,33],first:[11,18,31],fission:31,fix:[1,11,13,20,23],flag:7,flash:31,focu:20,follow:[4,8,11,13,17,18,20,24,26,30,31],foo:[15,31],foobarbaz:31,forc:15,fork:[8,11],form:[6,18,31],format:[2,6,15,31],forward:15,found:1,four:24,fr:31,frequenc:1,frequent:0,fresh:12,from:[0,2,4,5,6,11,12,15,17,18,23,24,27,28,31],frontend:[11,13,17],full:[6,24,26,31],funnelcak:31,further:[2,25],futur:[18,23],g:[15,24,31],gather:[6,23],gave:2,gb:31,gcp:[15,19],gener:[0,7,15,17,24,26,31],geoip2:15,geoip:15,geoloc:[9,11,18,31],get:[2,12,15,28,31],getitem:18,gevent:15,git:[8,11,13],github:[8,11,15,20,31],give:[0,1],given:[0,8,11,15,18,24,27,31],global:[11,27,31],go:[6,13,25,33],goal:6,gold:31,good:[0,1,2,31],googl:[15,31],got:[1,11],graphql:32,greater:4,greater_than:31,greater_than_equ:31,green:31,group:31,group_check_en:11,grow:[1,23,24],guarante:[15,17,31],guid:[6,8,11],guidelin:11,gunicorn:16,gunicorn_max_request:15,gunicorn_worker_class:15,h:11,ha:[0,2,6,8,11,13,17,18,20,23,24,26,27,29,30,31,33],had:[24,31],half:31,hand:31,handl:[0,24],happen:[5,9,15,23,25,26],hard:15,harder:0,hash:[13,15,17,31],hashin:13,hasn:18,have:[0,1,2,4,5,6,8,11,13,15,17,18,23,24,25,26,27,31],haven:13,haveshownprevi:18,hawk:15,header:[0,15,28],heartbeat:[6,18,22,23,32],help:[1,5,6,13,15],here:[6,15],high:[20,24],higher:[1,11,31],histori:6,hit:17,hold:15,home:23,hook:[11,13],host:[1,10,15],hostnam:[15,17],hour:6,how:[1,3,8,9,10,11,14,15,23,27,32],howev:[13,23],html:[0,7,13,15,29],htmlcov:[7,13],http:[2,4,8,11,15,17,18,29,31],http_:15,http_oidc_claim_user_profile_email:15,http_remote_us:15,hub:5,human:15,hypen:24,i:[15,17],icon:[28,31],id:[6,11,15,18,23,24,26,27,31],ideal:15,identif:[26,31],identifi:[6,15,24,25,26,27,31],ietf:0,ignor:[11,13],illustr:18,imag:[4,8,15],immedi:[15,24,31],immut:15,impact:0,implement:[6,9,11,15,18,22,23,24],implementation_url:18,importantli:31,incid:0,includ:[1,6,7,13,15,17,18,27,30,31],incongru:23,inconveni:20,incorpor:20,increas:1,independ:31,index:[7,13,31],india:31,indic:[15,31],indirect:1,individu:[2,15,23],ineffici:15,inelig:23,info:[9,11,15,23],inform:[6,17,18,20,27,31],infrastructur:2,ini:11,initi:[11,24],initial_data:[11,13],inlin:31,input:[18,31],inquiri:23,insid:8,insight:1,inspir:1,instal:[0,4,7,10,13,22,28,30,31,32],installd:31,instanc:[1,6,8,10,11,15,17,28,31],instead:[1,11,28,31],instruct:[11,17,20],integ:[24,31],integr:[1,3,10,11,14],intend:[8,11,26],interact:[14,27,31,32],intercept:0,interfac:[6,11,18,24,31],intern:20,interrupt:1,intersect:31,interv:1,invalid:[0,15],invari:25,invent:1,involv:[0,23,31],io:15,ip:[18,31],ipc:31,isact:31,isdefaultbrows:31,isfirstrun:31,isn:23,iso:31,issu:[1,6,11,13],istablet:31,item:31,its:[0,1,3,5,12,15,18,24,25,31],itself:[1,6,18,23,24,30],januari:31,javascript:[13,18,31],jexl:[6,18],jexlfilt:31,js:11,json:[0,6,11,18,28,31],just:[5,13,23,31],karma:13,keep:1,kei:[0,6,15,17,23,31],kennethreitz:15,kept:15,kind:[0,2,24,28],kinto:11,known:[6,14,15,31],label:[27,30],languag:[11,31],laptop:5,larg:31,larger:[2,31],last:[0,1,2,31],lastest:31,latest:[11,13,15,17,33],launch:[11,31],layer:1,lazi:10,lazy_classifi:9,lead:2,leak:15,learn:27,least:[0,31],left:[15,28,31],legaci:[2,11,13,17],length:31,less:[1,2],less_than:31,less_than_equ:31,letter:[24,31],level:[20,31],librari:13,lighter:1,like:[7,8,11,13,15,18,22,31],limit:[0,1,2,6,27,31],line:[11,23],linger:17,link:[24,27,30],lint:[10,11],linter:13,list1:31,list2:31,list:[1,11,13,15,23,24,26,31],live:[0,12,17],ll:[11,13],load:[1,11,15],local:[0,1,2,5,6,7,10,11,14,15,19,23,31],localefilt:31,localhost:[4,8,11,15,17],locat:[18,31],lock:31,log:[6,11,15,22,32],logic:[18,31],logout:15,longer:24,look:[4,11,18,31],lot:0,low:15,lower:[20,24],lowercas:31,m:7,made:[0,1,2,3,6,28,33],mai:[0,1,2,11,13,15,17,23,24,26,28,31],main:[6,11,12,13,15,24,26,27,31],maintain:[1,2,10,16,20],major:[23,31],make:[0,1,2,4,7,8,9,11,12,13,15,31,33],malici:6,man:6,manag:[0,1,11,12,13],mandatori:0,mani:[15,24],manual:[10,13,20,24,30],map:[15,31],mark:[23,24,26,33],master:[13,17],match:[6,15,18,23,24,26,31,33],max:[15,31],max_vers:31,maximum:27,maxmind:15,mdn:15,mean:[5,6,7,13,15,23,24,31],meant:[0,31],measur:[23,24,26],mechan:18,media:15,memori:15,menu:31,merg:[13,18],mesh:23,messag:[0,6,11,18,21,22,27],metadata:31,method:[2,15,17,31],metric:[7,15,24,26],middl:6,middlebox:0,middlewar:5,might:31,migrat:[2,11,13,19],min:31,min_vers:31,minimum:6,minut:[15,17],miss:[13,31],mistak:26,mitig:[0,1,6],mmdb:15,mobil:31,mode:[2,15,27],model:[1,6,11],modifi:[0,1,2,24,26,31],mondai:31,more:[0,1,2,6,15,20,23,24,27,30,31],most:[11,15,24,26,31],motiv:2,mount:10,move:29,mozaw:15,mozgcp:[4,17],mozilla:[0,6,8,11,12,14,15,17,18,29,30,31],mozlog:15,much:[20,31],multipl:[1,23,24,26,31],must:[0,6,13,15,17,18,23,25,26,31,33],mutat:28,n0rm4ndy:11,name:[6,8,11,15,18,23,24,26,31],namespac:31,namespacesampl:31,namespacesamplefilt:31,nativ:6,navig:8,necessari:24,need:[0,1,2,4,5,6,11,13,15,17,18,20,25,28,33],needlessli:1,negat:31,negatefilt:31,net:[0,4,15,17,18,31],network:[12,31],never:[15,25,27],newer:[2,31],newerthan:31,newlin:31,next:[18,24,30],nginx:15,nightli:[30,31],nimbu:1,node:11,non:[6,15,26,31],none:[0,15,20],nonprod:17,normal:[9,13,15,31],normandev:11,normandi:[0,3,4,5,7,8,9,10,11,12,13,16,17,18,19,22,23,24,25,26,28,29,30,32,33],normandygooglecloudstorag:15,not_aft:31,not_befor:31,not_equ:31,notabl:33,note:[0,2,17,26,31],noth:13,notif:[1,12,19],notificationact:18,now:[2,7,8,23,33],npm:11,nt:31,num_cor:15,number:[0,15,24,31],numer:31,nz:31,obj:31,object:[2,6,15,18,32],obtain:12,obviou:2,off:[15,23,31],offer:2,often:[0,1,23,24,27,31],oidc:15,old:[2,15,24],older:[13,15,23,31],olderthan:31,omit:11,onc:[0,11,18,23,24,25,26,27,30,31,33],one:[0,2,6,15,17,23,24,27,28,30,31],ones:[13,17],onli:[1,5,6,9,11,12,13,15,17,18,20,21,24,28,31,33],ons:31,op:0,open:[7,13,15,27,31],openid:15,openssl:11,oper:[8,11,14],operand:31,opt:[22,24,31,32],option:[6,11,15,27,31],optoutstudi:30,order:[18,24,26,27,31],orfilt:31,org:[0,15,18,29,31],origin:[0,1,2,13,15,25,31],other:[1,2,5,6,15,18,24,26,31],otherwis:[11,15,17,18,27,31],our:[0,1,12,13,18,20,31],out:[0,12,13,15,22,24,31,32],outdat:20,outlin:20,output:15,outright:0,outsid:1,over:[0,1,11,31],overal:24,overlap:15,overridden:2,overwhelm:1,own:[5,15,31],owner:0,packag:13,packet:31,page:[11,20,23,30,31],pain:1,pair:6,panel:20,paramet:[0,15,31],paranoid:2,parenthesi:31,pars:[15,31],part:[0,2,6,31],partial:0,particip:[23,24,30,31],particular:31,pass:[6,11,15,18,31],password:[11,15],past:[0,1,2,5],patch:15,path:[15,24,26,31],pattern:23,payload:[0,31],peer:[14,18,31,32],peer_approv:6,peopl:31,per:[1,27,31],percent:31,percentag:31,perform:[0,1,6,13,15,18],period:[1,15],perman:[15,22,24,25,32],persist:[18,26],photon:31,pick:[20,24],piec:6,pin:0,ping:[24,26,31],pioneer:31,pip:[7,11,13],place:[11,13],plain:28,plan:25,platform:[13,31],platformfilt:31,pleas:[11,23],plugin:31,pocket:31,poetri:[4,11],point:[0,6,13,17,30,31],polici:15,pop:18,popul:[4,18,23,24,31],port:15,portion:31,posit:15,possibl:[5,15,17,31],post:[15,18,27,28],postgr:[4,11,15],postgresql:4,potenti:[0,5,15],power:0,pre:[1,11,13,15],precis:14,pref:31,prefcomparefilt:31,prefer:[0,6,9,15,22,23,32],preferenceexist:31,preferenceisuserset:[24,31],preferencevalu:31,prefexistsfilt:31,prefix:15,prefkei:31,prefusersetfilt:31,preprocess:10,prerequisit:10,present:[8,15,31],preset:[15,31],preset_choic:31,presetfilt:31,pretend:6,prevent:[6,17,23,24],previous:[6,17,18,23,24],primari:20,primarili:[14,31],print:12,prior:[25,31],prioriti:20,privaci:[1,30],privileg:[0,6],probabl:13,problem:[5,20],process:[2,6,17,18,20,26,31,33],processcount:31,prod:[15,17],produc:[1,31],product:[1,11,13,15,19],productioninsecur:15,productionreadonli:15,profil:[15,24,31],profilecreatedatefilt:31,profilecreationd:31,program:23,project:[4,9,15,20,31],prompt:[6,18,22,32],properti:[18,31],protect:[0,2,15,28],protocol:[1,6],proven:[1,26],provid:[0,1,2,6,8,11,15,17,28,31],proxi:[15,31],publish:[6,12,15,33],pull:[11,13,23],purpos:[4,18,21],push:[1,5,12],put:[11,15],py:[4,5,11,12,13],pytest:[5,7,13],python:[4,11,12,13,15,31],q1:20,qa:[14,20],qaonlyfilt:31,qualifi:31,quantum:31,queri:[15,18,20],question:[2,23],quickli:6,quo:2,quot:31,r:13,rail:20,ran:[1,31],random:[15,24],randomli:[24,31],rang:[1,15,31],rate:[1,27,31],ratio:24,raven:15,raw:31,raymondhil:31,re:[1,2,4,13,15,24,25,31],reach:15,read:[6,15,17,24,28,31],readabl:[15,18],readi:[0,4],readm:31,readthedoc:15,real:[1,31],reason:[5,23],rebuild:13,receiv:[2,15],recent:[6,31],recip:[2,3,4,9,10,11,12,14,15,17,19,20,22,23,24,25,26,27,28,30,31,32],recipes_:31,recommend:[15,24,31],record:[0,1,2,12,14,15],recycl:15,redirect:[6,15],redownload:1,reduc:[0,1,12,15],ref:15,refer:[0,11,15,20,23],refetch:[1,2],refin:12,reflect:13,refresh:4,regardless:24,regex:15,registeract:18,reject:33,rel:[1,2,15],relat:[1,12,16,20],releas:[6,15,18,20,24,31],relev:1,reli:[1,31],remot:[0,3,6,10,14,15,17],remote_settings_retry_request:15,remov:[6,11,18,30],repeat:26,repetit:27,replac:[0,15,27],replai:0,repli:1,repo:[11,13],report:[7,13,15,20],repositori:[8,11,13,20],repres:[6,23,31],represent:0,request:[0,9,11,15,18,28,31,33],request_tim:31,requir:[0,1,3,6,7,10,11,13,15,17,18,31,33],requirebuiltincert:23,reset:24,resign:15,resourc:[0,1,13,20],respect:[24,27],respond:15,respons:[1,15,18,27],rest:[23,31,32],restart:11,restrict:[6,31],result:[1,12,15,31],retri:[1,15],retriev:[6,15,18],retrospect:[0,1,2],reveal:1,revert:25,review:[18,20,33],revision_id:[6,18],rewritten:1,rfc7515:0,rfc:0,rid:12,right:[27,31],risk:[0,6,15,17],role:0,roll:26,rollback:[22,26,32],rollout:[22,25,32],root:[0,4,11,15,17],root_hash:17,rout:15,rule:[1,27,31],run:[0,4,6,7,8,10,11,12,15,17,18,23,24,25,26,30,31],runner:28,runsslserv:11,runtim:6,rust:1,s3:15,s3boto3permissivestorag:15,s:[0,1,2,5,6,13,15,18,20,21,23,24,28,31],sacrif:1,safe:[11,13],safer:0,same:[1,2,15,23,24,25,26,31],sampl:31,sandbox:18,sanit:15,satur:2,save:[11,23,24,33],saw:31,schedul:20,schema:[15,18,31],script:11,search:31,searchengin:31,second:[15,31],secret:15,secret_kei:15,section:[0,8,11,17,31],secur:[0,1,2,10,15,17,30],see:[2,11,14,15,18,31],seed:15,seem:2,seen:[18,31],select:31,self:[5,11,23,31],send:[1,2,15,18,30],sensit:1,sent:[6,15,24,26],sentri:15,separ:[0,6,33],seper:15,seri:31,serial:0,serv:[0,1,6,10,12,15,17,18],server:[0,2,4,6,8,9,10,11,14,15,16,17,18,19,25,26,28,33],server_addr:11,servic:[0,1,2,6,12,15,18,20,31],set:[0,3,5,6,8,9,10,14,16,17,23,24,26,27,28,31],setitem:18,setup:[4,10,13,14],sever:[0,1,6,17,24,28,31],sh:11,shape:[28,31],share:15,shell:[4,11],shield:[6,18,30,31],ship:[6,15,18],shockwav:31,should:[0,1,2,5,6,8,11,13,15,23,24,25,27,28,31],shouldn:15,show:[6,18,22,32],shown:[6,18,23,27,31],shownotif:18,shownprevi:18,side:[1,10,14,15,27,31],sign:[2,11,15,23],signatur:[3,6,11,12,14,15,17,31],signer:11,signific:[0,3],similar:[2,18,31],similarli:24,simpl:31,simpler:[2,31],simpli:[0,2,6,11],simplic:0,simplifi:1,sinc:[0,1,6,26,31],singl:[0,1,2,6,18,20,23,31,33],site:[8,11,13],situat:24,size:[24,31],skip:[4,7],slash:15,slowli:1,slug:[24,25,26,31],small:2,so:[1,4,11,18,24,31],soft:31,softwar:3,some:[0,1,2,4,5,9,13,18,23,28,31,33],someth:[5,31],sometim:[17,24],sort:0,sourc:[0,14,15,29,31],space:31,special:[23,31],specif:[6,12,15,18,31],specifi:[6,11,15,18,28,31],speed:12,spoof:0,spread:31,ssl:11,stabl:[15,28,31],stablesampl:[6,31],stablesamplefilt:31,stage:[4,19,33],stand:[0,31],standard:[15,31],star:27,start:[8,11,13,15,26,31],startup:[9,24,26],state:1,statement:[18,31],statsd:15,statu:[0,1,2,6,20],std:15,step:[0,2,4,5,8,11,13,18],still:[15,23,24],stop:26,storag:[15,18],store:[1,2,6,15,18],strategi:20,strict:31,string:[6,15,18,31],strong:0,studi:[22,24,32],style:[11,23],subdirectori:13,subdomain:15,subfilt:31,subject:[14,15],submit:[6,11,18],subset:[0,6],substr:31,subtl:0,success:15,suffici:[2,5],suggest:28,suit:[10,13],sumo:30,superior:15,supersed:24,superus:11,suppli:0,support:[1,2,11,13,15,17,26,28,31],sure:[0,4,7],surround:31,survei:[6,27,31],sync:[0,2,3,14,15,17,31],sync_remote_set:12,syncdesktopdevic:31,synchron:[0,1,2,10],syncmobiledevic:31,syncsetup:31,synctotaldevic:31,syntact:31,syntax:31,system:[0,2,6,8,11,15,18,23,24,31],t:[0,1,5,7,8,9,13,15,17,18,23,24,26,31],tab:[27,30],tabl:31,tablet:31,take:[2,6,13,31],tamper:13,target:[6,24,31],team:[1,23],technic:[6,30],techniqu:0,telemetri:[1,6,12,31],temporari:26,temporarili:[22,32],tempt:6,term:[2,6,13],termin:[5,8,11],terminolog:23,test:[1,6,10,14,15,17,18,19,21,24,32,33],tester:19,text:[6,18,27,28],than:[1,2,13,15,17,24,31],thank:[1,27],thei:[0,1,2,6,8,13,15,17,22,23,26,30,31,33],them:[0,1,6,9,10,11,17,24,31],theme:31,theori:[0,8,11],therapist:[10,13],thi:[0,1,2,4,5,6,7,8,9,11,12,13,14,15,17,18,20,22,23,24,25,26,27,28,29,30,31,33],thing:[7,13,17,22],those:[1,6,8,31],though:[1,5,6,17],three:[6,27],through:[2,6,12,15,17,33],throughput:0,thu:27,time:[0,1,2,9,11,13,15,17,18,23,24,26,28,30,31],timeout:15,timestamp:[0,1],titl:18,tl:0,to_review_en:11,todai:23,todo:17,togeth:31,token:15,too:15,tool:[0,1,4,7,13,20,28],toolkit:29,top:[27,28,30,31],total:[24,31],toward:[17,31],track:[1,12,31],traffic:24,train:20,transfer:1,translat:6,treat:31,trigger:18,trust:[0,2,9,15],truthi:31,tuesdai:31,ture:6,turn:[12,15,31],twice:24,twitter:31,two:[2,6,20,24,27,28,31,33],txt:13,type:[11,18,24,26,28,31],typic:[6,17,23,27],u:11,ublock0:31,ui:[20,28],ultim:1,uncheck:[23,24,30],uncoordin:0,uncorrel:31,undefin:31,under:[8,30,31],underscor:15,understand:[24,31],understood:0,undo:[22,32],undon:[25,26],unenrol:24,unexpect:1,unifi:12,uniformli:31,uninstal:[23,30,31],unintend:0,uniqu:[0,15,24,25,26,31],unit:[0,15,23],unix:[8,11],unknown:17,unless:[23,24],unlik:[15,17,31],unpredict:31,unquot:31,unset:15,unstructur:15,unsur:13,until:[26,27,30],up:[0,1,4,5,8,10,11,12,17,18,20,24,31],updat:[0,1,2,6,10,11,12,18,20,24,26,31,33],update_act:[11,13],update_product_detail:[11,13],upload:15,upon:[6,18,31],uptak:[1,12],uri:[0,15],url:[0,6,11,15,18,24,27],us:[3,4,5,6,7,8,9,12,13,14,15,17,18,20,21,22,23,24,26,27,28,30,31],usag:23,user:[0,1,2,6,9,10,11,14,15,17,18,20,24,25,26,27,31,33],userid:31,userinfo:15,usernam:[11,15],usual:15,util:11,uuid:[27,31],v1:[4,11,15,17,18,20,28,31],v2:[28,31],v3:[4,11,20,28],v4:31,v:4,valid:[0,3,14,15,18,31],valu:[15,17,24,25,26,27,31],vari:[0,31],variabl:[15,31],variant:[6,31],variat:31,varieti:6,variou:1,ve:[11,13,18,30,31],vector:[0,2],veri:[0,1,24],verif:[0,2],verifi:[0,2,6,11,13,15],version:[1,2,4,6,13,17,20,26,28,31,33],versionfilt:31,versionrang:31,versionrangefilt:31,versions_list:31,vi:5,via:[0,2,6,8,17,18,23,31],view:[11,15,30],viewport:27,violat:15,virtual:[4,11],virtualenv:7,visibl:[12,31],visit:15,volum:[10,24],vpn:[6,17,28],wa:[0,1,2,12,23,31],wai:[0,2,6,11,12,17,30],wait:[6,15],want:[4,6,11,13,18,24,31],wast:1,watch:13,we:[0,1,4,5,6,7,9,12,13,15,18,31],weak:6,web:[0,5,6,8,18,31],web_concurr:15,webpack:10,webpag:27,week:15,weirdli:2,welcom:31,well:[0,1,2,8,10,11,15,17,18,22,23,24,30,31],were:[0,1,6,18,23,33],what:[0,5,13,17,31],wheel:13,when:[0,1,2,5,6,11,12,13,15,17,23,24,26,27,31],whenev:[11,27],where:[4,6,15,23,24],whether:[6,15,31],which:[0,1,6,15,23,24,27,30,31],whitespac:31,who:[15,24,25,26,31,32],whole:[2,23],whose:31,wikipedia:31,wild:14,window:[8,11,31],windowsbuildnumb:31,windowsbuildnumberfilt:31,windowsvers:31,windowsversionfilt:31,wise:1,within:[6,18,24,31],without:[0,1,2,6,11,15,22,31,32],won:[15,31],word:[15,31],work:[0,1,2,5,6,10,13,15,17,19,20,23,26,28,31,32],worker:15,workflow:[10,14,32],workspac:[11,15],world:1,would:[0,1,2,6,11,15,17,23,31],wrap:31,wrench:31,writabl:6,write:[15,19,28,31],writer:15,written:[27,31],wrong:0,www:15,x5u:[0,15],x:[0,11,15,27],xhr:15,xpinstal:31,xx:31,yahoo:31,yarn:[11,13],year:[0,1,15],yet:[11,18],yml:[5,8],you:[4,5,7,8,11,13,17,23,24,27,28,31],your:[5,7,8,10,11,28,31],yourself:17,yy:31,za:31,zero:[15,23]},titles:["ADR 0001 - Ensuring recipe integrity using Content Signature","ADR 0002 - Syncing data to Firefox with Remote Settings","ADR 0002 - How to validate Normandy data in Remote Settings","Architectural Decision Records","API Contract Tests","Continuous Integration","Concepts","Test Coverage","Docker Setup for local development","Feature Experiments","Developer Documentation","Developer Setup","Remote Settings","Workflow","Normandy","Configuration","Operations Documentation","Environments","Example","QA Documentation","Normandy Test Engineering","console-log: Log to the Console","Actions","opt-out-study: Install a Study Add-on Without Prompting","preference-experiment: Temporarily Change a Preference","preference-rollback: Undo a preference rollback","preference-rollout: Permanently Change a Preference","show-heartbeat: Show Heartbeat Prompt","API","Data Collection","End User Interaction","Filters","User Documentation","Peer Approval"],titleterms:{"0001":0,"0002":[1,2],"1":[0,1,2,18],"2":[1,2,18],"3":[1,18],"4":[1,18],"function":18,"new":[13,33],No:5,about:30,action:[6,18,22],ad:[13,18],add:23,admin:6,adr:[0,1,2],all:[1,2],altern:11,an:1,annot:[24,26],api:[4,28],approv:[6,33],architectur:3,argument:[21,23,24,25,26,27],asset:13,autograph:11,basic:31,both:2,branch:24,build:13,chang:[24,26,33],classif:9,client:[6,9,12,20],collect:[0,29],con:[0,1,2],concept:6,condit:24,configur:[6,15],consequ:[0,1,2],consid:[0,1,2],consider:6,consol:[20,21],content:0,context:[0,1,2,31],continu:5,contract:4,coverag:7,creat:18,data:[1,2,29],decis:[0,1,2,3],deliveri:[18,20],depend:13,dev:17,develop:[8,10,11],devtool:31,disqualif:24,django:15,docker:8,document:[10,13,16,19,32],don:2,driver:[0,1,2,18],each:1,end:[24,30],engin:20,ensur:0,environ:17,exampl:[18,31],experi:[9,24],express:31,featur:9,fetch:1,filter:[24,31],firefox:[1,20],flow:23,from:1,gcp:20,graduat:26,graphql:28,gunicorn:15,heartbeat:27,how:2,http:[0,1],implement:1,individu:0,instal:[8,11,23],instanc:13,instruct:6,integr:[0,5,12],interact:[28,30],jexl:31,lazi:9,lint:13,local:[8,13,17],log:21,manual:12,migrat:20,mount:5,neg:[0,1,2],normandi:[1,2,6,14,15,20,31],note:23,notif:18,object:31,onli:[0,2],ons:23,oper:[16,31],opt:[23,30],option:[0,1,2],out:[23,30],outcom:[0,1,2],peer:[6,33],perman:26,ping:27,posit:[0,1,2],prefer:[17,24,25,26,30,31],preprocess:13,prerequisit:[8,11],pro:[0,1,2],problem:[0,1,2],process:1,product:17,prompt:[23,27],qa:19,recip:[0,1,6,18,33],record:3,remot:[1,2,11,12],request:1,requir:4,respons:0,rest:28,rollback:25,rollout:26,run:[1,5,13],safe:6,secur:6,server:[1,12,20],set:[1,2,11,12,15],setup:[8,11],show:27,side:12,sign:[0,6],signatur:[0,2],smart:1,stage:17,statement:[0,1,2],studi:[23,30],suit:5,swagger:28,sync:1,synchron:12,system:1,t:2,telemetri:[24,26,27],temporarili:24,test:[4,7,13,20,23,31],therapist:11,transform:31,undo:25,updat:13,upload:23,us:[0,1,2,11],user:[23,30,32],valid:2,via:1,volum:5,webpack:13,whole:0,without:23,workflow:[13,33],write:18,your:13}})