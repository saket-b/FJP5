// type conversion
var ans = "5" + 1; //51
console.log(ans);

var ans = 1+ "5";//15
console.log(ans);

var ans = null * 5; // 0 * 5 null->design default JS

console.log(ans);

console.log(undefined * 5);// NaN

console.log("5" - 1); // 4

console.log(null * "5");// 0 ->anything multiple by zero obius zero
// terniary operator
console.log("ten" * 3);// NaN because ten non meaning ful string
console.log("10" * 3); // 30