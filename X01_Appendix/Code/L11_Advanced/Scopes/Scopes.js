"use strict";
var N1;
(function (N1) {
    class N1Super {
        constructor() {
            this.x = "N1SuperObject"; // Scope of object
            //
        }
        log() {
            let x = "N1SuperMethod";
            console.log("N1SuperMethod", x);
            console.log("N1SuperObject", this.x);
        }
    }
    N1Super.x = "N1SuperStatic"; // Scope of super class
    class N1Sub extends N1Super {
        constructor() {
            super();
            this.x = "N1SubObject"; // Scope of object
        }
        log() {
            let x = "N1SubMethod"; // Scope of method
            {
                let x = "N1SubMethodBlock"; // Scope of block
                console.log("N1SubMethodBlock", x);
                console.log("N1SubObject", this.x);
                console.log("N1SuperObject--", super.x);
                super.log();
            }
            console.log("N1SubMethod", x);
        }
    }
    N1Sub.x = "N1SubStatic"; // Scope of super class
    let x = "N1"; // Scope of namespace
    let sub = new N1Sub();
    console.log("N1", x);
    console.log("N1SuperStatic", N1Super.x);
    console.log("N1SubStatic", N1Sub.x);
    sub.log();
})(N1 || (N1 = {}));
let x = "File";
console.log(x);
//# sourceMappingURL=Scopes.js.map