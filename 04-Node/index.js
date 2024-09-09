const express = require("express");
const fs = require("fs");

const { logReqRes } = require("./middlewares");
const { connectMongoDb } = require("./connection");
const userRouter = require("./routes/user");

const app = express();

const PORT = 8000;

//Connection
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1");

//Middleware
app.use(express.urlencoded({ extended: false }));

//middlewares
app.use(logReqRes("log.txt"));
//routes
app.use("/user", userRouter);

app.listen(PORT, () => console.log(`Server started : ${PORT}`));
