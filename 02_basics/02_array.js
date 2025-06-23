const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash","Batman"]

// marvel_heros.push(dc_heros)  //merges array as a element

// console.log(marvel_heros);
// console.log(marvel_heros[3][1])

// const allHeros = marvel_heros.concat(dc_heros) //merged all elements of array seperately
// console.log(allHeros);

// const new_heros = [...marvel_heros, ...dc_heros]  //spread  merge seperately
// console.log(new_heros);

const another_array = [1, 2, 3, [4, 5 ,6], 7, [6, 17, [4, 5]]]

// const real_another_array =  another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Deepak"));
console.log(Array.from("Deepak"));
console.log(Array.from({name : "Deepak"}));  

let score1 ="100"
let score2 ="200"
let score3 ="300"

console.log(Array.of(score1, score2, score3));
console.log(Array.from([score1, score2, score3]));







