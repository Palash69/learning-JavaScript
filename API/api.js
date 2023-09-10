fetch('https://api.chucknorris.io/jokes/random', {method: "GET"})
.then((res) => {
    console.log(res);
})
.catch();


