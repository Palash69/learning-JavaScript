let User = {
    name: "",
    getUserName: function() {
        console.log(`User name is: ${this.name}`);   
    },
};

let palash = Object.create(User);
console.log(palash);
palash.name = "Palash Dutta Banik";
palash.getUserName();

let sam = Object.create(User, {
    name: {value: "Sammy" },
    courseCount: {value: 3},
});

sam.getUserName();
