const express = require("express");
const { application } = require("express");
const userRouter = express.Router();
// const usermodel = require("../models/userModel");
// const authHelper = require("./authHelper");
const {getAllUser, getUser, deleteUser, updateUser} = require("../controller/userController");
const {signup, login, protectRoute, isAuthorised, forgetpassword, resetpassword, logout} = require("../controller/authController");

//user option for update or delete
userRouter.route("/:id")
.patch(updateUser)
.delete(deleteUser);

userRouter.route("/signup")
.post(signup);

userRouter.route("/login")
.post(login);

userRouter.route("/logout")
.post(logout)

userRouter.route("/forgetpassword")
.post(forgetpassword);

userRouter.route("/resetpassword/:token")
.post(resetpassword);

//profile page
userRouter.use(protectRoute);
userRouter
.route("/userProfile")
.get(getUser); 


//admin aspecific function
userRouter.use(isAuthorised(['admin']));
userRouter
.route('/')
.get(getAllUser)





module.exports = userRouter;






















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