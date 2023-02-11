const express=require("express");
const { createUser, login, logout } = require("../controllers/userController");
const router=express.Router();
router.route("/register").post(createUser);
router.route("/login").post(login);
router.route("/logout").get(logout);
module.exports=router;