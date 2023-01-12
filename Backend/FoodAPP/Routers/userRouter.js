const express = require("express");
const userRouter = express.Router();
const usermodel = require("../models/userModel");

userRouter.route("/")
.get(getUser)
.post(postUser)
.patch(updateUser)
.delete(deleteUser);


userRouter
.route("/setCookies")
.get(setcookies)

userRouter
.route("/getCookies")
.get(getcookies)



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


function setcookies(req, res){

    // res.setHeader('Set-Cookies', "islogedin = true");
     res.cookie("islogedin", true/*{ secure:true, httpOnly :true}*/);
     res.cookie("isMember", true);
 
     res.send("cookies send successfully");
 }
 
  function getcookies(req, res){
 
     let cookie = req.cookies.islogedin;
     console.log(cookie);
     res.send("cookie recieved");
 }
 

module.exports = userRouter;