// const user = ["Palash", 5, "Admin"];

// let [name, courseCount, role] = user;

// console.log(name);

//TODO: this destricturing of data is mainly used for objects - if the variable names does not match then it will throw us error
const mayUser = {
    name: "Palash",
    courseCount: 5,
    role: "Admin",
};

let {name, courseCount, role} = mayUser;

console.log(role);