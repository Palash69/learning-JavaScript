// let returnMaxValue = Math.max(2, 5, 8, 9);
// console.log(returnMaxValue);

// let myObj = {};

// Object.assign(myObj, {a: 1, b: 2, c: 3}, {x: 4, y: 5, z: 6});

// console.log(myObj);

function sumOne(a, b) {
    return a + b;
}

myArr = [1, 1],
console.log(sumOne(...myArr)); //TODO: Spred Operator - takes a set of values and spred them as individual values


//TODO: Rest operator - converts individual values in to array - here if we want to use n number of values it'll process that as well
function sumTwo(...args) {
    console.log(args); //TODO: this will show how rest ops converting the values to array
    let sum = 0;
    for (const arg of args) {
        sum = sum + arg;
    }
    return sum;
}

console.log(sumTwo(1, 1, 1));


//TODO: Here we are taking input and passing 1st 2 values for multiply and the rest is for sum, by this the ...args is ignoring the 1st 2 values 

function sumThree(a, b, ...args) {
    let multi = (a * b);
    let sum = 0;
    for (const arg of args) {
        sum = sum + arg;
    }
    return [multi, sum];
}

console.log(sumThree(2, 3, 1, 1, 1));

