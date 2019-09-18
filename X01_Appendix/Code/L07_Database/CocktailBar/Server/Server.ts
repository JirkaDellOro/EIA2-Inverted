import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

// @ts-ignore no-unused-variable
namespace L07_CocktailBar {
    interface Order {
        [type: string]: string | string[];
    }

    let orders: Mongo.Collection;

    // running on heroku?
    if (process.env.NODE_ENV == "production") {
        // databaseURL = "mongodb+srv://username:password@hostname:port/database";
        connectToDatabase("eia2", "mongodb+srv://testuser:testpassword@eia2-57vpd.mongodb.net/eia2");
        startServer(process.env.PORT);
    } else {
        connectToDatabase("Cocktailbar", "mongodb://localh   ost:27017");
        startServer(5001);
    }

    function startServer(_port: number | string | undefined): void {
        console.log("Starting server on port " + _port);
        let server: Http.Server = Http.createServer();
        server.listen(_port);
        server.addListener("request", handleRequest);
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            console.log("Query", url.query);
            if (url.search) {
                if (url.query["command"] == "retrieve") {
                    let retrieved: Object = await retrieveOrders();
                    _response.write(JSON.stringify(retrieved));
                }
                else
                    storeOrder(url.query);
            }
        }
        
        _response.end();
    }

    async function connectToDatabase(_name: string, _url: string): Promise<void> {
        console.log("Connecting to database", _name, _url);
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = await Mongo.MongoClient.connect(_url, options);
        orders = mongoClient.db(_name).collection("Orders");
        console.log("Connection", orders != undefined);
    }

    async function storeOrder(_order: Order): Promise<void> {
        await orders.insertOne(_order);
        console.log("Store", _order);
    }

    async function retrieveOrders(): Promise<Object> {
        console.log("Retrieve");
        var cursor: Mongo.Cursor = orders.find();
        let result: Order[] = await cursor.toArray();
        return result;
    }
}