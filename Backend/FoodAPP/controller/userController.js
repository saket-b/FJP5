const { findByIdAndUpdate } = require("../models/userModel");
const usermodel = require("../models/userModel");


module.exports.getUser = async function getUser(req, res){

    try{
        console.log("inside getUser function");
        let id = req.id;
       // console.log("id = ", id);
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
                message:err.message
            })
    }

}



module.exports.updateUser = async function updateUser(req, res){

    // let update = req.body;
     console.log("hello update user");
    // for( let i=0; i<users.length; i++)
    // {    
    //     if( users[i].id == update.id)
    //     users[i].name = update.name;
    // }
    // res.send(req.body);
    try{
       console.log("id = ", req.params.id);

        let id = req.params.id;
        let user = await usermodel.findById(id);
        let dataTobeUpdated = req.body;
        if( user)
        {
            const keys = [];
            console.log("user ", user);
        console.log("datatobeupdated ", dataTobeUpdated);

            for( let key in dataTobeUpdated)
            {
              //  console.log(key);
                keys.push(key);
            }

            for( let i=0; i<keys.length; i++)
            {
                user[keys[i]] = dataTobeUpdated[keys[i]];
            }
            console.log("user ", user);
            const userUpdated = await usermodel.findByIdAndUpdate(id, user);
             
            console.log("userupdated", userUpdated);
            return   res.json({
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
            message:err.message,
            data:"hello"
        }) 
    }
}

    
module.exports.deleteUser = async function deleteUser(req, res){

    // users = {};
    // res.send("delete sucessfully");
    console.log("inside delete");
    try{
        let id = req.params.id;
        console.log("id in delete function = ", id);
        let user = await usermodel.findByIdAndDelete(id);
        console.log("user inside delete function = ", user);
        if( user)
        {
            //console.log("inside user condition ");
            res.json({
                message:"data deleted successfully",
                data: user
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


module.exports.getAllUser = async function getAllUser(req, res){

    
    try{
        console.log("inside getalluser");
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

module.exports.updateProfileImage = function updateProfileImage(req, res){
    console.log("inside updateprofile");
    res.json({
        message:"image uploades successfully"
    })
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