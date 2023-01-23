const mongoose = require("mongoose");
const db_link = "mongodb+srv://admin:oYw1mXQZEsOjodft@cluster0.f1mfevb.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(db_link)
.then( function(db){
    console.log("plan db connected");
})
.catch( function(err)
{
    console.log(err.message);
})

const planschema= mongoose.Schema({

    name :{
        type : String,
        unique: true,
        length : 20,
        required: true,
        maxlength:[20, 'plan length shold nt exceed 20']

    },
    duration :{
        type : Number,
        required: true
    },

    price :{
        type : Number,
        required : [true, "priced is not entered"]
    },
    ratingAverage:{
        type : Number,
    },
    discount :{
        type : Number,
        validate : [function(){
            return this.discount < 100;
        }, "dicount should not exceed price"]
    }

});


const planmodel = mongoose.model("planmodel", planschema);


// (async function  createplan(){
//     const planobj ={
//     name :"Yoga5",
//     duration: 10,
//     price : 1000,
//     ratingAverage : 4,
//     discount : 10
//     };
//     //method 1 : for creating model
// let data =  await planmodel.create(planobj);
// console.log("data ", data);

//     // Method 2 : for creating model
//     // let doc = new planmodel(planobj);
//     // await doc.save();

// });



module.exports = planmodel;






