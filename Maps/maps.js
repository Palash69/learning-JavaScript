let myMap = new Map();

myMap.set(1, "One");
myMap.set(2, "Two");
myMap.set(3, "Three");
myMap.set(4, "Four");

//TODO: Map store key and values like this { 1 => 'One', 2 => 'Two', 3 => 'Three', 4 => 'Four' }
console.log(myMap);

//TODO: forof loop to print the keys

for (const key of myMap.keys()) {
    console.log(key);
}

//TODO: forof loop to print the values

for (const value of myMap.values()) {
    console.log(value);
}

//TODO: forof loop to print the keys and values - need to provide the iterator as an array format

for (const [key, value] of myMap) {
    console.log(`Key: ${key} and Value: ${value}`);
}

//TODO: foreach loop always returns the values - it thoughts that we want to manipulate the values 
myMap.forEach(key => {
    console.log(key);
});

//TODO: so we can write the above foreach loop like this
myMap.forEach(value => {
    console.log(value);
});

//TODO: by this we can grab the keys and values tougher with the help of a foreach loop
myMap.forEach((value, key) => {
    console.log(`Key: ${key} & Value: ${value}`);
});

//TODO: NOTE: forof loop alawyas gives us the key first, but foreach loop always gives us the value first


//TODO: delete element from map - by the key we can delete key and value pair from a MAP

// myMap.delete(2);
// console.log(myMap);
//result: Map(3) { 1 => 'One', 3 => 'Three', 4 => 'Four' }

