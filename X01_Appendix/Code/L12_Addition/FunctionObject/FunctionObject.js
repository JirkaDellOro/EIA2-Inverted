"use strict";
var L12_FunctionObject;
(function (L12_FunctionObject) {
    class Test {
        constructor() {
            // arrow function as event handler
            this.arrow = (_event) => {
                console.log("Arrow", this);
            };
            // bind this to method bound of this object
            this.bound = this.bound.bind(this);
        }
        // classic event handler
        classic(_event) {
            console.log("Classic", this);
        }
        // classic event handler bound to this
        bound(_event) {
            console.log("Bound", this);
        }
    }
    // anonymous arrow function as event handler for load-event
    window.addEventListener("load", () => {
        let test = new Test();
        let button = document.querySelector("button");
        button.addEventListener("click", test.classic);
        button.addEventListener("click", test.arrow);
        button.addEventListener("click", test.bound);
    });
    // classic functino
    function sum(_a, _b) {
        console.log("Sum = ", _a + _b);
    }
    // call to classic function
    sum(1, 2);
    // create a reference to function
    let ref = sum;
    // call the same function using the reference
    ref(1, 2);
    // anonymous function to be called after two seconds
    setTimeout(function () {
        console.log("Timeout");
    }, 2000);
})(L12_FunctionObject || (L12_FunctionObject = {}));
//# sourceMappingURL=FunctionObject.js.map