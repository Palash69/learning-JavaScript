const names = ["YouTube", "Facebook", "Instagram", "Netflix", "Amazon"];

// for(const n of names) {
//     console.log(n);
// }

const symbols = {
    yt: "YouTube",
    Fb: "Facebook",
    ig: "Instagram",
}

for(const n in symbols) {
    // console.log(symbols[n]);

    console.log(`${n} : ${symbols[n]}`);
}