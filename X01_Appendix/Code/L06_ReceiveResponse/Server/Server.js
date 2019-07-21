import * as Http from "http";
import * as Url from "url";
var L07_ReceiveResponse;
(function (L07_ReceiveResponse) {
    console.log("Starting server");
    let port = process.env.PORT;
    if (port == undefined)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let url = Url.parse(_request.url, true);
        for (let key in url.query)
            _response.write(key + ":" + url.query[key] + "<br/>");
        //        let jsonString: string = JSON.stringify(url.query);
        //        _response.write(jsonString);
        _response.end();
    }
})(L07_ReceiveResponse || (L07_ReceiveResponse = {}));
//# sourceMappingURL=Server.js.map