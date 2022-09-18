function solve5(input) {
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let priceForClothes = Number(input[2]);
    let decor = budget * 0.1;
    let clothes = statists * priceForClothes;
    if (statists > 150) {
        clothes = clothes * 0.9;
    }
    let total = decor + clothes;
    if (total > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(total - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - total).toFixed(2)} leva left.`);
    }
}