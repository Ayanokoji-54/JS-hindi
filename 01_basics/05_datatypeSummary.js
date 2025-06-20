// Primitive

//7 Categories : String, Number ,Boolean ,null ,undefined ,Symbol ,BigInt

// --> dynamically typed

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const Anotherid = Symbol('123')  //both are different

// lets check
console.log(id == Anotherid);
const bigNumber = 363581538763136972n


// Reference or Non -primitive 
//Arrays, Objects ,Functions ,

const heros = ["shaktiman" , "naagraj" ,"doga"]

let myObject = {
    name : "deepak",
    age : 20,

}

 const myFunction = function(){
    console.log("hello World");
    
 }
 console.log(typeof bigNumber); //ecma script 11.4.3 for type check 
 console.log(typeof myFunction);
 

