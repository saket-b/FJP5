const mongoose = require("mongoose");
const emailValidator = require("email-validator");
const brypt = require("bcrypt");
const crypto = require("crypto");
const db_link = "mongodb+srv://admin:oYw1mXQZEsOjodft@cluster0.f1mfevb.mongodb.net/?retryWrites=true&w=majority"
const { v4: uuidv4 } = require("uuid");
mongoose.connect(db_link)
.then( function(db){

    console.log("user db connected");
   // console.log(db);
})
.catch( function(err) 
{
    console.log(err);
})

//mongoose.set('strictQuery',false);

// dhacha 

const userschema = new mongoose.Schema({
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
            return this.confirmpassword == this.password;
        }
    },
    role :{
        type:  String,
        enum:['admin', 'user','restaurantowner', 'deliveryboy'],
        default: 'user'
    },
    profileImage:{
        type:String,
        default:'img/users/default.jpeg'
    },
    resetToken : {type : String}

});

userschema.pre("save", function(){

    console.log("pre saving data", this);
    this.confirmpassword = undefined
});


userschema.methods.createResetToken = async function(){
    console.log("inside dreate Reset Function");

    //const resetTokenNew = crypto.randomBytes(32).toString("hex");
    const resetTokenNew = uuidv4();
    console.log("Reset Token = ",resetTokenNew );
    this.resetToken = resetTokenNew;
  //  this.confirmPassword = this.password;
    await this.save();
    return resetTokenNew;

}

userschema.methods.resetpasswordHandler = function (password, confirmPassword){

    this.password = password;
    this.confirmpassword = confirmPassword;

    this.resetToken = undefined;
}




// userschema.pre("save", async function(){

//     const satlRound = 10;
//     let salt = await brypt.genSalt();
//     let hash = await brypt.hashSync(this.password , salt);
//     this.password = hash;
//     console.log(hash);
    
// });



// userschema.post("save", function(obj){
//     console.log("post saving data", obj);
// })

// model banao 


const usermodel = mongoose.model("usermodel", userschema);

module.exports = usermodel;



