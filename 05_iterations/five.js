const coding = ["js", "ruby", "java", "python", "cpp"]


//METHOD 1

// coding.forEach( function (val){
//     console.log(val);
// } )

//METHOD 2

// coding.forEach( (item) => {
//     console.log(item);
// } )

//METHOD 3

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

//METHOD 4

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

// coding.forEach( (a, b, c)=> {
//     console.log(a, b, c);
// } )

//[{}, {}, {}]

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item);
} )

myCoding.forEach( (item) => {
    
    console.log(item.languageFileName);
} )