// conditions: <, >, <=, >=, ==, !=, ===, !==

// const score = 200;

// if (score > 100) {
//     let power = "fly";
//     console.log(`This User can ${power}`);
//     console.log("Example of explicit scope");
// }

//TODO:  where we can see scope within {}, this is explicit scope
//TODO: Example of implicit scope:

// const balance = 2000;

// if (balance > 500) console.log(`Balance is grater than 500`), console.log("Example of implicit scope"); //TODO: this is not a readable code - we can not write code like  this

const userLoggedIn = true;
const debitCard = true;
const userLoggedInFromGoogle = false;
const userLoggedInFromOutlook = true;

//TODO: In multiple conditions like this - where we are using "AND" operator, in this cases both the conditions needs to be true, to execute the code
// if (userLoggedIn && debitCard) {
//     console.log("User can buy courses");
// }

//TODO: In multiple conditions like this - where we need to check if one is true then we can continue with the code, we use "OR" operator
if (userLoggedInFromGoogle || userLoggedInFromOutlook) {
    console.log("This user is Logged In");
}

