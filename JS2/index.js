var a;
a = 10;
console.log(a);
console.log(typeof a);


a = "saket";
console.log(a);

a = null;
console.log(a);

a = 2.54
console.log(a);
console.log("hi hello");


// Boolean 

var t = true;
var f = false;

console.log(t);// This is for print
console.log(f);

// '',          "",             ``
//single quotes, double quotes, backstick

// var -> on var any thing store also can redeclare
var str = 'a' 
console.log(typeof str);

str = "bharti";
console.log(str);

// var,  let,const
var num =400

console.log(`half of ${num} is ${num/2}`);


var x = 100;

console.log(x);

var y = 200;
console.log(y);

// let cannot to be redeclare  
let l = 100;
console.log(l);

// let l = 300; //SyntaxError: Identifier 'l' has already been declared
// console.log(l);

l = 300; 
console.log(l);

l ="saket"; // This is also correct in JS
console.log(l);

// loop in JS

var num = 10;

// let keyboard is blocked scope
// var is function scoped

let i;

for( i=0; i<num; i++)
{
    if( i % 2 == 0)
    console.log(i);
}

console.log("let   " + i);
// const keyboard

const a2 = 2;
//a2 =5; // reinitialise nhi kar sakte hai
//TypeError: Assignment to constant variable.

console.log(a2);