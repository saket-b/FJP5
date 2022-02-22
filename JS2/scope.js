
function outer() {

    inner();

    function inner() {
        console.log(b);
    }
    
}

var b =10;

outer();
console.log(b);

/*
scope : 
where can this variable/ function be accessed in the code.
            OR
is variable 
*/