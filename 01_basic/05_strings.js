const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + "value");    // older mathod to represent string 

console.log(`my name is ${name} and repoCount is ${repoCount}`);

const gameName = new String("hitesh")

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);


const newStringOne = " hitesh "
console.log(newStringOne);
console.log(newStringOne.trim());
const url = "https://cautious-space-memory-x5v76prr6vgfvw5.github.dev/"
console.log(url.replace('5' , '-'));
console.log(url.includes('memory'));
console.log(gameName.split('_'));