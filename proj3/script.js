const courses = [
  {
    name: "Complete React JS",
    price: "2.4",
  },
  {
    name: "Complete Angular",
    price: "2.5",
  },
  {
    name: "Complete Python",
    price: "2.1",
  },
  {
    name: "Complete SQL",
    price: "2.9",
  },
];

function generateLIST() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";
  courses.forEach((course) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const name = document.createTextNode(course.name);
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-right");

    const price = document.createTextNode("Rs. "+ course.price);
    span.appendChild(price);

    li.appendChild(span);
    ul.appendChild(li);
  });
}

//TODO: calling function everytime
// generateLIST();

//TODO: whenever the page loads calling the instane of the function
window.addEventListener("load", generateLIST);

const button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
  courses.sort((a, b) => a.price - b.price);
  generateLIST();
});

const button1 = document.querySelector(".pri-btn");

button1.addEventListener("click", () => {
    courses.sort((a, b) => (b.price - a.price));
    generateLIST();
});
