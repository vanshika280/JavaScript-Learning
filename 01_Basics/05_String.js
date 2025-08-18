const name="Vanshika Sardana"
const repoCount=1
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// console.log(name + repoCount + " Value");

const gameName = new String('vanshika-vs-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


 console.log(gameName.length);
 console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    vanshika    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vanshika.com/vanshika%20sardana"

console.log(url.replace('%20', '-'))

console.log(url.includes('sanyam'))

console.log(gameName.split('-'));