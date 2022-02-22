 console.log(a);
  hello();

  console.log(hello2);
//hello2();// this gives the error bc this is not a function variable
// varibale undefine ur phir app () likhoge then gives the hello2 is not a functi.
  var a =10;

  function hello(){
      console.log("hello  coder");
  }

  //hosting definition

// we can access the variables even before we have declared its value;

// this is call function expression.
// varibale ke under ek function hai
var hello2 = function() {
    
    console.log("welcome");
}