"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
// @ts-ignore no-unused-variable
var L07_CocktailBar;
(function (L07_CocktailBar) {
    let orders;
    // TODO: maybe nicer to use argv for remote/local
    // running on heroku?
    if (process.env.NODE_ENV == "production") {
        // databaseURL = "mongodb+srv://username:password@hostname:port/database";
        // "mongodb+srv://readwrite:<password>@jirkadelloro-obydb.mongodb.net/test?retryWrites=true&w=majority"
        startServer(process.env.PORT);
    }
    else {
        connectToDatabase("mongodb+srv://readwrite:xuWg4gj65lJKZjz0@jirkadelloro-obydb.mongodb.net");
        // connectToDatabase("mongodb://localhost:27017");
        startServer(5001);
    }
    function startServer(_port) {
        console.log("Starting server on port " + _port);
        let server = Http.createServer();
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            console.log("Query", url.query);
            if (url.search) {
                if (url.query["command"] == "retrieve") {
                    let retrieved = await retrieveOrders();
                    _response.write(JSON.stringify(retrieved));
                }
                else
                    storeOrder(url.query);
            }
        }
        _response.end();
    }
    async function connectToDatabase(_url) {
        console.log("DatabaseServer", _url);
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Cocktailbar").collection("Orders");
        console.log("Connection", orders != undefined);
    }
    async function storeOrder(_order) {
        await orders.insert(_order);
        console.log("Store", _order);
    }
    async function retrieveOrders() {
        console.log("Retrieve");
        var cursor = orders.find();
        let result = await cursor.toArray();
        return result;
    }
})(L07_CocktailBar || (L07_CocktailBar = {}));
//# sourceMappingURL=Server.js.map