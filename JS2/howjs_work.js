function cube(num){

    let res = num*num*num;
    return res;
}


//console.log(cube());// this gives the output NaN->None sensical calculation
let x =5;

var ans1 = cube();
var ans2 = cube;
console.log(ans1);
console.log(""+ ans2);
console.log(cube(x));
console.log(cube(10));

//let num = 5;//  this is gives the error
