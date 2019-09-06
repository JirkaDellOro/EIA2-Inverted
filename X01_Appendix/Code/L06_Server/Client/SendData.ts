namespace L06_ReceiveResponse {
    window.addEventListener("load", init);
    let address: string = "http://localhost:8100";
    //let address: string = "https://eia2-nodetest.herokuapp.com";

    function init(_event: Event): void {
        setupAsyncForm();
        //setupColorDivs();
    }

    function setupAsyncForm(): void {
        let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("[type=button]");
        button.addEventListener("click", handleClickOnAsync);
    }

    function handleClickOnAsync(_event: Event): void {
        let color: string = (<HTMLInputElement>document.querySelector(":checked")).value;
        sendRequestWithCustomData(color);
    }

    function sendRequestWithCustomData(_color: string): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?color=" + _color, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }

    function handleStateChange(_event: Event): void {
        let xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }
    /* * / 
    function setupColorDivs(): void {
        let colors: string[] = ["red", "green", "blue"];
        let divs: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
        for (let i: number = 0; i < divs.length; i++) {
            divs[i].style.backgroundColor = colors[i];
            divs[i].addEventListener("click", handleClickOnDiv);
        }
    }
    /* * / 

    /* * / 
    function handleClickOnDiv(_event: Event): void {
        let style: CSSStyleDeclaration = (<HTMLElement>_event.target).style;
        console.log(style.backgroundColor);
        sendRequestWithCustomData(style.backgroundColor);
    }
    /* */ 
}