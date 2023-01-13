
const jwt = require("jsonwebtoken");
const JWT_KEY = require("/home/saket/FJP5/Backend/Secret.js");

function authHelper(req, res, next){

    if(req.cookies.logedin)
    {

    let jwtverify = jwt.verify(req.cookies.logedin, JWT_KEY);

        if( jwtverify)
        {
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
        res.json({
            message:"user is not logedin"
        })
    }
}

module.exports = authHelper;