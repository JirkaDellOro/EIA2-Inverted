namespace L05_Client {
    //#region Startup
    window.addEventListener("load", start);
    let url: string = "https://jirkadelloro.github.io/EIA2-Inverted/L05_Client/Material/Test.txt";

    function start(_event: Event): void {
        document.querySelectorAll("fieldset")[1].addEventListener("click", handleButtons);
    }
    function handleButtons(_event: MouseEvent): void {
        console.log("Start");
        switch ((<HTMLElement>_event.target).textContent) {
            case "Promise":
                communicatePromise(url, {});
                break;
            case "Async/Await":
                communicateAwait(url, {});
                break;
        }
        console.log("End")
    }
    //#endregion

    //#region Async/Await
    async function communicateAwait(_url: RequestInfo, _data: RequestInit): Promise<void> {
        let response: Response = await fetch(_url, _data);
        console.log("Response", response);
        let content: string = await response.text();
        console.log("Content", content);
    }
    //#endregion

    //#region Promise
    function communicatePromise(_url: RequestInfo, _data: RequestInit): void {
        let promise: Promise<Response> = fetch(_url, _data);
        promise.
            then(handleSuccess, handleFailure).
            then(printContent);
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