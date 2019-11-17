namespace L12_FunctionObject {
    class Test {
        constructor() {
            // bind this to method bound of this object
            this.bound = this.bound.bind(this);
        }

        // classic event handler
        classic(_event: Event): void {
            console.log("Classic", this);
        }
        
        // arrow function as event handler
        arrow = (_event: Event): void => {
            console.log("Arrow", this);
        }

        // classic event handler bound to this
        bound(_event: Event): void {
            console.log("Bound", this);
        }
    }

    // anonymous arrow function as event handler for load-event
    window.addEventListener("load", (): void => {
        let test: Test = new Test();
        let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
        button.addEventListener("click", test.classic);
        button.addEventListener("click", test.arrow);
        button.addEventListener("click", test.bound);
    });

    // classic functino
    function sum(_a: number, _b: number): void {
        console.log("Sum = ", _a + _b);
    }

    // call to classic function
    sum(1, 2);
    // create a reference to function
    let ref: Function = sum;
    // call the same function using the reference
    ref(1, 2);

    // anonymous function to be called after two seconds
    setTimeout(function (): void {
        console.log("Timeout");
    },         2000);

}   