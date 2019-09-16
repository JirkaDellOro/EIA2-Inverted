import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

// @ts-ignore no-unused-variable
namespace L07_CocktailBar {
    let orders: Mongo.Collection;

    // running on heroku?
    if (process.env.NODE_ENV == "production") {
        // databaseURL = "mongodb+srv://username:password@hostname:port/database";
        connectToDatabase("eia2", "mongodb+srv://testuser:testpassword@eia2-57vpd.mongodb.net/eia2");
        startServer(process.env.PORT);
    } else {
        connectToDatabase("Test", "mongodb://localhost:27017");
        startServer(5001);
    }

    function startServer(_port: number | string | undefined) {
        console.log("Starting server on port " + _port);
        let server: Http.Server = Http.createServer();
        server.listen(_port);
        server.addListener("request", handleRequest);
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            for (let key in url.query)
                _response.write(key + ":" + url.query[key] + "[" + typeof (url.query[key]) + "]<br/>");

            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        _response.end();
    }

    async function connectToDatabase(_name: string, _url: string): Promise<void> {
        console.log("Connecting to database", _name, _url);
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = await Mongo.MongoClient.connect(_url, options);
        orders = mongoClient.db(_name).collection("Orders");
        console.log("Database", orders);
    }
}