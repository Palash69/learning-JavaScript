let user = {
    firstName : "Palash",
    lastName : "Dutta Banik",
    role : "Admin",
    loginCount : 69,
    facebookSignin : true,
    courseList : [],
    buyCourse : function(courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount : function() {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses.`;
    },

    getUserInfo : function() {
        return `First Name: ${this.firstName}, \nLast Name: ${this.lastName}, \nUser Role: ${this.role}, \nUser Login Count: ${this.loginCount}, \nUser SignIn: ${this.facebookSignin} \nCourse Number: ${this.courseList.length}`;
    },
};

// console.log(user.firstName);

// user.loginCount = 369;

// console.log(user.loginCount);

// console.log(user);
// console.table(user);

// console.log(user.getCourseCount());

user.buyCourse('JavaScript');
user.buyCourse('Python');

// console.log(user.getCourseCount());

// console.log(user.courseList);

console.log(user.getUserInfo());