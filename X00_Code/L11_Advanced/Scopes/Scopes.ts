namespace Scope {
    class ScopeSuper {
        static x: string = "ScopeSuperStatic";             // Scope of superclass
        protected x: string = "ScopeSuperObject";                    // Scope of superobject

        log(): void {
            console.group("Super");
            let x: string = "ScopeSuperMethod";
            log("ScopeSuperMethod", x);
            log("ScopeSuperObject", this.x);
            console.groupEnd();
        }
    }

    class ScopeSub extends ScopeSuper {
        static x: string = "ScopeSubStatic";               // Scope of subclass
        protected x: string = "ScopeSubObject";                      // Scope of subobject

        log(): void {
            console.group("Sub");
            let x: string = "ScopeSubMethod";              // Scope of method
            {
                let x: string = "ScopeSubMethodBlock";     // Scope of block
                log("ScopeSubMethodBlock", x);
                log("ScopeSubObject", this.x);
                log("ScopeSuperObject", super.x);
                super.log();
            }
            log("ScopeSubMethod", x);
            console.groupEnd();
        }
    }

    let x: string = "Scope";                               // Scope of namespace
    let sub: ScopeSub = new ScopeSub();
    let sup: ScopeSuper = new ScopeSuper();

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

    function method(): void {
        let x: string = "ScopeMethod";
        log("ScopeMethod", x);
    }

    export function log(_expected: string, _is: string): void {
        if (_expected == _is)
            console.log(_expected, " == ", _is);
        else
            console.warn(_expected, " != ", _is);
    }
}

console.group("File");
let x: string = "File";                                 // Scope of file
Scope.log("File", x);
console.groupEnd();
