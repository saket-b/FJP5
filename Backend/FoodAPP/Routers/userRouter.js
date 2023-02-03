const express = require("express");
const { application } = require("express");
const userRouter = express.Router();
const multer  = require('multer')
// const usermodel = require("../models/userModel");
// const authHelper = require("./authHelper");
const {getAllUser, getUser, deleteUser, updateUser} = require("../controller/userController");
const {signup, login, protectRoute, isAuthorised, forgetpassword, resetpassword, logout} = require("../controller/authController");
const {updateProfileImage} = require("../controller/userController");
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

// multer implementation
/* multer is start */
const muliterStorage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, '/home/saket/FJP5/Backend/FoodAPP/public/images')
    },
    filename: function(req,file, cb ){
        cb(null, `user-${Date.now()}.jpeg`)
    }
})

const filter = function(req, file, cb){

    if( file.mimetype.startsWith("image"))
    {
        cb(null, true);
    }
    else 
    {
        cb( new Error("File is not Image type"), false);
    }
}

const upload = multer(
   
    {
  
    storage: muliterStorage,
    fileFilter: filter
}

);

userRouter
.post("/ProfileImage", upload.array('photo'), updateProfileImage);


userRouter 
.get("/ProfileImage", (req, res)=>{
    res.sendFile("/home/saket/FJP5/Backend/FoodAPP/multer.html");
})


/* multer is end*/ 

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