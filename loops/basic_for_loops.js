// for(let i = 0; i <= 5; i++) {
//     console.log(i);
// }

const myStates = [
  "West Bengal",
  "Delhi",
  "Assam",
  1947,
  "Tamil Nadu",
  "Maharashtra",
];

for (let i = 0; i <= myStates.length - 1; i++) {
  //if with {}
  if (typeof myStates[i] === "string") {
    console.log(myStates[i]);
  }
}
console.log("----------------------------------------------");
for (let i = 0; i < myStates.length; i++) {
  // if with continue keyword - it is working with the count of the loop - it will run and when the condition will break it will skip that and continue running
  if (typeof myStates[i] !== "string") continue;
  console.log(myStates[i]);
}

console.log("----------------------------------------------");
for (let i = 0; i < myStates.length; i++) {
  // if with break keyword - as soon as the conditions fails it will stop running
  if (typeof myStates[i] !== "string") break;
  console.log(myStates[i]);
}
