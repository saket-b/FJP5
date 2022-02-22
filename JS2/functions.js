
// //There are three types of function

// function function_name(param1) //function defination
// {

    
// }


// function_name(arg1); //function calling


// function add(a, b)
// {
//     return a+b;
// }

// let ans = add(2, 8);

// console.log(ans);

function calculator(str, a, b){
    if( str == 'add')
    {
        return function add()
        {
            console.log(a+b);
        }
    }

    else if( str == 'sub')

    {
        return function sub()
        {
            console.log(a-b);
        }
    }
    else if( str ==  'mul')
    {
        return function mul()
        {
            console.log(a*b);
        }
    }
    else 
    {
        return  function  div()
        {
            console.log(a/b);
        }
    }
}


///
let returnfunc = calculator('sub', 2, 35);

//console.log("return function + ", returnfunc);
returnfunc();

function abcd(){
    console.log(" i am inside abcd ");
}




let sayhi = function (){
    console.log("i am in expression function\n");
}



//console.log("line 45 ", sayhi);

sayhi();



// IIFE
function add(a, b) {
    return a + b
}
add(2, 3);

let additionIIFE = (function(a, b){
    console.log(a+b);
})(20, 30);



