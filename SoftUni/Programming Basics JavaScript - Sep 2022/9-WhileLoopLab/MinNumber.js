function MinNumber(input) {
    let index = 0;
    let minNumber = Number.MAX_SAFE_INTEGER;
    let command = input[index];
    index++;
    while (command != "Stop") {
        let number = Number(command);
        if (number < minNumber) {
            minNumber = number;
        }
        command = input[index];
        index++;
    }
    console.log(minNumber);
}

MinNumber(["100",
"99",
"80",
"70",
"Stop"])

