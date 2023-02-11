const express = require("express");
const usermodel = require("../models/userModel")
const jwt   = require('jsonwebtoken');
const JWT_KEY = require("/home/saket/FJP5/Backend/Secret.js");
const { sendMail } = require("../utility/nodemailer");



module.exports.signup = async function signup(req, res){
    console.log("inside signup");

    try{
        let dataobj = req.body;
        let user    = await usermodel.create(dataobj);
        // for sending welcome message for sign up
        //sendMail("signup", user);
        if( user)
        {
            res.json({
                message:"user signed up",
                data: user
            })
        }
        else 
        {
            res.json({
                message:"error"
            })
        }

    }
    catch(err){
        res.json({
            message: err.message
        })
    }
}

module.exports.login = async function login(req, res)
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
                    let uid = user['_id'];
                    console.log("request inside password", req.body);
                    let token = jwt.sign({"payload":uid}, JWT_KEY);
                    res.cookie("logedin", token, {httpOnly : true});
                   // res.cookie("isLogedin", true, {httpOnly:true});
                    //res.cookie({httpOnly:true});
                    res.json({
                        message :"user is loged in",
                        data: user,
                    });
                }
                else 
                {
                    res.json({
                        message:"wrong cretecial",
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

// // isauthorised -> for checking user role like admin , delivery boy or user.

module.exports.isAuthorised =function isAuthorised(roles)
{
    return function(req, res, next){

        console.log("rles", roles);
        if(roles.includes(req.role) == true)
        {
        console.log("inside authorised");

            next();
        }
        else 
        {
            res.status(401).json({
                message:"user is not allowed"
            })
        }
    }     
}  


// //protectRoute



module.exports.protectRoute = async function protectRoute(req, res, next){
    try {
     if(req.cookies.logedin)
        {
            let token;
            token      = req.cookies.logedin;
            console.log("Token = ", token);
            let payload = jwt.verify(token, JWT_KEY );
            if( payload)
            {  
                console.log("payload = ", payload.payload);
                let user    = await usermodel.findById(payload.payload);
              
                // console.log("req.role before assigning = ", req.role);
                // console.log("req.id before assigning = ", req.id);
              req.role = user.role;
              req.id   = user.id;

            //   console.log("req.roel = ", req.role);
            //   console.log("req.id = ", req.id);
            //   res.json({
            //    message:"protected"
            //   }) 
                next();
            }
            else 
            {
                res.json({
                    message:"JWT KEY is not verified"
                })
            }
        }
        else 
        {
            const client = req.get('User-Agent');

            if( client.includes("Mozilla"))
            {
                res.redirect("/login");
            }
            res.json({
                message:"user is not logedin"
            })
        }
    }
    catch(err)
    {
        res.json({
            message:err.message
        })
    }
}

module.exports.forgetpassword = async function forgetpassword(req, res){

    let {email} = req.body;

    try{                                    //schema: body email    
        const user = await usermodel.findOne({email:email});
        if( user)
    {
                console.log("forget password ", user);

               let resetToken = await user.createResetToken();
               
               // reset link banana hai
               console.log("reset Token = ", resetToken);
               // http://dk.com/resetpassword/resetToken
               let resetpasswordLink = `${req.protocol}://${req.get('host')}/user/resetpassword/${resetToken}`; 
               console.log(resetpasswordLink);
               // send to email
                // jo abhi baki hai
                // usinf nodeemailer
                let obj ={
                    resetpasswordLink : resetpasswordLink,
                    email :email
                }
                await sendMail("resetpassword", obj);
                res.json({
                    message:"message sent successfully"
                })
        }
        else 
        {
            res.json({
                message:"please signup"
            })
        }

    }
    catch(err)
    {
        res.json({
            message:err.message
        })
    }

}


// reset password 

module.exports.resetpassword = async function resetpassword(req, res){

    try{
        console.log("inside resetpassword function");
        let {password, confirmPassword} = req.body;
        console.log(password);
        console.log(confirmPassword);
        const token = req.params.token;
        console.log(token);
        let user = await usermodel.findOne({resetToken: token});
        if( user)
        {
            console.log("user = ", user);
            user.resetpasswordHandler(password, confirmPassword);
            await user.save();
            res.json({
                message:"password change successfully please login again"
            })

        }
        else 
        {
            res.json({
                message:"user is not found"
            })
        }
         

    }
    catch(err)
    {
        res.json({
            message:err.message
        })
    }
}


module.exports.logout = function logout(req, res)
{
    res.cookie('logedin', ' ', {maxAge:1});

    res.json({
        message:"user logout sucessfully"
    })

}





