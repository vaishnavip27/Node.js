const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();

const PORT = 8000;

//define routes
app.get("/users", (req, res) => {
  const html = `<ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}</ul>`;
  res.send(html);
});

//rest api points
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);

    //finding the id in the json file
    const user = users.find((user) => user.id === id);
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
  return res.json({ status: "pending" });
});

app.listen(PORT, () => console.log(`Server started : ${PORT}`));
