const express = require("express");
const authRouter = express.Router();
const usermodel = require("../models/userModel")

authRouter
.route("/signUp")
.get(middleware,getsignUp)
.post(postsignUp)

authRouter
.route("/login")
.post(logiUser);




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

async function logiUser(req, res)
{
    try{
        let data = req.body;
        if( data.email)
        {   
            let user =  await usermodel.findOne({email:data.email});
            if(user)
            {
                //bcrypt wali cheese bachi hai
                if( user.password == data.password)
                {
                    res.cookie("isLogedin", true, {httpOnly:true});
                   // res.cookie({httpOnly:true});
                    res.json({
                        message :"user is loged in",
                        data: user,
                    });
                }
                else 
                {
                    res.json({
                        message:"password is wrong",
                        //data :user
                    });
                }
            }
            else 
            {
                res.json({
                    message :"email is not wrong",
                    //data :user
                })
            }
        }
        else 
        {
            res.json({
                message:"email is not found",
                //data: data
            })
        }

    }
    catch(err)
    {
        res.json({
            message:"user is not found",
            //data  : data
        })
    }
}


module.exports = authRouter;
