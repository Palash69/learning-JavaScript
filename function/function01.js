//TODO: Normal way to write a function

function getUserRole(name, role) {
    switch (role) {
        case "admin":
            return `${name} is a admin and get full access`;
        case "subadmin":
            return `${name} is a subadmin and get access to create/delete courses`;
        case "testprep":
            return `${name} is a testprep and get access to create/delete tests`;
        case "user":
            return `${name} is a user and get access to the content of the course`;
      
        default:
          return `${name} is a trial user`;
      }
};

var result = getUserRole("Palash", "subadmin");

console.log(result);

// TODO: create a variable with the function name and this will work same

var getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is a admin and get full access`;
        case "subadmin":
            return `${name} is a subadmin and get access to create/delete courses`;
        case "testprep":
            return `${name} is a testprep and get access to create/delete tests`;
        case "user":
            return `${name} is a user and get access to the content of the course`;
      
        default:
          return `${name} is a trial user`;
      }
};

var result = getUserRole("Palash", "admin");

console.log(result);
