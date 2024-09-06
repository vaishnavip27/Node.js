const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

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

//rest api points
app.get("/api/users", (req, res) => {
  res.setHeader("X-MyName", "Vaishnavi Patil"); //custom header
  //Always add X to custom headers
  return res.json(users);
});

//define routes
app.get("/users", (req, res) => {
  const html = `<ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}</ul>`;
  res.send(html);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);

    //finding the id in the json file
    const user = users.find((user) => user.id === id);
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

app.post("/api/users", (req, res) => {
  //Todo: Create new user
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.email ||
    !body.gender ||
    !body.job_title ||
    !body.job_name
  ) {
    return res.status(400).json({ msg: "All field are required" });
  }
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.status(201).json({ status: "success", id: users.length });
  });
});

app.listen(PORT, () => console.log(`Server started : ${PORT}`));
