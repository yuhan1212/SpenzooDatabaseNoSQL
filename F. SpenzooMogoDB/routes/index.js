var express = require("express");
var router = express.Router();

const myDB = require("../db/MySqliteDB.js");

/* GET home page. */
router.get("/", async function (req, res) {
  console.log("Got request for /");

  const users = await myDB.getUsers();
  const user_budget = await myDB.getUserBudgets();

  // console.log("got User", users);
  // console.log("got User", user_budget);

  // render the _index_ template with the user attrib as the list of user
  res.render("index", { user: users, user_budget: user_budget });
  // res.render("index", { user_budget: user_budget });
});

/* GET user details. */
router.get("/user/:userId", async function (req, res) {
  console.log("Got users details");

  const userId = req.params.userId;

  console.log("got user details ", userId);

  const user = await myDB.getUserById(userId);

  console.log("user created");

  res.render("userDetails", { user: user });
});

/* POST create user. */
router.post("/user/create", async function (req, res) {
  console.log("Got post create/user");

  const user = req.body;

  console.log("got create user", user);

  await myDB.createUser(user);

  console.log("user created");

  res.redirect("/");
});

/* POST create user. */
router.post("/user/delete", async function (req, res) {
  console.log("Got post delete user");

  const user = req.body;

  console.log("got delete user", user);

  await myDB.deleteUser(user);

  console.log("user deleted");

  res.redirect("/");
});

// /* GET home page. */
// router.get("/", async function (req, res) {
//   console.log("Got request for /");

//   console.log("got user_budget", user_budget);

//   // render the _index_ template with the user attrib as the list of user

// });

/* GET user details. */
router.get("/user_budget/:UserId", async function (req, res) {
  console.log("Got user_budget details");

  const UserId = req.params.UserId;

  console.log("got user details ", UserId);

  const user_budget = await myDB.getUserBudgetById(UserId);

  console.log("user created");

  res.render("userDetails", { user_budget: user_budget });
});

/* POST create user_budget. */
router.post("/user_budget/create", async function (req, res) {
  console.log("Got post create/user_budget");

  const user_budget = req.body;

  console.log("got create user_budget", user_budget);

  await myDB.createUserBudget(user_budget);

  console.log("user_budget created");

  res.redirect("/");
});

/* POST create user_budget. */
router.post("/user_budget/delete", async function (req, res) {
  console.log("Got post delete user_budget");

  const user_budget = req.body;

  console.log("got delete user_budget", user_budget);

  await myDB.deleteUserBudget(user_budget);

  console.log("user_budget deleted");

  res.redirect("/");
});

module.exports = router;
