const express = require("express");
const planRouter = express.Router();
const {isAuthorised , protectRoute } = require("../controller/authController")
const {getAllPlan, getPlan, createPlan, updatePlan, deletePlan, top3plan  }= require("../controller/planController");



//give all plans 
planRouter
.route("/allPlans")
.get(getAllPlan);


// check user is logedin or not 
planRouter.use(protectRoute);

planRouter
.route("/plan/:id")
.get(getPlan);



// admin and restaurant owner can only create, update, and delete plans;
planRouter.use(isAuthorised(["admin", "restaurantowner"]));

planRouter
.route("/createPlan")
.post(createPlan)

 planRouter
.route("/deletePlan/:id")   
.delete(deletePlan)

planRouter
.route("/updatePlan/:id")   
.patch(updatePlan)

planRouter
.route("/top3plan")
.get(top3plan);




module.exports = planRouter


