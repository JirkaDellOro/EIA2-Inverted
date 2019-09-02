"use strict";
var L05_Client;
(function (L05_Client) {
    //#region Startup
    window.addEventListener("load", start);
    // let url: string = "https://jirkadelloro.github.io/EIA2-Inverted/L05_Client/Material/Test.txt";
    let url = "Test.txt";
    function start(_event) {
        document.querySelectorAll("fieldset")[1].addEventListener("click", handleButtons);
    }
    function handleButtons(_event) {
        console.log("Start");
        // create query string
        let formData = new FormData(document.forms[0]);
        formData.append("Test", "Success");
        let query = new URLSearchParams(formData);
        console.log("Query", query);
        let urlAndQuery = url + "?" + query.toString();
        switch (_event.target.textContent) {
            case "Promise":
                communicatePromise(urlAndQuery);
                break;
            case "Async/Await":
                communicateAwait(urlAndQuery);
                break;
        }
        console.log("End");
    }
    //#endregion
    //#region Async/Await
    async function communicateAwait(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
        let content = await response.text();
        console.log("Content", content);
    }
    //#endregion
    //#region Promise
    function communicatePromise(_url) {
        let promise = fetch(_url);
        promise.
            then(handleSuccess, handleFailure).
            then(printContent, null);
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