const { Router } = require("express");
const express = require("express");
const mongoose = require("mongoose");
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

//app.use("/user", userRouter);
app.use("/auth", authRouter);

// userRouter
// .route("/")
// .get(getUser)
// .post(postUser)
// .patch(updateUser)
// .delete(deleteUser);

// userRouter
// .route("/:id")
// .get(getUserByid);

authRouter
.route("/signUp")
.get(middleware,getsignUp)
.post(postsignUp)

// function getUser(req, res){

//     console.log(req.query);
//     res.send(users);

// }

// function postUser(req, res){

//     users = req.body;

//     res.send(req.body);
// }

// function updateUser(req, res){

//     let update = req.body;
//     console.log(update);
//     for( let i=0; i<users.length; i++)
//     {
//         if( users[i].id == update.id)
//         users[i].name = update.name;
//     }
//     res.send(req.body);

// }

// function deleteUser(req, res){

//     users = {};
//     res.send("delete sucessfully");

// }


// function getUserByid(req, res){

//     let obj;

//     let paramsid = req.params.id;

//     for( let i=0; i<users.length; i++)
//     {
//         if( users[i].id == paramsid)
//         obj = users[i];
//     }
//     res.send(obj);
// }

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
        required : true
    },
    password :{
        type : String,
        required : true,
    },
    confirmpassword :{
        type : String,
        required:true
    }
});


// model banao 


const usermodel = mongoose.model("usermodel", userschema);

async function createuser(){

    let user ={
        name :"saket",
        email:"saket0403@gmail.com",
        password : "saket3",
        confirmpassword: "saket3"
    };

     let data = await usermodel.create(user);
     console.log(data);

};

createuser();


 