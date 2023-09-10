class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    };
    #courseList = []; //TODO: By putting a # before the variable name we are setting the variable as a private variable 
    getInfo() {
        return {name: this.name, email: this.email};
    };
    enrollCourseSet(courseName) {
        this.#courseList.push(courseName);
    };
    getCourseList() {
        return this.#courseList;
    };
};


const rock = new User("Rock", "rock@rock.com");

rock.enrollCourseSet("WWE RAW");

console.log(rock.getCourseList());
console.log(rock.courseList); //TODO: If the courseList is not a private variable then this will print the courseList

// let rockCourse = rock.getCourseList();

// console.log(rockCourse);