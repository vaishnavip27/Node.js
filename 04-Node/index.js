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

app.get("/api/users/1", (req, res) => {
  return;
});

app.listen(PORT, () => console.log(`Server started : ${PORT}`));
