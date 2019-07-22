// import * as Http from "http";
// import * as Url from "url";

// namespace L06_ReceiveResponse {
//     console.log("Starting server");
//     let port: number | string | undefined = process.env.PORT;
//     if (port == undefined)
//         port = 8100;

//     console.log(L06_ReceiveResponse);

//     let server: Http.Server = Http.createServer();
//     server.addListener("request", handleRequest);
//     server.addListener("listening", handleListen);
//     server.listen(port);

//     function handleListen(): void {
//         console.log("Listening");
//     }

//     function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
//         console.log("I hear voices!");

//         _response.setHeader("content-type", "text/html; charset=utf-8");
//         _response.setHeader("Access-Control-Allow-Origin", "*");

//         if (_request.url) {
//             let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
//             for (let key in url.query)
//                 _response.write(key + ":" + url.query[key] + "[" + typeof (url.query[key]) + "]<br/>");

//             let jsonString: string = JSON.stringify(url.query);
//             _response.write(jsonString);
//         }
//         _response.end();
//     }
// }