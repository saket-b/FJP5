

const fs = require("fs");
let inputArr = process.argv.slice(2); // it take input from terminal

//console.log(input);

let fileArr = [];

let objFiles =[] ;

for( let i=0; i<inputArr.length; i++)
{
    let ch = inputArr[i].charAt(0);
    //console.log(ch);

    if(  ch == '-')
    objFiles.push(inputArr[i]);
    else 
    fileArr.push(inputArr[i]);
}


for( let i=0; i<fileArr.length; i++)
{
    let doesExist = fs.existsSync(fileArr[i]);

    if( ! doesExist)
    {
        console.log("file does not exist");
       return ;
    }
   
}

let content ="";

for( let i=0; i<fileArr.length; i++)
{
    // let doesExist = fs.existsSync(fileArr[i]);
    // if(  ! doesExist)
    // continue;

    let s = fs.readFileSync(fileArr[i]);
    content += s+"\n";
}
console.log(content);

let arr = content.split("\n");
console.log(objFiles);
console.log(arr);