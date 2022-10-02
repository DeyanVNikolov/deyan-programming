function CleverLily(input) {
    let age = Number(input[0]);
    let priceWashingMachine = Number(input[1]);
    let priceToy = Number(input[2]);
    let money = 0;
    let toys = 0;
    let moneyFromBrother = 0;
    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            moneyFromBrother += 10;
            money += moneyFromBrother;
            money -= 1;
        } else {
            toys++;
        }
    }
    money += toys * priceToy;
    if (money >= priceWashingMachine) {
        console.log(`Yes! ${(money - priceWashingMachine).toFixed(2)}`);
    }
    else {
        console.log(`No! ${(priceWashingMachine - money).toFixed(2)}`);
    }

}

CleverLily(["10", "170.00", "6"]);
CleverLily(["21", "1570.98", "3"]);