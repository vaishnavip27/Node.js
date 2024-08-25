//server

//to make a http server, we have a built in mpdule called http
// const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello from homepage");
});

app.get("/about", (req, res) => {
  return res.send(
    "Welcome to the about page" +
      "hey" +
      req.query.name +
      "you are" +
      req.query.age
  );
});

app.listen(8000, () => console.log("Server started!"));

//this function takes a callback function which can process the incoming request
// const myServer = http.createServer(app);

// // to run the server, we need a port
// myServer.listen(8000, () => console.log("Server started"));
