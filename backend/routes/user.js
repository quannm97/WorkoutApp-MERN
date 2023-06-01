const express = require("express");
const { loginUser, signupUser } = require("../controllers/userController");

const router = express.Router();
// controller function

// login router

router.post("/login", loginUser);

// register router
router.post("/signup", signupUser);

module.exports = router;
