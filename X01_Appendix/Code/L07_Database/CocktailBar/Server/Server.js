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
        connectToDatabase("Cocktailbar", "mongodb://localh   ost:27017");
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
    async function connectToDatabase(_name, _url) {
        console.log("Connecting to database", _name, _url);
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = await Mongo.MongoClient.connect(_url, options);
        orders = mongoClient.db(_name).collection("Orders");
        console.log("Connection", orders != undefined);
    }
    async function storeOrder(_order) {
        await orders.insertOne(_order);
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