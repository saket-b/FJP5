

const fs = require("fs");

const path = require("path");

function treefn(srcpath) {

    if( srcpath == undefined)
    {
        console.log("srcpath does not exist");
        return;
    }
    
    let  doesexist = fs.existsSync(srcpath);

    if( doesexist )
    {
        helper(srcpath, "");
    }   
}

function helper(targetpath, res) {

    let isfile = fs.lstatSync(targetpath).isFile();

    if( isfile == true)
    {
        let filename = path.basename(targetpath);
        console.log(res + "├── " + filename);
        return;

    }

    let dirname = path.basename(targetpath);
    console.log(res + "└──" + dirname);

    let children = fs.readdirSync(targetpath);

    for( let i=0; i<children.length; i++)
    {
        let childrenpath = path.join(targetpath, children[i]);

        helper(childrenpath, res+"\t");

    }



    
}




//let srcpath = "/home/saket/FJP5/Node/fileOrganiser";

//treefn(srcpath);

module.exports={
    tree : treefn,
};