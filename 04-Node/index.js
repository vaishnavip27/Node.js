const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");

const userRouter = require("./routes/user");

const app = express();

const PORT = 8000;

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
