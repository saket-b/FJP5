let user ={
    firstName:"kapil",
    lastName:"Dev",
};

let welcome = function (email, mobilenumber, location) {

    console.log(`welcome ${this.firstName}  ${this.lastName
    }
    thank you for signing up ! your email is ${email} , Your resiter number 
    ${mobilenumber} , loction ${location}`);
    
}

let user2 ={
    firstName:"Ravi",
    lastName:"sastri",
};

// syntax ->function_name.call(object,  variable which you want to pass);

welcome.call(user, "abc@gmail.com", 123456, "india");

welcome.call(user2, "cba@gmail.com", 12345, "india");

//
welcome.apply(user2, ["cba@gmail.com", 12345, "india"]);

let bindfun = welcome.bind(user, "abc@gamil.com", 1234, "India");
console.log(bindfun);
bindfun();


