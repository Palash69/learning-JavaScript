var user;

user = "admin";
// user = "subadmin";
// user = "testprep";
// user = "user";
// user = "abc";

switch (user) {
  case "admin":
    console.log("You get full access");
    break;
  case "subadmin":
    console.log("get access to create/delete courses");
    break;
  case "admin":
    console.log("get access to create/delete tests");
    break;
  case "admin":
    console.log("get access to consume content");
    break;

  default:
    console.log("Trial user");
    break;
}