// const coding = ["js", "py", "cpp", "ruby"];

// const values = coding.forEach( (item) => {
//     console.log(item); //for each does not return anything, we can only print the values or access the values
// } )

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let nums = myNums.filter((num) => {
//     return num > 4;
// });

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newArr = [];

// let nums = myNums.forEach((num) => {
//     if(num > 4) {
//         newArr.push(num)
//     }
// });

// console.log(newArr);


// const books = [
//     {
//         title: 'Book One', 
//         genre: 'Friction',
//         publish: 1981,
//         edition: 2004,
//     },
//     {
//         title: 'Book Two', 
//         genre: 'Non-Friction',
//         publish: 1992,
//         edition: 2008,
//     },
//     {
//         title: 'Book Three', 
//         genre: 'History',
//         publish: 1999,
//         edition: 2007,
//     },
//     {
//         title: 'Book Four', 
//         genre: 'Non-Friction',
//         publish: 1989,
//         edition: 2010,
//     },
//     {
//         title: 'Book Five', 
//         genre: 'Science',
//         publish: 2009,
//         edition: 2014,
//     },
//     {
//         title: 'Book Six', 
//         genre: 'Friction',
//         publish: 1987,
//         edition: 2010,
//     },
//     {
//         title: 'Book Seven', 
//         genre: 'History',
//         publish: 1986,
//         edition: 1996,
//     },
//     {
//         title: 'Book Eight', 
//         genre: 'Science',
//         publish: 2011,
//         edition: 2016,
//     },
//     {
//         title: 'Book Nine', 
//         genre: 'Non-Friction',
//         publish: 1981,
//         edition: 1989,
//     },
// ]

// let userBooks = books.filter((bk) => {
//     return bk.genre === "History" && bk.edition >= 2000;
// })

// console.log(userBooks);


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myNumbers);
let nums = myNumbers
.map((num) => {
    return num + 10;
})
.map((num) => {
    return num * 10;
})
.filter((num) => {
    return num > 150;
})

console.log(nums);