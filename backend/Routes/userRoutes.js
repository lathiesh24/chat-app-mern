const express = require('express');
const { registerUser } = require('../Controllers/userController')
const { authUser,allUsers } = require("../Controllers/userController")

const router = express.Router()

router.route("/").post(registerUser).get(allUsers);
router.post("/login",authUser);


module.exports = router;