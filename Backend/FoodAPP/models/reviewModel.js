const mongoose = require("mongoose");
const db_link = "mongodb+srv://admin:oYw1mXQZEsOjodft@cluster0.f1mfevb.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(db_link)
.then( function(db){

    console.log("review db connected");
   // console.log(db);
})
.catch( function(err) 
{
    console.log(err);
})

const reviewSchema = new mongoose.Schema({

    review :{
        type: String,
        required: [true, " review is not filled"]
    },
    rating :{
        type: Number,
        required: [true, "plese fill rating"]
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    user :{
        type : mongoose.Schema.ObjectId,
        ref:'usermodel',
        required: [true, "user schema is not filled"]

    },
    plan :{
        type : mongoose.Schema.ObjectId,
        ref: 'planmodel',
        required:[true, "plan model is not filled"]

    }

})

reviewSchema.pre(/^find/, function(next)
{
    this.populate({
        path:"user",
        select:"name  profileImage"
    })
    .populate("plan");

    next();

})

const reviewModel = mongoose.model("reviewmodel", reviewSchema);

module.exports = reviewModel;





