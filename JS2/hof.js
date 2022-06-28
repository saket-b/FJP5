
let arr = [ 2, 3, 4, 5, 6];

// let area = function(arr){

//      let res = [];

//      for( let i=0; i<arr.length; i++)
//      {
//          res.push(arr[i]*arr[i]);
//      }

//      return res;
// }

// console.log(area(arr));

// let perimeter = function(arr){

//     let res = [];

//     for( let i=0; i<arr.length; i++)
//     {
//         res.push(4*arr[i]);
//     }

//     return res;
// }

// console.log(perimeter(arr));


// let diagonal= function(arr){

//     let res = [];

//     for( let i=0; i<arr.length; i++)
//     {
//         res.push(Math.sqrt(2)*arr[i]);
//     }

//     return res;
// }

// console.log(diagonal(arr));



// better way 

let area = function(a){

    return (a*a);
}

let perimeter = function (a) {
    
    return (4*a);
}

let diagonal = function (a) {
    return (Math.sqrt(2)*a);
}


let common = function (arr, logic) {

    let res=[];
    for( let i=0; i<arr.length; i++)
    {
        res.push(logic(arr[i]));
    }
    return res;
}

console.log(common(arr, area));

let res = arr.map((a)=>{
    return a * a;
});

console.log(res);


 const arr1 = [2, 5, 8, 6, 78]

function largestElemet(acc, cur) {
    
    if( cur > acc)
    {
        acc = cur;
    }
    return acc;
}

var ans = arr1.reduce(largestElemet, -Infinity);
console.log(ans);

var users = [
    { firstName: "Mayank", lastName: "Singh", age: 55 },
    { firstName: "Jyoti", lastName: "Jauhari", age: 25 },
    { firstName: "Saket", lastName: "Bharti", age: 15 },
    ]; 

function find(obj) {

    return  obj.firstName + " "+ obj.lastName;
}

var ans2 = users.map(find);
console.log(ans2);

function find2(robj, obj) {
    let age = obj.age;
    if(robj[age])
    {
        robj[age]= robj[age]+1;
    }
    else 
    {
        robj[age]=1;
    }
 //  console.log(robj);
    return robj;

}

var ans3 = users.reduce(find2,{});
console.log(ans3);


function find3(arr, obj) {
    
    if( obj.age < 30)
    {
        arr.push(obj.firstName + " "+ obj.lastName);
    }
    return arr;
}
var ans = users.reduce(find3, []);
console.log(ans);



Array.prototype.myMap = function (logic) {
    let res = [];
    for( let i=0; i<this.length; i++)
     res.push(logic(this[i]));

    return res;
}

var narr =[1, 2, 3, 4];
var ans = narr.myMap(area);
console.log(ans);
var ans = narr.myMap(function (params) {
    return params*3;
})

console.log(ans);
