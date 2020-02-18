namespace L05_Client {
    //#region Startup
    window.addEventListener("load", start);
    // let url: string = "https://jirkadelloro.github.io/EIA2-Inverted/L05_Client/Material/Test.txt";
    let url: string = "Test.txt";

    function start(_event: Event): void {
        document.querySelectorAll("fieldset")[1].addEventListener("click", handleButtons);
    }
    function handleButtons(_event: MouseEvent): void {
        console.log("Start");

        // create query string
        let formData: FormData = new FormData(document.forms[0]);
        formData.append("Test", "Success"); 
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        console.log("Query", query);
        let urlAndQuery: string = url + "?" + query.toString();

        switch ((<HTMLElement>_event.target).textContent) {
            case "Promise":
                communicatePromise(urlAndQuery);
                break;
            case "Async/Await":
                communicateAwait(urlAndQuery);
                break;
        }
        console.log("End")
    }
    //#endregion

    //#region Async/Await
    async function communicateAwait(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        console.log("Response", response);
        let content: string = await response.text();
        console.log("Content", content);
    }
    //#endregion

    //#region Promise
    function communicatePromise(_url: RequestInfo): void {
        let promise: Promise<Response> = fetch(_url);
        promise.
            then(handleSuccess, handleFailure).
            then(printContent, null);
    }

    function handleFailure(_response: Response): void {
        console.log("Failure", _response);
    }

    function handleSuccess(_response: Response): Promise<string> {
        console.log("Response", _response);
        return _response.text();
    }

    function printContent(_text: string | void): void {
        console.log("Content", _text);
    }
    //#endregion
}