// singleton
// Object.create

// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name : "Deepak",
    "full name" : "Deepak Kumar",
    age : 18,
    [mySym] : "mykey1",           //refer to symbol
    location : "jaipur",
    email: "deepak@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]

} //declaration

// console.log(JsUser.email);         //method 1 to access
// console.log(JsUser["email"]);      //method 2 to access
// console.log(JsUser["full name"]);  //full name can only access using this method only
// console.log(JsUser[mySym]);

JsUser.email = "Deepak@chatgpt.com"  //change 
// Object.freeze(JsUser)                //no further change cabn be allowed
JsUser.email ="Deepak@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){       
    console.log("Hello Js User");
    
}
// Make sure to comment out freeze
JsUser.greetingTwo = function(){
    console.log(`Hello Js User , ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






