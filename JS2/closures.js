

function outer() {

 
int a =10;
    function inner() {
        console.log(a);
    }
    return inner;
}

let z = outer();
z();

