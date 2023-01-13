const express = require("express");
const userRouter = express.Router();
const usermodel = require("../models/userModel");
const authHelper = require("./authHelper");
const {getUser, getUserByid, postUser, deleteUser, updateUser} = require("../controller/userController");

userRouter.route("/")
.get(authHelper, getUser)
.post(postUser)
.patch(updateUser)
.delete(deleteUser);


// userRouter
// .route("/setCookies")
// .get(setcookies)

// userRouter
// .route("/getCookies")
// .get(getcookies)


 

module.exports = userRouter;