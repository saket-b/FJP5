

function authHelper(req, res, next){

    if(req.cookies.isLogedin)
    {
        next();
    }
    else 
    {
        res.json({
            message:"user is not logedin"
        })
    }
}

module.exports = authHelper;