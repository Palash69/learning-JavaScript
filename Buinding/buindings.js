const palash = {
    firstName : "Palash",
    lastName : "Dutta Banik",
    role : "Admin",
    courseCount : 3,
    getInfo : function() {
        console.log(
            `
            First Name: ${this.firstName}
            Last Name: ${this.lastName}
            Role: ${this.role}
            Course Count: ${this.courseCount}
            `
        );
    }
};

const dj = {
    firstName : "Rock",
    lastName : "DJ",
    role : "Sub-Admin",
    courseCount : 4,
};

// palash.getInfo();

//TODO: BIND - returns a reference, we need to run the reference to get the output

//TODO: by Bind we are borrow a method from other object

//TODO: Bind alaways returns a reference object - so we need to run that reference otherwise won't print or return anything
//TODO: one way to run bind functions
// palash.getInfo.bind(dj)();

//TODO: other way to run bind funtions
// let djInfo = palash.getInfo.bind(dj);
// djInfo();

//TODO: CALL - it can call the method/function, no need to run it again
// palash.getInfo.call(dj);