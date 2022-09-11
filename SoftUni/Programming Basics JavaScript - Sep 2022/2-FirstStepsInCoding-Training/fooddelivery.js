function solve(input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegMenu = Number(input[2]);
    let total = chickenMenu * 10.35 + fishMenu * 12.40 + vegMenu * 8.15;
    let desert = total * 0.20;
    let totalWithDesert = total + desert + 2.50;
    console.log(totalWithDesert);
}

solve(["9 ",
"2 ",
"6 "]
)