//TODO: Function syntax 1

// function isEven(ele) {
//     if(ele % 2 === 0) {
//         return true;
//     }
//     return false;
// }

// function isEven(ele) {
//     return ele % 2 === 0; //this syntax is same as the previous function - this is also returns a true or false value
// }

//TODO: Function syntax 2 - in this type if we are not returning anything then as it is a veriable will assign as undefined

// let isEven = function (ele) {
//   return ele % 2 === 0;
// }

//TODO: Function syntax 3: Arrow function

// let isEven = (ele) => {
//     return ele % 2 === 0;
// }

// console.log(isEven(2));
// console.log(isEven(3));

// let result = [2, 4, 6, 8].every(isEven);
// console.log(result); //will return true as every item is satisfying the function, if one item will dissatisfy the function then will return false

//TODO: Callback function
// TODO: if we are adding {} then return keyword need to be there
// let result = [2, 4, 6, 8].every((ele) => {
//     return ele % 2 === 0;
// });

// console.log(result);

// TODO: if we do not want to return anything then syntax - replace the {} with (), or remove it

// let result = [2, 4, 6, 8].every((ele) => ele % 2 === 0);
//TODO: OR
// let result = [2, 4, 6, 8].every((ele) => (ele % 2 === 0));

// console.log(result);

