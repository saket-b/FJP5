const mongoose = require("mongoose");
const emailValidator = require("email-validator");
const brypt = require("bcrypt");

   
const password = "oYw1mXQZEsOjodft";
const db_link = "mongodb+srv://admin:oYw1mXQZEsOjodft@cluster0.f1mfevb.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(db_link)
.then( function(db){

    console.log("db connected");
   // console.log(db);
})
.catch( function(err) 
{
    console.log(err);
})

mongoose.set('strictQuery',true);

// dhacha 

const userschema = mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    email :{
        type : String,
        unique: true,
        required : true,
        validate : function(){
            return  emailValidator.validate(this.email);
        }
    },
    password :{
        type : String,
        required : true,
        minlength:8
    },
    confirmpassword :{
        type : String,
        required:true,
        validate : function(){
            return this.password == this.confirmpassword;
        }
    }
});


userschema.pre("save", function(){

    console.log("pre saving data", this);
    this.confirmpassword = undefined
});

userschema.pre("save", async function(){

    const satlRound = 10;
    let salt = await brypt.genSalt();
    let hash = await brypt.hashSync(this.password , salt);
    this.password = hash;
    console.log(hash);
    
});



// userschema.post("save", function(obj){
//     console.log("post saving data", obj);
// })

// model banao 


const usermodel = mongoose.model("usermodel", userschema);

module.exports = usermodel;



module.exports = usermodel;
