const marvel_heros = ["Ironman", "Spiderman", "Thor"];

const dc_heros = ["Superman", "Batman", "Flash"];

//push then it returns the new length of the array
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

let a = marvel_heros.push(dc_heros);
console.log(a);


// console.log(marvel_heros[3][2]);
// console.log(marvel_heros[2]);

//TODO: concat

// let allHeros = marvel_heros.concat(dc_heros);

// console.log(allHeros);

//TODO: Spred elements of array - easy way to concat arrays
// const all_heros_with_spred = [...marvel_heros, ...dc_heros];

// console.log(all_heros_with_spred);

//TODO: flat method to concat this type of case and return a new array with all the elements
// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// console.log(another_array);

// let my_real_array = another_array.flat(Infinity);

// console.log(my_real_array);

//TODO: checking if array or not

// console.log(Array.isArray("Palash"));

// let name_array = Array.from("Palash");
// console.log(name_array);

// console.log(Array.isArray(name_array));

//TODO: creating array from variable values

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// let all_score_array = Array.of(score1, score2, score3);

// console.log(all_score_array);

//TODO: make array wioth key and values



