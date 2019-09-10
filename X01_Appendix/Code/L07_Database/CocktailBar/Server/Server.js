"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="Database.ts"/>
const Http = require("http");
const Url = require("url");
const Database = require("./Database");
var database = Database.L07_CocktailBar;
// let Http: typeof import("http") = import("http").then;
// @ts-ignore no-unused-variable
var L07_CocktailBar;
(function (L07_CocktailBar) {
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    console.log("Starting server on port " + port);
    let server = Http.createServer();
    server.listen(port);
    server.addListener("request", handleRequest);
    // Database
    database.insert({ "x": 10 });
    // server.addListener("listening", handleListen);
    // function handleListen(): void {
    //     console.log("Listening");
    // }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            for (let key in url.query)
                _response.write(key + ":" + url.query[key] + "[" + typeof (url.query[key]) + "]<br/>");
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        _response.end();
    }
})(L07_CocktailBar || (L07_CocktailBar = {}));
//# sourceMappingURL=Server.js.map