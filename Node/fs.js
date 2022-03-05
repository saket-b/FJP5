
const fs = require("fs");// inbuild module ko call karte hai

// require("path of the file");
//console.log(fs);

const abc = require("../JS2/scope");
console.log(abc);


let res = fs.appendFileSync("f1.txt", "hello I am saket");

fs.appendFileSync("f1.txt","\nYou guys smart");

console.log(res);
var  data = fs.readFileSync("f1.txt");
console.log(data+"");

var  data = fs.readFileSync("f1.txt", "utf-8");
console.log(data);