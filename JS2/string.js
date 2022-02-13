
let arr = [[1,2,3, 4], [4,5, "saket", 7]];
console.table(arr);

var str = "hello current coder";

console.log(str);
console.log(str.length);

//extraction method
//start index inclusive and last index is exclusive
let slicestr = str.slice(2,4);



console.log(slicestr);
console.log(str);


let slicestr2 = str.slice(3);
console.log(slicestr2);

let slicestr3 = str.slice(3, -2); //start se last tak remaining 2.
console.log(slicestr3);

let slicestr4 = str.slice(3, -4);
console.log(slicestr4);

// substr( startindex, length);
let substr = str.substr(1,3);
console.log(substr);

console.log(str.toUpperCase());

console.log(str);

console.log(str.toLowerCase());

//concatination 
let  firststr = "Believe "
let  secondstr = " in yourself"

let concate = firststr + secondstr
console.log(concate);

let concate2 = firststr.concat(secondstr, " and me");
console.log(concate2);

// remove white space

let hello = "          Hello   ";
console.log(hello.trim());

let hello2 = "    Hello how are you";
console.log(hello2);
console.log(hello2.length);
console.log(hello2.trim().length);