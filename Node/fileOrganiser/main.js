

let helpFunc = require("./commands/help");
let inputArr = process.argv.slice(2);// this is for taking input from command

let orFun = require("./commands/organize");
let treefun = require("./commands/tree");
let command = inputArr[0];

let path = inputArr[1];

switch(command)
{
    case "tree":
        //call tree function
        treefun.tree(path);
        console.log("i am in tree case path"+ path);
        break;
    case "organize":
        //call orgainise fun;
        
        orFun.organize(path);
        console.log("i am in organize path"+ path);
        break;
    case "help":
        // call help function.
        
        console.log(helpFunc.help());
       // console.log("i am in help ");
        break;
    default :
    console.log("wrong command");
        break;

}

