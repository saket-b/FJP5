// //Spread
// const nums = [1, 2, 3];

// const newNums = [...nums, 4];
// console.log(newNums);

// const obj ={
//     name:"mohit",
//     age:23,
// };

// const newObj = {...obj, age:32};

// console.log(newObj);
// console.log(obj);

// Restoperator
//used to merge a list of function
// arguments into a array
function fun(...args) {

    console.log(args);
    console.log(typeof args);

    args.forEach( arg =>
        {
            console.log(arg);
        }
    )
    
}

fun("hello", "how", 'z', true);

