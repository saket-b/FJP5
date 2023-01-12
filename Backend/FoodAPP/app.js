const { Router } = require("express");
const express = require("express");

const userRouter= require("./Routers/userRouter");
const authRouter= require("./Routers/authRouter");
const cookieParser = require("cookie-parser");
let app = express();

app.use(cookieParser());
app.use(express.json());
app.listen(3000);


// app.get("/user", (req, res)=>{

//     console.log("get request");
//     //console.log(req.body);
//     res.send(users);
// });

// mini app
// let authRouter = express.Router();
// let userRouter = express.Router();

app.use("/user", userRouter);
app.use("/auth", authRouter);


// userRouter
// userRouter
// .route("/:id")
// .get(getUserByid);









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


 