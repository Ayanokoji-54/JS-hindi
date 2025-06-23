
const tinderUser = new Object()   //singleton
// const tinderUser = {}  //non - singleton 

tinderUser.id = "123abc"
tinderUser.name = "Deepak"
tinderUser.loggedin = false

// console.log(tinderUser);

const regularUser = {
    email:"someone@gmail.com",
    fullname : {
        firstname : "deepak",
        lastname : "kumar"
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}


const obj3 = {obj1, obj2}        //method 1 to combine
// console.log(obj3);
const obj4 = Object.assign({}, obj1,obj2) //method 2 to combine
// console.log(obj4);
const obj5 = {...obj1,...obj2}     //method 3 to combine*
// console.log(obj5);

//Array of object
const users = [
    {

    },
    {

    },
    {

    }
]
// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  //returns array of keys
// console.log(Object.values(tinderUser));  //returns array of values
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('loggedin'));

//de-structure


const course = {
    coursename : "JS Hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

// course.courseInstructor

const {courseInstructor: Instructor} = course  //we can assign shortcut 
console.log(Instructor);


// JSON api's talks
// {
//     "name":"Deepak",
//     "coursename":"Js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]



