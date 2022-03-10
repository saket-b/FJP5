
const fs = require("fs");// inbuild module ko call karte hai

// require("path of the file");
//console.log(fs);

const abc = require("../JS/scope");
//require method goes to file that is needed to be required, executes that file. and if there is something that is retured/exported we get that
 console.log(abc);


// let res = fs.appendFileSync("f1.txt", "hello I am saket");
//                 //file ka path  & data
 fs.appendFileSync("f1.txt", "\nYou guys smart");

// console.log(res);
var  data = fs.readFileSync("f1.txt");

// // data is an object type, data is in buffer type.

// console.log(data+"");

 var  data = fs.readFileSync("f1.txt", "utf-8");
        console.log(data);