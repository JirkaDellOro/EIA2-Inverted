"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
// @ts-ignore no-unused-variable
var L06_CocktailBar;
(function (L06_CocktailBar) {
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    console.log("Starting server on port " + port);
    let server = Http.createServer();
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Onpm i @types/noderigin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            for (let key in url.query)
                _response.write(key + ":" + url.query[key] + "[" + typeof (url.query[key]) + "]<br/>");
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        _response.end();
    }
})(L06_CocktailBar || (L06_CocktailBar = {}));
//# sourceMappingURL=Server.js.map