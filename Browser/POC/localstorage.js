// set data

localStorage.setItem("name", "Saket");
localStorage.setItem("lastname", "Bharti");
localStorage.setItem("Stream", "CSE");
localStorage.setItem("place", "Delhi");
localStorage.hobby = "Reading";

//get data 
let data = localStorage.getItem("name");
let data1 = localStorage.name;
let hob = localStorage.hobby;

console.log(data);
console.log(data1);
console.log(hob);

//length of local storage

let l = localStorage.length;
console.log(l);


// get key by index;
let d = localStorage.key(1);
console.log(d);

// remove

localStorage.removeItem("hobby");
localStorage.clear;
l = localStorage.length;

console.log(l);
