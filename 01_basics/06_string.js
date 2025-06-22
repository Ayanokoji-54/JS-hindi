const name = "Deepak"
const repoCount = 50

// console.log(name + repoCount +" Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Deepak-kt')  //declaration

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('p'));  //go through all method of string


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newString1 = "   Deepak   "
console.log(newString1);
console.log(newString1.trim());


const url = "https://deepak.com/deep%8t"
console.log(url.replace('%8', '--'));

console.log(url.includes('deep'));
console.log(url.includes('epk'));

console.log(gameName.split('-'));













