// function init() {
//     let firstName =  "Palash";
//     function sayFirstName() {
//         console.log(firstName);
//     }
//     return sayFirstName;
// }
// let referenceValue = init();

// console.log(referenceValue);

// referenceValue();

// console.log(referenceValue);


function doAdd(a) {
    return function(b) {
        return a + b;
    }
}

//TODO: Here we are holding the reference of the function and then executing the closure
let addVal = doAdd(2);
console.log(addVal(2));

//TODO: In closure we do not have to hold the reference everytime we can run our code in this manner, this concept is called as curring - eg: doADD()()()
addVal = doAdd(5)(5);
console.log(addVal);

console.log(doAdd(6)(6)); 
