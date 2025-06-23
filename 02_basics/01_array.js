// arrays

const myArr = [0, 1, 2, 3, 4, "true", "Deepak"]
const myHeros = ["Batman" , "Superman", "Thor"]
const myArr1 = new Array(1,2,3,4,5)
//arrays ->resizable, zero-indexed ,not associative {myArr["one"]}->not allowed

// console.log(myArr[0]);
// console.log(myHeros[1]);
// console.log(myArr1[2]);

// Array methods

myArr.push(6)  //insert from last
myArr.push(7)
myArr.pop()     //remove from last

myArr.unshift(9)  //insert from first
myArr.shift()       //remove from first
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const arrCheck = myArr.join()
// console.log(myArr);
// console.log(arrCheck);
// console.log(typeof arrCheck);

// slice and splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr); //slice do not manipulate original array

const myn2 = myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);

console.log(myArr); //splice manipulate original array




















