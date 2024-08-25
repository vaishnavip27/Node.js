//server

//to make a http server, we have a built in mpdule called http
const http = require("http");
const fs = require("fs");
const url = require("url");

//this function takes a callback function which can process the incoming request
const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()} : ${req.method} ${
    req.url
  } New request recieved\n `;
  const myUrl = url.parse(req.url);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        if (req.method === "GET") res.end("Homepage");
        break;
      case "/about":
        res.end("About Page");
        break;
      case "/Signup":
        if (req.method === "GET") res.end("This is a signup page");
        else if (req.method === "POST") {
          //DB query
          res.end("Success");
        }
      default:
        res.end("404 not found");
    }
  });
});

// to run the server, we need a port
myServer.listen(8000, () => console.log("Server started"));
