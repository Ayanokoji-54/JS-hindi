// Dates

let myDate = new Date()  //declaration
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2025,0,2) // month start with 0 in js
let myNewDate = new Date(2025,2,22,2,45,1)
let myNewDate1 = new Date("2025-05-15")
let myNewDate2 = new Date("01-14-2025")



console.log(myCreatedDate.toDateString());
console.log(myNewDate.toLocaleString());
console.log(myNewDate1.toLocaleString());
console.log(myNewDate2.toLocaleString());

let myTimestamp = Date.now()
console.log(myTimestamp);  //millisecond output 
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)); //give output in second

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

console.log(newDate.toLocaleString('en-In' , {
    weekday:"long",
    
}));












