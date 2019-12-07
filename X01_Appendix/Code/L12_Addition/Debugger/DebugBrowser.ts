namespace L12_DebugBrowser {
    console.log("Debugging browser application in VSCode!");
    debugger;
    let params: URLSearchParams = new URLSearchParams(location.search);
    console.log(params.get("message"));
}