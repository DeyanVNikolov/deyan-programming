function maxnumber(input) {
    let index = 0;
    let number = input[index];
    let max = Number.MIN_SAFE_INTEGER;
    while (number !== "Stop") {
        number = Number(number);
        if (number > max) {
            max = number;
        }
        index++;
        number = input[index];
    }
    console.log(max);
}
maxnumber(["100", "99", "80", "70", "Stop"]);