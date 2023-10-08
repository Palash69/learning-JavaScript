// const myNums = [1, 2, 3];

// let myTotal = myNums.reduce((acc, currVal) => {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal;
// }, 0)

// console.log(myTotal);

const myShoppingCart = [
    {
        itemName: "js course",
        price: 999,
    },
    {
        itemName: "py course",
        price: 299,
    },
    {
        itemName: "web dev course",
        price: 1999,
    },
    {
        itemName: "mobile course",
        price: 2999,
    },
    {
        itemName: "data science course",
        price: 3999,
    },
];

let priceToPay = myShoppingCart.reduce((acc, item) => {
    return acc + item.price
}, 0);

console.log(priceToPay);