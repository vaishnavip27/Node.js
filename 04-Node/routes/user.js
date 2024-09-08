const express = require("express");

const router = express.Router();

//rest api points
router.get("/", async (req, res) => {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
  // res.setHeader("X-MyName", "Vaishnavi Patil"); //custom header
  //Always add X to custom headers
});

// router.get("/users", async (req, res) => {
//   //the empty braces here means all the users
//   const allDbUsers = await User.find({});
//   const html = `<ul>
//         ${allDbUsers
//           .map((user) => `<li>${user.firstName} - ${user.email} </li>`)
//           .join("")}</ul>`;
//   res.send(html);
// });

router
  .route("/:id")
  .get(async (req, res) => {
    const user = await User.findById(req.params.id);
    // const id = Number(req.params.id);

    //finding the id in the json file
    // const user = users.find((user) => user.id === id);
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.json(user);
  })
  .patch(async (req, res) => {
    //Edit user with Id
    await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
    return res.json({ status: "Success" });
  })
  .delete(async (req, res) => {
    //Todo: Delete the user with
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "Success" });
  });

router.post("/", async (req, res) => {
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

module.exports = router;
