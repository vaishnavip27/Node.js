const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");

const app = express();

const PORT = 8000;

//connecting mongoose
mongoose
  .connect("mongodb://127.0.0.1:27017/youtube-app-1")
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log("Mongo error", err));

//Schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: "String",
      //required means if we dont have a first name then the entry wont be inserted in the database
      required: true,
    },

    lastName: {
      type: "String",
    },

    email: {
      type: "String",
      required: true,
      //Unique: true means the same email ID should not be repeated in the database
      unique: true,
    },
    jobTitle: {
      type: "String",
    },

    gender: {
      type: "String",
    },
  },
  { timestamps: true }
);

//By adding timestamps true it shows when the thing was created and when it was updated

// the user in the double quote is the name of the model, you can name it anything and then pass the userSchema
const User = mongoose.model("user", userSchema);

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

//rest api points
app.get("/api/users", async (req, res) => {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
  // res.setHeader("X-MyName", "Vaishnavi Patil"); //custom header
  //Always add X to custom headers
});

//define routes
app.get("/users", async (req, res) => {
  //the empty braces here means all the users
  const allDbUsers = await User.find({});
  const html = `<ul>
    ${allDbUsers
      .map((user) => `<li>${user.firstName} - ${user.email} </li>`)
      .join("")}</ul>`;
  res.send(html);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    // const id = Number(req.params.id);

    //finding the id in the json file
    // const user = users.find((user) => user.id === id);
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.json(user);
  })
  .patch((req, res) => {
    //Edit user with Id
    res.json({ status: "Pending" });
  })
  .delete((req, res) => {
    //Todo: Delete the user with
    return res.json({ status: "pending" });
  });

app.post("/api/users", async (req, res) => {
  //Todo: Create new user
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All field are required" });
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });

  return res.status(201).json({ msg: "Success" });
});

app.listen(PORT, () => console.log(`Server started : ${PORT}`));
