function Divideby9AndSum(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let sum = 0;
    let output = "";
    for (let i = start; i <= end; i++) {
        if (i % 9 === 0) {
            sum += i;
            output += i + "\n";
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(output);


}

Divideby9AndSum(["100", "200"]);