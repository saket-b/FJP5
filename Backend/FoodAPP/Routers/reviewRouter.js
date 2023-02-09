const express = require("express")
const reviewRouter = express.Router();
const {protectRoute, isAuthorised} = require("../controller/authController");

const { getAllReviews,getPlanReview, top3Review, creatReview, updateReview, deleteReview} 
= require("../controller/reviewController")



reviewRouter
.route("/getAllReviews")
.get(getAllReviews);

reviewRouter.
route("/top3review")
.get(top3Review);




reviewRouter.use(protectRoute);
reviewRouter
.route("/crud/:plan")
.post(creatReview)
.delete(deleteReview)
.patch(updateReview);



reviewRouter.
route("/:id")
.get(getPlanReview);


module.exports = reviewRouter;