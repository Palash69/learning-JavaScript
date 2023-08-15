//TODO: declaring arrays syntax 1

const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr);

// console.log("A with plus " + myArr);
// console.log("A with plus " + JSON.stringify(myArr));
// console.log("B with comma ", myArr);



// console.log(myArr[0]);

//TODO: declaring arrays syntax 2 - new syntax

const myArr2 = new Array(1, 2, 3, 4, 5);

// console.log(myArr2);

// console.log(myArr2[0]);

//TODO:  array methods

// TODO: push pop

// myArr.push(6, 7, 8, 9);

// myArr.pop();

// console.log(myArr);

//TODO: shift unshift

// myArr2.unshift(0);

// console.log("myArr2" + " " + myArr2);

// myArr2.shift();

// console.log("myArr2" + " " + myArr2);

//TODO: includes - returens a boolean value

//TODO: indexOf - returens the index, if the element does not exist in the array then will return -1 as index 

//  console.log(myArr.includes(9));
//  console.log(myArr.indexOf(9));

//TODO: join - changes the type of the array top string

// const newArr = myArr.join(); // join operation converts the array into a string type

// console.log(newArr);
// console.log(typeof newArr); // type checking of newArr

//TODO: slice splice

// const myArr2 = new Array(1, 2, 3, 4, 5);

//  TODO: slice - what ever number we are providing for slicing it is the index number, 
//slicing - start position Inclusive, end position Exclusive
// does not make any changes to the orignal array

// console.log("Array:  ", myArr2);


// const myNewArr_1 = myArr2.slice(1, 3); //answer - 2,3

// console.log("slice:  ", myNewArr_1);

// console.log("Array after slice: ", myArr2);


// let users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];

// console.log(users);
// console.log(users.slice(1, 3));
// console.log(users);


//  TODO: splice - what ever number we are providing for splicing it is the index number, 
//splicing - start position Inclusive, range or count
// remove the elements from the orignal array - make change in the orignal array

// const myNewArr_2 = myArr2.splice(1, 3);

// console.log("splice:  ", myNewArr_2);

// console.log("Array after splice: ", myArr2);


// let users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];

// console.log(users);
// console.log(users.splice(1, 2, "Palash")); // starting position, range of count, pass as many values you want 
// console.log(users);


//test
// let obj = {
//     palash: "69"
// };

// let my_Array = [1, 2, 3, obj];

// let slice_Arr = my_Array.slice(1);

// console.log("before: ", slice_Arr);

// obj.palash = 96;

// console.log("after: ", slice_Arr);
