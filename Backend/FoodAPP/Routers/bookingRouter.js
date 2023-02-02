const express = require("express");
const bookingRouter = express.Router();

const protectRoute = require("../controller/authController");
const createSession = require("../controller/bookingController");

//bookingRouter.use(protectRoute);
bookingRouter.use(express.static("public"));
bookingRouter
.route("/creatSession")
.get( function(req, res){
    res.sendFile("/home/saket/FJP5/Backend/FoodAPP/booking.html");
})

bookingRouter
.route("/createSession")
.post(createSession);



module.exports= bookingRouter