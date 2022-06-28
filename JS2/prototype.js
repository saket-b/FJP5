
var arr =[];
var obj ={};

function abc() {
    console.log("you only live once");
}
// object type
console.log(arr.__proto__);
// Array is constructor both are same.
console.log(Array.prototype);


console.log(arr.__proto__.__proto__);// this gives object type
console.log(obj.__proto__);// this same as above

console.log(abc.__proto__);// function 
console.log(abc.__proto__.__proto__); // this gives object

// inside object protype is null
console.log(obj.__proto__.__proto__);