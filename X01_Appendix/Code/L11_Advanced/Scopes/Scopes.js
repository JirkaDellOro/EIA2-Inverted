"use strict";
var Scope;
(function (Scope) {
    class ScopeSuper {
        constructor() {
            this.x = "ScopeSuperObject"; // Scope of superobject
        }
        log() {
            console.group("Super");
            let x = "ScopeSuperMethod";
            log("ScopeSuperMethod", x);
            log("ScopeSuperObject", this.x);
            console.groupEnd();
        }
    }
    ScopeSuper.x = "ScopeSuperStatic"; // Scope of superclass
    class ScopeSub extends ScopeSuper {
        constructor() {
            super(...arguments);
            this.x = "ScopeSubObject"; // Scope of subobject
        }
        log() {
            console.group("Sub");
            let x = "ScopeSubMethod"; // Scope of method
            {
                let x = "ScopeSubMethodBlock"; // Scope of block
                log("ScopeSubMethodBlock", x);
                log("ScopeSubObject", this.x);
                log("ScopeSuperObject", super.x);
                super.log();
            }
            log("ScopeSubMethod", x);
            console.groupEnd();
        }
    }
    ScopeSub.x = "ScopeSubStatic"; // Scope of subclass
    let x = "Scope"; // Scope of namespace
    let sub = new ScopeSub();
    let sup = new ScopeSuper();
    sub.log();
    sup.log();
    console.group("Scope");
    log("Scope", x);
    log("ScopeSuperStatic", ScopeSuper.x);
    log("ScopeSubStatic", ScopeSub.x);
    console.groupEnd();
    console.group("Method");
    method();
    console.groupEnd();
    function method() {
        let x = "ScopeMethod";
        log("ScopeMethod", x);
    }
    function log(_expected, _is) {
        if (_expected == _is)
            console.log(_expected, " == ", _is);
        else
            console.warn(_expected, " != ", _is);
    }
    Scope.log = log;
})(Scope || (Scope = {}));
console.group("File");
let x = "File"; // Scope of file
Scope.log("File", x);
console.groupEnd();
//# sourceMappingURL=Scopes.js.map