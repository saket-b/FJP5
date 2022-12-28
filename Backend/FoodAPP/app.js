const { Router } = require("express");
const express = require("express");
let app = express();

app.use(express.json());
app.listen(3000);

let users=
[
    
     
]
    
//console.log(users);
// app.get("/user", (req, res)=>{

//     console.log("get request");
//     //console.log(req.body);
//     res.send(users);
// });

// mini app
let userRouter = express.Router();
let authRouter = express.Router();

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
.get(getsignUp)
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

function getsignUp(req, res){


   // let data = req.body;
    //console.log("get data", data);

    res.sendFile("/public/index.html", {root :__dirname})

}

function postsignUp(req, res){

    let body= req.body;
    console.log(body);
    res.send("data send sucessfully");

}