const mongoose = require("mongoose");

//Schema

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      //required means if we dont have a first name then the entry wont be inserted in the database
      required: true,
    },

    lastName: {
      type: String,
    },

    email: {
      type: String,
      required: true,
      //Unique: true means the same email ID should not be repeated in the database
      unique: true,
    },
    jobTitle: {
      type: String,
    },

    gender: {
      type: String,
    },
  },
  { timestamps: true }
);

//By adding timestamps true it shows when the thing was created and when it was updated

// the user in the double quote is the name of the model, you can name it anything and then pass the userSchema
const User = mongoose.model("user", userSchema);

module.exports = User;
