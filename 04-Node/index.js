const express = require("express");

const app = express();

const PORT = 8000;

//define routes

app.listen(PORT, () => console.log(`Server started : ${PORT}`));
