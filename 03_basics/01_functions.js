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
// console.log("Result : ",result1);

function loginUserMsg(username ){
    if(username === undefined){
        console.log("Please enter User name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMsg("Deepak"));
// console.log(loginUserMsg());

// case 1
function calculateCartPrice1(num1){
    return num1
}
// console.log(calculateCartPrice1(200, 300, 400));

// case 2
function calculateCartPrice2(...num2){             ///...rest or spread operator
    return num2
}
// console.log(calculateCartPrice2(200 , 300, 400));

// case 3
function calculateCartPrice3(value1, value2, ...num3){
    return num3
}
// console.log(calculateCartPrice3(200, 300, 400, 500));

//
const user = {
    username: "Deepak",
    price: 199
}

function handleObject(anyObj){
    console.log((`User is ${anyObj.username} and price is 
        ${anyObj.price}`));   
}

// handleObject(user)      //method 1
handleObject({
    username: "Sam",      //method 2
    price: 299
})

//passing array
 const myNewArray = [200, 300, 400, 500]

 function returnValue(getArray){
    return getArray[2]
 }
 console.log(returnValue(myNewArray));         //m1
 console.log(returnValue([100,200,300,400]));  //m2
 