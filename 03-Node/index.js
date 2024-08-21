//server

//to make a http server, we have a built in mpdule called http
const http = require("http");
const fs = require("fs");

//this function takes a callback function which can process the incoming request
const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} : ${req.url} New request recieved\n `;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Homepage");
        break;
      case "/about":
        res.end("About Page");
        break;
      default:
        res.end("404 not found");
    }
  });
});

// to run the server, we need a port
myServer.listen(8000, () => console.log("Server started"));
