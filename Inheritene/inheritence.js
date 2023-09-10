class User {
    //TODO: If we do not create any constructor then JS automatically creates one blank constructor for us.
    constructor(name, email) {
        this.name = name;
        this.email = email;
    };
    courseList = [];
    getInfo() {
        return {name: this.name, email: this.email};
    };
    enrollCourseSet(courseName) {
        this.courseList.push(courseName);
    };
    getCourseList() {
        return this.courseList;
    };

    //TODO: If we put a static keyword before any method then it will be a private property, child class won't be able to access it.
    // static login() {
    //     return "User Logged In...";
    // }

    login() {
        return "User Logged In...";
    }
};

class SubAdmin extends User{
    //TODO: By super keyword we can access the constructor items in the child class
    constructor(name, email) {
        super(name, email);
    };
    getSubAdminInfo() {
        return "I'm Sub Admin";
    };

    //TODO: in our parent class we do have a login method and that one is accessable to the child method, but if we want to override the method then we just need to define another method in the child class - JS is smart enough to understand this.
    //This is why now child class is accessing this login method not the other one which is defined in the parent class
    // Method overriding
    login() {
        return "I', logged in as a Sub Admin";
    };
};

const tom = new SubAdmin("Tom", "tom@jerry.com");
console.log(tom.getSubAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());