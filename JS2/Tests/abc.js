

// var a = 10;


// console.log(a == "10");// auto matic type converter
// console.log(typeof a);
// console.log(typeof a === "number");
// console.log(a === 10);


// < --------------Question 1----------------->
// const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];

// /* 1 */ emojis.push('🦌');
// /* 2 */ emojis.splice(0, 2);
// /* 3 */ var s =[...emojis, '🥂'];
// //emojis.length = 0;
// //console.log(emojis.length);
// console.log(emojis);
// console.log(s);

// var sk =  "14"+ 15;
// console.log(sk);
// console.log(5+7 +'9');
// let user = {
// 	email: "my@email.com",
// 	updateEmail: function (email){
// 		this.email = email
// 	}
// }

// user.updateEmail("new@email.com")
// console.log(user.email)


// const fruit = ['🍌', '🍊', '🍎']

// let x =fruit.slice(0, 1)
// console.log(x);
// let y =fruit.splice(0, 1)
// console.log(y);
// fruit.unshift('🍇')

// console.log(fruit)

// let count = 0;
// const nums = [0, 1, 2, 3];

// for(var i in nums){
// 	if (i) console.log(i);
// }

// console.log(count)

// const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];

// /* 1 */ emojis.push('🦌');
// /* 2 */ emojis.splice(0, 2);
// /* 3 */ let x = [...emojis];
// /* 4 */ emojis.length = 0;
// console.log(x);

// const person = {
//     name: 'Lydia Hallie',
//     address: {
//       street: '100 Main St',
//     },
//   };
  
//   Object.freeze(person);
//   person.name= "dlwwle";
//   console.log(person);

// const person = { name: 'Lydia Hallie' };

// let obj2 = Object.seal(person);
// obj2.name = "hello";
// console.log(person);

// const groceries = ['banana', 'apple', 'peanuts'];

// if (groceries.indexOf('banana')) {
// console.log('We have to buy bananas!');
// } else {
// console.log(`We don't have to buy bananas!`);
// }

// function sumValues(x, y, z) {
//     return x + y + z;
//   }
//   //console.log(sumValues([...1, 2, 3]));
//    console.log(sumValues([...[1, 2, 3]]));
//   console.log(sumValues(...[1, 2, 3]));
//    console.log(sumValues([1, 2, 3]));

// const person = {
//     name: 'Lydia',
//     age: 21,
//   };
  
//   const changeAge = (x = { ...person }) => (x.age += 1);
//   const changeAgeAndName = (x = { ...person }) => {
//     x.age += 1;
//     x.name = 'Sarah';
//   };
  
//   changeAge(person);
//   console.log(person);
//   changeAgeAndName();
  
//   console.log(person);
//
// const colorConfig = {
//     red: true,
//     blue: false,
//     green: true,
//     black: true,
//     yellow: false,
//   };
  
//   const colors = ['pink', 'red', 'blue'];
  
//   console.log(colorConfig[colors[1]]);
// let newList = [1, 2, 3].push(4);

// console.log(newList);

// function checkAge(age) {
//     if (age < 18) {
//       const message = "Sorry, you're too young.";
//     } else {
//       const message = "Yay! You're old enough!";
//     }
  
//     return message;
//   }
//   checkAge(12);
  //console.log(checkAge(12));

//   const user = { name: 'Lydia', age: 21 };
// const admin = { admin: true, ...user };

// console.log(admin);

const person = {
    name: 'Lydia',
    age: 21,
  };
  
  for (const item in person) {
    console.log(item);
  }