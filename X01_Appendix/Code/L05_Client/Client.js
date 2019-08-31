"use strict";
var L05_Client;
(function (L05_Client) {
    //#region Startup
    window.addEventListener("load", start);
    let url = "https://jirkadelloro.github.io/EIA2-Inverted/L05_Client/Material/Test.txt";
    function start(_event) {
        document.querySelectorAll("fieldset")[1].addEventListener("click", handleButtons);
    }
    function handleButtons(_event) {
        console.log("Start");
        switch (_event.target.textContent) {
            case "Promise":
                communicatePromise(url, {});
                break;
            case "Async/Await":
                communicateAwait(url, {});
                break;
        }
        console.log("End");
    }
    //#endregion
    //#region Async/Await
    async function communicateAwait(_url, _data) {
        let response = await fetch(_url, _data);
        console.log("Response", response);
        let content = await response.text();
        console.log("Content", content);
    }
    //#endregion
    //#region Promise
    function communicatePromise(_url, _data) {
        let promise = fetch(_url, _data);
        promise.
            then(handleSuccess, handleFailure).
            then(printContent);
    }
    function handleFailure(_response) {
        console.log("Failure", _response);
    }
    function handleSuccess(_response) {
        console.log("Response", _response);
        return _response.text();
    }
    function printContent(_text) {
        console.log("Content", _text);
    }
    //#endregion
})(L05_Client || (L05_Client = {}));
//# sourceMappingURL=Client.js.map