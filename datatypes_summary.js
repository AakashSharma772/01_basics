// Primitive

// 7 types = String,Number,Boolean,null,undefined,Symbol,BigInt

// Referance (Non-primitive)

// Array,Objects,Functions

let value = 33;
let valueIs = 1000.5;

const isLogged = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('113');
const anotherId = Symbol('113');

console.log(id === anotherId);

const heros = ["saktiman","naagraj","marvel","doka"];

let myObj = {
    name:"Aakash",
    age:22,
    email:"akaash83838@gmail.com"
}

const myFunction = function(){
    console.log("Hello");
}

console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);
console.log(typeof isLogged);
console.log(typeof outSideTemp);



// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) or Heap(Non-primitive)

let myYoutubeName = "aakashsharma";

let anotherName = myYoutubeName;
anotherName = "ashok444";

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email:"userOne@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne;

userTwo.upi = "user1@axl";
console.log(userOne);
console.log(userTwo);