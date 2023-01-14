const usermodel = require("../models/userModel");


module.exports.getUser = async function getUser(req, res){

    try{
        let id = req.params.id;
        let user = await usermodel.findById(id);
        if( user)
        {
            res.json({message:"data send succesfully",
            data:user});
        }
        else 
        {
            res.json({
                message:"user is not found"
            })
        }
    }
    catch(err){
            res.json({
                message:"invalid user"
            })
    }

}

// module.exports.postUser=async function postUser(req, res){

//     let user = req.body;

//     let data = await usermodel.create(user);

//     res.json({
//         message : "user created",
//         data: data
//     })

    
// }

module.exports.updateUser = async function updateUser(req, res){

    // let update = req.body;
    // console.log(update);
    // for( let i=0; i<users.length; i++)
    // {
    //     if( users[i].id == update.id)
    //     users[i].name = update.name;
    // }
    // res.send(req.body);
    try{
        let id = req.params.id;
        let user = await usermodel.findById(id);
        let dataTobeUpdated = req.body;

        if( user)
        {
            const keys = [];
            for( key in dataTobeUpdated)
            {
                keys.push(key);
            }

            for( let i=0; i<keys.length; i++)
            {
                user[keys[i]] = dataTobeUpdated[keys[i]];
            }
            const userUpdated = user.save();
            res.json({
            message :"updated",
            data : user
            })
        }
        else {
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

module.exports.deleteUser = async function deleteUser(req, res){

    // users = {};
    // res.send("delete sucessfully");
    try{
        let id = req.params.id;
        let user = await usermodel.findByIdAndDelete(id);
        
        if( user)
        {
            res.json({
                message:"data deleted successfully",
                data: data
            });
        }
        else {
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


module.exports.getAlluser = async function getAllUser(req, res){

    
    try{
        let users = await usermodel.find();
        if( users)
        {
            res.json({
                message :"user retrieve",
                data : users
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

    // let paramsid = req.params.id;
    //let obj;
    // for( let i=0; i<users.length; i++)
    // {
    //     if( users[i].id == paramsid)
    //     obj = users[i];
    // }
    // res.send(obj);
}


function setcookies(req, res){

    // res.setHeader('Set-Cookies', "islogedin = true");
     res.cookie("islogedin", true/*{ secure:true, httpOnly :true}*/);
     res.cookie("isMember", true);
 
     res.send("cookies send successfully");
 }
 
  function getcookies(req, res){
 
     let cookie = req.cookies.logedin;
     console.log(cookie);
     res.send("cookie recieved");
 }