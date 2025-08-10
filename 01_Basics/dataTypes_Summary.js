//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
console.log(userEmail+" type of "+typeof userEmail);

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id);
console.log(anotherId);



console.log(id === anotherId);

 const bigNumber = 3456543576654356754n
 console.log(typeof bigNumber);



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "vanshika",
    age: 20,
}
console.log(heros+" "+ typeof heros);
const myFunction = function(){
    console.log("Hello world");
}
myFunction();

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3