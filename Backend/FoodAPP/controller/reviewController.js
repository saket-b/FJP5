const reviewModel = require("../models/reviewModel");
const planmodel = require("../models/planModel")

module.exports.getAllreviews = async function getAllreviews(req, res)
{
    
    try{
        const reviewAll_data = await reviewModel.find();
        console.log("inside getall");
        console.log("data ", reviewwAll_data);

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
        res.status(500).json({
            message:err.message
        })
    }
}

module.exports.getReview = async function getReview(req, res)
{
    try{
        let id = req.params.id;
        let data = await reviewModel.findById(id);
        if( data)
        {
            res.json({
                message:"review one is retrived",
                data : data
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
    catch{

    }
}

module.exports.creatReview = async function creatReview(req, res)
{
    try{
        let id = req.params.plan;
        let plan = await planmodel.findById(id);
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
        let id = req.params.id
        let  review_to_updated = req.body;
        let  review = await reviewModel.findById(id);
        let keys=[];
        for( let key in review_to_updated)
            keys.push(key);

        for( let i=0; i<review_to_updated.length; i++)
        {
            review[keys[i]] = review_to_updated[keys[i]];
        }
        await data.save();
        res.json({
            message:" review update successfully",
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
        let id = req.params.id
        let review = await reviewModel.findByIdAndDelete(id);
      
        res.json({
            message:" review update successfully",
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





