//case 1

// let a = 100
// const b = 20
var c = 300

// console.log(a);
// console.log(b);
// console.log(c);

//case 2
if(true){
    let a = 10
    const b = 20
    console.log("INNER : ",a);
    
}

// console.log(a);   //error {out of scope}
// console.log(b);  //error  {out of scope}
// console.log(c);     // var behaves as global 


//NESTED SCOPE
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))   //can be used before function declaration

function addone(num){
    return num + 1
}


addTwo(5)     ///used before declaration
const addTwo = function(num){
    return num + 2
}
