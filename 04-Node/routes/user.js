const express = require("express");
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUserById,
} = require("../controllers/user");

const router = express.Router();

//rest api points
//returning me all the users
// router.get("/", async (req, res) => {
//   const allDbUsers = await User.find({});
//   return res.json(allDbUsers);
// res.setHeader("X-MyName", "Vaishnavi Patil"); //custom header
//Always add X to custom headers
// });

router.get("/", handleGetAllUsers);

router
  .route("/:id")
  //the below are the controllers
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

router.post("/", handleCreateNewUserById);

module.exports = router;
