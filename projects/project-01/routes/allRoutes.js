const express = require("express");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const userData = require("../data/MOCK_DATA.json");

dotenv.config();

const router = express.Router();

router.get("/users", (req, res) => {
  return res.json(userData);
});

router
  .route("/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = userData.find((user) => user.id === id);

    return res.json(user);
  })
  .patch((req, res) => {
    const body = req.body;
    const id = Number(req.params.id);
    const user = userData.find((user) => user.id === id);
    const dataPath = path.join(__dirname, "../data/MOCK_DATA.json");

    Object.assign(user, body);

    fs.writeFile(dataPath, JSON.stringify(userData), (err, data) => {
      return res.json({ status: "success", data: user });
    });
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    const user = userData.findIndex((user) => user.id === id);
    const dataPath = path.join(__dirname, "../data/MOCK_DATA.json");

    const deletedUser = userData.splice(user, 1);

    fs.writeFile(dataPath, JSON.stringify(userData), (err, data) => {
      return res.json({
        status: "success",
        message: "User deleted successfully",
        data: userData,
      });
    });
  });

router.post("/users/new-user", (req, res) => {
  // TODO: create new user
  const body = req.body;
  const dataPath = path.join(__dirname, "../data/MOCK_DATA.json");
  userData.push({ ...body, id: userData.length + 1 });
  fs.writeFile(dataPath, JSON.stringify(userData), (err, data) => {
    return res.json({
      status: "success",
      message: "User created successfully",
      id: userData.length,
    });
  });
});

module.exports = router;
