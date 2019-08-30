"use strict";
var L05_Client;
(function (L05_Client) {
    window.addEventListener("load", start);
    function start(_event) {
        fetchPromise();
        fetchAsync();
        console.log("geht doch!");
    }
    function fetchPromise() {
        let promise = fetch("Test.txt");
        promise.then(handleSuccess, handleFailure);
    }
    async function fetchAsync() {
        let response = await fetch("Test.txt");
        console.log("Async", await response.text());
    }
    function handleFailure(_response) {
        console.log("Failure", _response);
    }
    function handleSuccess(_response) {
        console.log("Promise", _response);
        console.log(_response.text().then((_text) => {
            console.log("Content", _text);
        }));
    }
})(L05_Client || (L05_Client = {}));
//# sourceMappingURL=Client.js.map