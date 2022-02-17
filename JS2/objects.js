//javascript objects are always inkey value pair
let obj ={};//empty object.

console.log(obj);
// person is object
let person={

    name: "saket",
    age :25,

};

console.log(person.name);//both are same
console.log(person["name"]);


let capitanamerica = {

    firstname : "steve",
    lastname : "rogers",

    friends : ["Bucky", "Tonny Stark", "Brue Banner"],
    age : 102,
    isavenger: true,

    address:{
        state : "bihar",
        city: "madhubani",
        country: "india",
    },

    sayHi: function(){
        console.log(`hello my name is ${this.firstname}`);
    }

}

console.log(capitanamerica.firstname);
  capitanamerica.sayHi();
//console.log(capitanamerica.sayHi());
//console.log(captianamerica.address.state);

// for loop
// in keyword in js is used to get keys from the objects.
for( let i in capitanamerica)
{
    console.log(i);
    //variable ke under binded value calculate.
    console.log(capitanamerica[i]);
}
