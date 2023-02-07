const express = require("express")
const reviewRouter = express.Router();
const {protectRoute, isAuthorised} = require("../controller/authController");

const { getAllReviews,getPlanReview, top3Review, creatReview, updateReview, deleteReview} 
= require("../controller/reviewController")



reviewRouter
.route("/getAllReviews")
.get(getAllReviews);

reviewRouter.
route("/:id")
.get(getPlanReview);

reviewRouter.
route("/top3review")
.get(top3Review);

reviewRouter.use(protectRoute);
reviewRouter
.route("/crud/:plan")
.post(creatReview);

reviewRouter
.route("/crud/:id")
.patch(updateReview);

reviewRouter 
.route("/crud/:id")
.delete(deleteReview);

module.exports = reviewRouter;