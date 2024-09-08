const mongoose = require("mongoose");

//connecting mongoose
async function connectMongoDb(url) {
  return mongoose.connect(url);
}

module.exports = { connectMongoDb };
