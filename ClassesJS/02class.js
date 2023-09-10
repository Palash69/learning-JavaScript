const User = require("./01class.js");

const palash = new User("Palash", "palash@email.com");

console.log(palash.getInfo());

palash.enrollCourseSet("React Bootcamp");
palash.enrollCourseSet("Angular Bootcamp");

console.log(palash.getCourseList());
console.log(palash.getCourseList().length);

let courses = palash.getCourseList();

courses.forEach((c) => {
    console.log(c);
});
console.log(courses.length);