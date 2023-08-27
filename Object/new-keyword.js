// TODO: Making prototype of an object

let User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course count is: ${this.courseCount}`);
  };
};

//TODO: with the help of the new keyword we are invocing the prototype object, we can add as many as we want

let palash = new User("Palash", 2);
// console.log(palash);

let sam = new User("Sam", 1);
// console.log(sam);

palash.getCourseCount();
sam.getCourseCount();

//TODO: we can add methods in the prototype object
User.prototype.getFirstName = function () {
  console.log(`First name is: ${this.firstName}`);
};

//TODO: if the property is not available in the prototype then it will be assigned as undefined
User.prototype.getLastName = function () {
  console.log(`Last name is: ${this.lastName}`);
};

//TODO: hasOwnProperty returns a true or false value, if the property exists then only it will print or return the property, otherwise it won't
if (palash.hasOwnProperty("lastName")) {
  palash.getLastName();
}
palash.getFirstName();
// palash.getLastName();
