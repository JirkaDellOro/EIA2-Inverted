"use strict";
var L06_NodeAPI;
(function (L06_NodeAPI) {
    console.log("Hallo");
    let x = 0;
    console.log(x);
    x++;
    console.warn(x);
    console.log(process.env.COMPUTERNAME);
    console.log(process.env.USERNAME);
    console.log(process.env.PORT);
    console.log(process.argv);
    console.log("Hallo " + process.argv[2]);
    // process.addListener("exit", handleExit);
    setTimeout(handleTimeout, 2000);
    function handleTimeout(_event) {
        console.log("Timeout");
    }
    // function handleExit(_event: Event): void {
    //     console.log("Tschüss!");
    // }
})(L06_NodeAPI || (L06_NodeAPI = {}));
//# sourceMappingURL=Test.js.map