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

planRouter
.route("/top3plan")
.get(top3plan);


// admin and restaurant owner can only create, update, and delete plans;
planRouter.use(isAuthorised(["admin", "restaurantowner"]));

planRouter
.route("/crud")
.post(createPlan)

 planRouter
.route("/crud/:id")   
.patch(updatePlan)
.delete(deletePlan)  







module.exports = planRouter


