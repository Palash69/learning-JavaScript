const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor;
};

// let color = getBGColor(red);
// let cyanElementColor = getBGColor(cyan);
// let violetElementColor = getBGColor(violet);
// let orangeElementColor = getBGColor(orange);
// let pinkElementColor = getBGColor(pink);

// orange.addEventListener("mouseenter", () => {
//     center.style.background = color;
// });

const magicColorChangeer = (element, color) => {
  return element.addEventListener("mouseenter", () => {
    center.style.background = color;
  });
};

magicColorChangeer(red, getBGColor(red));
magicColorChangeer(cyan, getBGColor(cyan));
magicColorChangeer(violet, getBGColor(violet));
magicColorChangeer(orange, getBGColor(orange));
magicColorChangeer(pink, getBGColor(pink));
