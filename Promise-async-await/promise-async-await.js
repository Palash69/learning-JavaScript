let uno = () => {
  return "I'm One...";
};

// let dos = async () => {
//     setTimeout(() => {
//         return "I'm Two...";
//     }, 3000);
// };

let dos = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I'm Two...");
    }, 3000);
  });
};

let tres = () => {
  return "I'm Three...";
};

let runAll = async () => {
  console.log(uno());
  console.log(await dos());
  console.log(tres());
};

runAll();
