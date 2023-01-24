const express = require("express")
const reviewRouter = express.Router();
const {protectRoute, isAuthorised} = require("../controller/authController");

const { getAllreviews,getReview, top3Review, creatReview, updateReview, deleteReview} 
= require("../controller/reviewController")



reviewRouter.
route("/getAllreviews")
.get(getAllreviews);

reviewRouter.
route("/getReview/:id")
.get(getReview);

reviewRouter.
route("/top3Review")
.get(top3Review);

reviewRouter.use(protectRoute);
reviewRouter
.route("/createReview/:plan")
.post(creatReview);

reviewRouter
.route("/updateReview/:id")
.patch(updateReview);

reviewRouter 
.route("/deleteReview/:id")
.delete(deleteReview);

module.exports = reviewRouter;