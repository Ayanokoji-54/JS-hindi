//  functions

function myName(){
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
    console.log("A");
    console.log("K");
}

// myName()

function addTwoNums(num1 , num2){
    console.log(num1 + num2);
}

// addTwoNums(3,5)   //do not forget to pass argument
// addTwoNums(3,"5")
// const result = addTwoNums(5,4)
// console.log("Result : ",result);   //undefined output

function addTwoNums1(num1 , num2){
    // let result = num1 + num2
    // return result 
    // //or
    return num1 + num2
}

const result1 = addTwoNums1(6,8)
console.log("Result : ",result1);

function loginUserMsg(username ){
    if(username === undefined){
        console.log("Please enter User name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMsg("Deepak"));
console.log(loginUserMsg());


