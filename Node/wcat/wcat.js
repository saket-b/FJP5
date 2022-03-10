

const fs = require("fs");
let inputArr = process.argv.slice(2); // it take input from terminal

//console.log(input);

let fileArr = [];

let openerations =[] ;

for( let i=0; i<inputArr.length; i++)
{
    let ch = inputArr[i].charAt(0);
    //console.log(ch);

    if(  ch == '-')
    openerations.push(inputArr[i]);
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

let contentarr = content.split("\n");
//console.log(objFiles);
console.log(contentarr);

let isSpresent = openerations.includes("-s");

if( isSpresent)
{
    for(let i=1; i<contentarr.length; i++ )
    {
        if( contentarr[i] == "" && (contentarr[i-1] == "" || contentarr[i-1]==null))
            contentarr[i]= null;
    }
}

console.table(contentarr);

let temparr=[];

for(let i=0; i<contentarr.length; i++)
{
    if(contentarr[i] != null)
    {
        temparr.push(contentarr[i]);
    }
}

console.log("after remove space ", temparr);

// starrt -b and -n implementation.

contentarr = temparr;

let indexof_b = openerations.indexOf("-b");

let indexof_n = openerations.indexOf("-n");

let finalop ="";



if(  indexof_b != -1 && indexof_n != -1)
{
    if( indexof_b < indexof_n)
    modified_content_by_b();
    else 
    modified_content_by_n();


}
else 
{
    if( openerations.includes("-b"))
    modified_content_by_b();

    else if( openerations.includes("-n"))
    modified_content_by_n();
}
//if(arr.includes ("-b") and indexof(b) < indexof(n)

function modified_content_by_n() {
    
    for(let i=1; i<=contentarr.length; i++)
    {
        contentarr[i-1] = i + ". " + contentarr[i-1];    
    }
}

function modified_content_by_b() {
    let count =1;
    for(let i=1; i<=contentarr.length; i++)
    {
        if( contentarr[i-1] != "")
        {
            contentarr[i-1] = count + ". "+ contentarr[i-1];
            count++;
        }

    }
}

console.log("content arr \n", contentarr);