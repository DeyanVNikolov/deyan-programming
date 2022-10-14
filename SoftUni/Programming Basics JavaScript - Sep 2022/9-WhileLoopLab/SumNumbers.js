function sumnumbers(input) {
    let index = 0;
    let num = Number(input[index]);
    let sum = 0;
    while (sum < num) {
        index++;
        sum += Number(input[index]);
    }
    console.log(sum);
}

sumnumbers(["20", "1", "2", "3", "4", "5", "6"]);