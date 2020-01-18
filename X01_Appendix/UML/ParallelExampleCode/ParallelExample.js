"use strict";
var ParallelExample;
(function (ParallelExample) {
    waitForSomething();
    doSomethingElse();
    async function waitForSomething() {
        console.log("starting to wait for something");
        await something();
        console.log("done waiting for something");
    }
    function doSomethingElse() {
        console.log("doing something else");
    }
    async function something() {
        return new Promise(_resolve => setTimeout(_resolve, 1000));
    }
})(ParallelExample || (ParallelExample = {}));
//# sourceMappingURL=ParallelExample.js.map