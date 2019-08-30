namespace L05_Client {
    window.addEventListener("load", start);

    function start(_event: Event): void {
        fetchPromise();
        fetchAsync();
        console.log("geht doch!")
    }

    function fetchPromise(): void {
        let promise: Promise<Response> = fetch("Test.txt", );
        promise.then(handleSuccess, handleFailure);
    }
    
    async function fetchAsync(): Promise<void> {
        let response: Response = await fetch("Test.txt");
        console.log("Async", await response.text());
    }

    function handleFailure(_response: Response): void {
        console.log("Failure", _response);
    }

    function handleSuccess(_response: Response): void {
        console.log("Promise", _response);
        console.log(_response.text().then((_text: string) => {
            console.log("Content", _text);
        }));
    }
}