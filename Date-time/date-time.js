// let myDate = new Date() // TODO: if we use new keyword then the date is object type, if we are not using new keyword then date is string type 

// console.log("myDate: ", myDate); // 2023-09-17T06:04:15.901Z

// console.log("toString: ", myDate.toString()); //Sun Sep 17 2023 11:35:16 GMT+0530 (India Standard Time)

// console.log("toDateString: ", myDate.toDateString()); //Sun Sep 17 2023

// console.log("toISOString: ", myDate.toISOString()); //2023-09-17T06:16:23.041Z

// console.log("toJSON: ", myDate.toJSON()); //2023-09-17T06:16:23.041Z

// console.log("toLocaleDateString: ", myDate.toLocaleDateString()); //17/9/2023

// console.log("toLocaleTimeString: ", myDate.toLocaleTimeString()); //11:46:23 am

// console.log("toLocaleString: ", myDate.toLocaleString()); //17/9/2023, 11:46:23 am


// console.log(typeof(myDate));

// let myCreatedDate = new Date(2023, 0, 31); //Array that's why calculating date month from 00
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 31, 10, 20);
// console.log(myCreatedDate.toLocaleString());

// let myAnotherDate = new Date("1999-03-11"); //String that's why calculating date month from 01
// console.log(myAnotherDate.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(typeof(myTimeStamp));
// console.log(myTimeStamp);

// let compareDate = new Date("1999-03-11");
// console.log(typeof(compareDate));
// let myCompareDate = compareDate.getTime();
// console.log(typeof(myCompareDate));
// console.log(myCompareDate);

// console.log(Date.now()); //milisec number : 1694935396560

// // TODO: convert this milisec number to sec and round or the value with Math.reound or Math.floor function - do not use Math.ceil for this kind of conversion

// console.log(Math.floor(Date.now()/1000)); // floor value : 1694935396
// console.log(Math.round(Date.now()/1000)); // round of value : 1694935397


let myDate = new Date("1999-03-11");

console.log(
    myDate.toLocaleString(
        'India',
        {
            weekday : "long"
        }
    )
);