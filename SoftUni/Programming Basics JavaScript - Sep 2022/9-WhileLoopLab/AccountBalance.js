function accountbalance(input) {
    let index = 0;
    let command = input[index];
    let sum = 0;
    while (command !== "NoMoreMoney") {
        let money = Number(command);
        if (money < 0) {
            console.log("Invalid operation!");
            break;
        }
        sum += money;
        console.log(`Increase: ${money.toFixed(2)}`);
        index++;
        command = input[index];
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}

accountbalance(["5.51", "69.42", "100", "NoMoreMoney"]);