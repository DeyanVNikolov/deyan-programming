function solve4(input) {
    let priceForTrip = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);
    let totalToys = puzzles + dolls + bears + minions + trucks;
    let totalProfit = puzzles * 2.60 + dolls * 3 + bears * 4.10 + minions * 8.20 + trucks * 2;
    if (totalToys >= 50) {
        totalProfit = totalProfit * 0.75;
    }
    totalProfit = totalProfit * 0.9;
    if (totalProfit >= priceForTrip) {
        console.log(`Yes! ${(totalProfit - priceForTrip).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(priceForTrip - totalProfit).toFixed(2)} lv needed.`);
    }
}