"use strict";
var L07_ReceiveResponse;
(function (L07_ReceiveResponse) {
    window.addEventListener("load", init);
    let address = "http://localhost:8100";
    //let address: string = "https://eia2-nodetest.herokuapp.com";
    function init(_event) {
        setupAsyncForm();
        //setupColorDivs();
    }
    function setupAsyncForm() {
        let button = document.querySelector("[type=button]");
        button.addEventListener("click", handleClickOnAsync);
    }
    function handleClickOnAsync(_event) {
        let color = document.querySelector(":checked").value;
        sendRequestWithCustomData(color);
    }
    function sendRequestWithCustomData(_color) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?color=" + _color, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        let xhr = _event.target;
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
})(L07_ReceiveResponse || (L07_ReceiveResponse = {}));
//# sourceMappingURL=SendData.js.map