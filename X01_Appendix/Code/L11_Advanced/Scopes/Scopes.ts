namespace N1 {
    class N1Super {
        static x: string = "N1SuperStatic";             // Scope of super class
        x: string = "N1SuperObject";                    // Scope of object

        constructor() {
            //
        }

        log(): void {
            let x: string = "N1SuperMethod";
            console.log("N1SuperMethod", x);
            console.log("N1SuperObject", this.x);
        }
    }

    class N1Sub extends N1Super {
        static x: string = "N1SubStatic";               // Scope of super class
        x: string = "N1SubObject";                      // Scope of object

        constructor() {
            super();
        }

        log(): void {
            let x: string = "N1SubMethod";              // Scope of method
            {
                let x: string = "N1SubMethodBlock";     // Scope of block
                console.log("N1SubMethodBlock", x);
                console.log("N1SubObject", this.x);
                console.log("N1SuperObject--", super.x);
                super.log();
            }
            console.log("N1SubMethod", x);
        }
    }


    let x: string = "N1";                               // Scope of namespace
    let sub: N1Sub = new N1Sub();

    console.log("N1", x);
    console.log("N1SuperStatic", N1Super.x);
    console.log("N1SubStatic", N1Sub.x);
    sub.log();
}

let x: string = "File";
console.log(x);