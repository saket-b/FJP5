// class Penguin{
//     constructor()
//     {
//         this.habitat = "Antartica";
//     }

//     printPlaceOrigin(){
//         console.log(this.habitat);
//     }
// }

// const myPenguin = new Penguin();

// console.log(myPenguin);
// myPenguin.printPlaceOrigin();



// class LivingOrganism{
//     constructor(){
//         this.breaths = "breathing is life ";
//     }
//     isBreathing (){
//         console.log(this.breaths);
//     }
// }


class Bird {
   eats = true;

    printHabts =()=>{
        console.log(this.eats);
    };
}

// // inheritance

// class Penguin extends Bird{
//     constructor()
//     {
//         super();
//         this.habitat = "Antartica";
//     }

//     printPlaceOrigin(){
//         console.log(this.habitat);
//     }
// }

// const myPenguin = new Penguin();

// console.log(myPenguin);
// myPenguin.printPlaceOrigin();
// myPenguin.isBreathing();


class Penguin extends Bird{
    habitat = "Antartica"

    printPlaceOrigin = () =>{
        console.log(this.habitat);
    }
}

const myPenguin = new Penguin();

console.log(myPenguin);
myPenguin.printPlaceOrigin();
myPenguin.printHabts();
