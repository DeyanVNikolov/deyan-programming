function Vacation(input) {
    let moneyNeeded = Number(input.shift());
    let moneyAvailable = Number(input.shift());
    let days = 0;
    let spendDays = 0;
    while (moneyAvailable < moneyNeeded) {
        let action = input.shift();
        let money = Number(input.shift());
        days++;
        if (action == "save") {
            moneyAvailable += money;
            spendDays = 0;
        } else if (action == "spend") {
            moneyAvailable -= money;
            spendDays++;
            if (moneyAvailable < 0) {
                moneyAvailable = 0;
            }
        }
        if (spendDays == 5) {
            console.log("You can't save the money.");
            console.log(days);
            break;
        }
    }
    if (moneyAvailable >= moneyNeeded) {
        console.log(`You saved the money for ${days} days.`);
    }
}

Vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
