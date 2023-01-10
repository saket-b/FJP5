const { Router } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const emailValidator = require("email-validator");
let app = express();

app.use(express.json());
app.listen(3000);

let users=
[
    
     
]
   const password = "oYw1mXQZEsOjodft";
   
   const db_link = "mongodb+srv://admin:oYw1mXQZEsOjodft@cluster0.f1mfevb.mongodb.net/?retryWrites=true&w=majority"
console.log(users);
// app.get("/user", (req, res)=>{

//     console.log("get request");
//     //console.log(req.body);
//     res.send(users);
// });

// mini app
let authRouter = express.Router();
let userRouter = express.Router();

app.use("/user", userRouter);
app.use("/auth", authRouter);
userRouter.route("/")
.get(getUser)
.post(postUser)
.patch(updateUser)
.delete(deleteUser);

// userRouter
// userRouter
// .route("/:id")
// .get(getUserByid);

authRouter
.route("/signUp")
.get(middleware,getsignUp)
.post(postsignUp)


async function getUser(req, res){

    let allusers = await usermodel.find();
    res.json({message:"data send succesfully",
            data:allusers});

}

async function postUser(req, res){

    let user = req.body;

    let data = await usermodel.create(user);

    res.json({
        message : "user created",
        data: data
    })

    
}

async function updateUser(req, res){

    // let update = req.body;
    // console.log(update);
    // for( let i=0; i<users.length; i++)
    // {
    //     if( users[i].id == update.id)
    //     users[i].name = update.name;
    // }
    // res.send(req.body);

    let usertobeupdate = req.body;

    let user = await usermodel.findOneAndUpdate({"email":"sk@12gmail.com"}, usertobeupdate);

    res.json({
        message :"updated",
        data : user
    })

}

async function deleteUser(req, res){

    // users = {};
    // res.send("delete sucessfully");

    let usertobedeleted = req.body;

    let data = await usermodel.findOneAndDelete(usertobedeleted);

    res.json({
        message:"data deleted successfully",
        data: data
    });

}


function getUserByid(req, res){

    let obj;

    let paramsid = req.params.id;

    for( let i=0; i<users.length; i++)
    {
        if( users[i].id == paramsid)
        obj = users[i];
    }
    res.send(obj);
}

function middleware( req, res, next)
{

    console.log(" inside middleware");
    next();
}




function getsignUp(req, res){

    console.log("saket");
     let data = req.body;
     console.log("get data", data);
 
     res.sendFile("/public/index.html", {root :__dirname})
 
 }

function postsignUp(req, res){

    let body= req.body;
    console.log(body);
    res.send("data send sucessfully", body);

}
mongoose.set('strictQuery',false);

mongoose.connect(db_link)
.then( function(db){

    console.log("db connected");
   // console.log(db);
})
.catch( function(err) 
{
    console.log(err);
})


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

userschema.post("save", function(obj){
    console.log("post saving data", obj);
})

// model banao 


 const usermodel = mongoose.model("usermodel", userschema);

// async function createuser(){

//     let user ={
//         name :"saket",
//         email:"saket0403@gmail.com",
//         password : "saket3",
//         confirmpassword: "saket3"
//     };

//      let data = await usermodel.create(user);
//      console.log(data);

// };

// createuser();


 