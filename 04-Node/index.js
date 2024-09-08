const express = require("express");
const fs = require("fs");

const { connectMongoDb } = require("./connection");
const userRouter = require("./routes/user");

const app = express();

const PORT = 8000;

//Connection
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1");

//Middleware
app.use(express.urlencoded({ extended: false }));

//Building a middleware handler function
app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `\n${Date.now()} : ${req.ip}: ${req.method} : ${req.path}`,
    (err, data) => {
      next();
    }
  );
});

//routes
app.use("/user", userRouter);

app.listen(PORT, () => console.log(`Server started : ${PORT}`));
