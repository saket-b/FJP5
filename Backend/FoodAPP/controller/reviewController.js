const express = require("express");
const mongoose = require("mongoose");
const reviewModel = require("../models/reviewModel")
const planmodel = require("../models/planModel")

module.exports.getAllReviews = async function getAllReviews(req, res)
{
    
    try{
        console.log("inside getall");
        // console.log("req = ", req);
        // console.log("res = ", res);
        const reviewAll_data = await reviewModel.find();
       


        if(reviewAll_data)
        {
            res.json({
                message:"retrieved all data",
                data : reviewAll_data
            })
        }
        else 
        {
            res.json({
              message:"data is not find"  
            })
        }

    }
    catch(err)
    {
        console.log("inside catch");
        res.status(500).json({
            message:err.message,
            data:"inside get all"
        })
    }
}




module.exports.getPlanReview = async function getPlanReview(req, res)
{
    try{
        let planid = req.params.id;
        console.log("inside get review ");
        let reviews = await reviewModel.find();
        console.log("data ", reviews);
        if( reviews)
        {
            reviews=reviews.filter(review=>review.plan["_id"]==planid);
            res.json({
                message:"review one is retrived",
                data : reviews
            })
        }
        else 
        {
            res.json({
                message:"data is not found"
            })
        }

    }
    catch(err)
    {
        res.status(500).json({
            message:err.message
        })
    }

}

module.exports.top3Review = async function top3Review(req, res)
{
    try{
        console.log("top 3 reviews");
        let data = await reviewModel.find().sort({rating : -1}).limit(3);

        if( data)
        {
            res.json({
                message:"top 3 reviw retrieved",
                data : data,
            })
        }
        else 
        {
            res.json({
                message:"top 3 data is not found",
                data: data
            })
        }

    }
    catch(err){
            res.json({
                message:err.message
            })
    }
}

module.exports.creatReview = async function creatReview(req, res)
{
    try{
        let planid = req.params.plan;
        let plan = await planmodel.findById(planid);
        console.log("body ", req.body);
        let review = req.body;
        if( review && plan)
        {
           let  data = await reviewModel.create(review);
           plan.ratingAverage += review.rating;
           plan.ratingAverage /= 2;
           await plan.save();
           res.json({
            message:"review created successfully",
            data :data
           })
        }
        else 
        {
            res.json({
                message:"please write review",
            })     
        }   
    }
    catch(err)
    {
        res.status(500).json({
            message:err.message
        })
    }
}

module.exports.updateReview = async function updateReview(req, res)
{
    try{
        let palnId = req.params.plan;
        let id = req.body.id;
        let  review_to_updated = req.body;
        let  review = await reviewModel.findById(id);
        let keys=[];
        for( let key in review_to_updated)
            keys.push(key);

        console.log("key", keys);
        for( let i=0; i<keys.length; i++)
        {
            if(keys[i]=='id')continue;
            review[keys[i]] = review_to_updated[keys[i]];
        }
        //console.log("reviw ", review_to_updated);
       let data = await review.save();
        res.json({
            message:" review update successfully",
            data: data
        })
         
    }
    catch(err)
    {
        res.status(500).json({
            message:err.message
        })
    }
}


module.exports.deleteReview = async function deleteReview(req, res)
{
    try{
        console.log("Inside Review");
        let planId = req.params.plan;
        let id = req.body.id;
        let review = await reviewModel.findByIdAndDelete(id);
      
        res.json({
            message:" review delete successfully",
            data: review
        })
    }
    catch(err)
    {
        res.status(500).json({
            message:err.message
        })
    }
}





