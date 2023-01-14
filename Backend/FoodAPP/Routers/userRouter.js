const express = require("express");
const userRouter = express.Router();
const usermodel = require("../models/userModel");
const authHelper = require("./authHelper");
const {getUser, getAllUser, deleteUser, updateUser} = require("../controller/userController");
const { application } = require("express");

//user option for update or delete
userRouter.route("/:id")
.patch(updateUser)
.delete(deleteUser);

//profile page
app.use(protectRoute);
userRouter
.route("/userProfile")
.get(getUser); 


//admin aspecific function
app.user(isAuthorised['admin']);
userRouter
.route('')
.get(getAllUser);



























// userRouter.route("/")
// .get(authHelper, getUser)
// .post(postUser)
// .patch(updateUser)
// .delete(deleteUser);

// // userRouter
// // .route("/setCookies")
// // .get(setcookies)

// // userRouter
// // .route("/getCookies")
// // .get(getcookies)


 

module.exports = userRouter;