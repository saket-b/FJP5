//q1. read 3 files f1.txt,f2.txt,f3.txt serially using promises

// 2nd way to overcome callback hell is to use promises 

const fs = require("fs");

let firstPromise = fs.promises.readFile("f1.txt");

function cb1(data) {
    console.log(data+"");

    let f2Promise= fs.promises.readFile("f2.txt");
    return f2Promise;
    
}
function cb2(data) {
    console.log(data+"");

    let f3Promise= fs.promises.readFile("f3.txt");
    return f3Promise;
    
}
function cb3(data) {
  //  console.log(data+"");

    //let f2Promise= fs.promises.readFile("f2.txt");
  //  return f2Promise;
    
}

firstPromise
.then(cb1)
.then(cb2)
.then(cb3)
.catch(function (err) {
    console.log(err);
});
