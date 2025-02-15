// primitive
 
// 7 : string, Number, boolean, null, Undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id == anotherId);


const bigNumber = 123456789123456789n


// Reference (Non Primitive)


// Array, Objects, Functions



const heros = ["shaktiman", "nagraj", "doga"];
let myObj = {
    name:"Radhe",
    age: 22,
}



const myFunction = function(){
    console,log("hello world!");
}



console.log(typeof bigNumber);



// stack(primitive),  heap(non primitive)


let myYoutube = "hiteshchoudharydotcom"

let anotherName = myYoutube

anotherName = "chaiaurcode"
console.log(myYoutube);
console.log(anotherName);


let userOne = {
    email : "hitesh@gmail.com",
    upi: "hitesh1234"
}

let userTwo = userOne

userTwo.email = "hitesh@123gmail.com"

console.log(userOne);
console.log(userTwo);