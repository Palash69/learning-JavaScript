//TODO: Actual function - 

function sayHello() {
    console.log("I say hello!");
    console.log("I say hello again."); 
}
console.log("Output of normal function: ");
sayHello();

//TODO: IIFE - Self Executing Anonymous Function syntax
console.log("Output of IIFE function: ");

(function() {
    console.log("I say hello!");
    console.log("I say hello again.");
})();

