function solve(input) {
    let nailon = (Number(input[0]) + 2) * 1.50;
    let paint = (Number(input[1]) + (0.1 * Number(input[1]))) * 14.50;
    let paintThinner = (Number(input[2]) * 5)
    let torbichka = 0.40;
    let total = nailon + paint + paintThinner + torbichka;
    let workers = (0.30 * total) * Number(input[3]);

    let final = total + workers;
    console.log(final.toFixed(2));
}


solve(["5 ",
"10 ",
"10 ",
"1 "]
)