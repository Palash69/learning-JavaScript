//TODO: falsy values: 
                    // false, 
                    // 0, 
                    // -0, 
                    // BigInt 0n, 
                    // "" (Note: double quotes without space), 
                    // null, 
                    // undefined, 
                    // NaN

//TODO: Truthy values: 
                    // "0", 
                    // "false", 
                    // " " (Note: Double quote with space), 
                    // [] (Note: Empty Array), 
                    // {} (Note: Empty Object), 
                    // function() {} (Note: Empty Function)

// const userEmailOfEmptyArray = []; //["palash@gmail.com"]

// if (userEmailOfEmptyArray.length === 0) {
//     console.log("Empty");
// } else {
//     console.log("Logged In");
// }

// const userEmailOfEmptyObject = {};  //{email: "palash@gmail.com"}

// if (Object.keys(userEmailOfEmptyObject).length === 0) {
//     console.log("Empty");
// } else {
//     console.log("Logged In");
// }



//TODO: console true statements
// false == 0  : true
// false == '' : true
// 0 == '' : true


//TODO: Nullish Coalescing Operator (??): null, undefined

// let val = 10 ?? 50;                  ans: 10
// let val = null ?? 50;                ans: 50
// let val = undefined ?? 50;           ans: 50

// console.log(val);

//TODO: Terniary Operator
// condition ? true : false

// const bookPrice = 100;

// bookPrice <= 50 ? console.log("Less than 50") : console.log("Grater tan 50");
