// Immediately Invoked Function Expressions (IIFE)


//use method 1

//( function() {
  // code here runs immediately
// })();

//use method 2
// ( () => {
  // code here runs immediately
// })();



(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
