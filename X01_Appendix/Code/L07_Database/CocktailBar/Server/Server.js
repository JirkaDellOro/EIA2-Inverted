"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
// @ts-ignore no-unused-variable
var L07_CocktailBar;
(function (L07_CocktailBar) {
    let orders;
    // running on heroku?
    if (process.env.NODE_ENV == "production") {
        // databaseURL = "mongodb+srv://username:password@hostname:port/database";
        connectToDatabase("eia2", "mongodb+srv://testuser:testpassword@eia2-57vpd.mongodb.net/eia2");
        startServer(process.env.PORT);
    }
    else {
        connectToDatabase("Test", "mongodb://localhost:27017");
        startServer(5001);
    }
    function startServer(_port) {
        console.log("Starting server on port " + _port);
        let server = Http.createServer();
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
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
    async function connectToDatabase(_name, _url) {
        console.log("Connecting to database", _name, _url);
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = await Mongo.MongoClient.connect(_url, options);
        orders = mongoClient.db(_name).collection("Orders");
        console.log("Database", orders);
    }
})(L07_CocktailBar || (L07_CocktailBar = {}));
//# sourceMappingURL=Server.js.map