let uno = () => {
    console.log("I'm One...");
};

let dos = () => {
    //TODO: Event loop - as we set a wait time, other things will execute and when the timeour is over then it'll print that message
    setTimeout(() => {
        console.log("WoooooooooooHoooooooooooooooooooooooooo!!!!!!!!!!!!!!!!!!!");
    }, 3000);
    console.log("I'm Two...");
};

let tres = () => {
    console.log("I'm Three...");
};

uno();
dos();
tres();