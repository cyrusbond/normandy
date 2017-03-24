const {utils: Cu} = Components;
Cu.import("resource://gre/modules/Services.jsm");

this.EXPORTED_SYMBOLS = ["SandboxManager"];

this.SandboxManager = class {
  constructor() {
    this._sandbox = makeSandbox();
    this.holds = [];
  }

  get sandbox() {
    if (this._sandbox) {
      return this._sandbox;
    }
    throw new Error("Tried to use sandbox after it was nuked");
  }

  addHold(name) {
    this.holds.push(name);
  }

  removeHold(name) {
    const index = this.holds.indexOf(name);
    if (index === -1) {
      throw new Error(`Tried to remove non-existant hold "${name}"`);
    }
    this.holds.splice(index, 1);
    this.tryCleanup();
  }

  cloneInto(value, options = {}) {
    return Cu.cloneInto(value, this.sandbox, options);
  }

  cloneIntoGlobal(name, value, options = {}) {
    const clonedValue = Cu.cloneInto(value, this.sandbox, options);
    this.addGlobal(name, clonedValue);
    return clonedValue;
  }

  addGlobal(name, value) {
    this.sandbox[name] = value;
  }

  evalInSandbox(script) {
    return Cu.evalInSandbox(script, this.sandbox);
  }

  tryCleanup() {
    if (this.holds.length === 0) {
      const sandbox = this._sandbox;
      this._sandbox = null;
      Cu.nukeSandbox(sandbox);
    }
  }

  isNuked() {
    // Do this in a promise, so other async things can resolve.
    return new Promise((resolve, reject) => {
      if (!this._sandbox) {
        resolve();
      } else {
        reject(new Error(`Sandbox is not nuked. Holds left: ${this.holds}`));
      }
    });
  }

  /**
   * Wraps a function that returns a Promise from a privileged (i.e. chrome)
   * context and returns a Promise from this SandboxManager's sandbox. Useful
   * for exposing privileged functions to the sandbox, since the sandbox can't
   * access properties on privileged objects, e.g. Promise.then on a privileged
   * Promise.
   * @param {Function} wrappedFunction
   * @param {Object} [options]
   * @param {boolean} [options.cloneInto=false]
   *   If true, the value resolved by the privileged Promise is cloned into the
   *   sandbox before being resolved by the sandbox Promise. Without this, the
   *   result will be Xray-wrapped.
   * @param {boolean} [options.cloneArguments=false]
   *   If true, the arguments passed to wrappedFunction will be cloned into the
   *   privileged chrome context. If wrappedFunction holds a reference to any of
   *   its arguments, you will need this to avoid losing access to the arguments
   *   when the sandbox they originate from is nuked.
   * @return {Function}
   */
  wrapAsync(wrappedFunction, options = {cloneInto: false, cloneArguments: false}) {
    return (...args) => new this.sandbox.Promise((resolve, reject) => {
      if (options.cloneArguments) {
        args = Cu.cloneInto(args, {});
      }

      wrappedFunction(...args).then(result => {
        if (options.cloneInto) {
          result = this.cloneInto(result);
        }

        resolve(result);
      }, err => {
        reject(new this.sandbox.Error(err.message, err.fileName, err.lineNumber));
      });
    });
  }
};


function makeSandbox() {
  const sandbox = new Cu.Sandbox(null, {
    wantComponents: false,
    wantGlobalProperties: ["URL", "URLSearchParams"],
  });

  return sandbox;
}
