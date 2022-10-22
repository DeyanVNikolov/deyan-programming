function solve(input) {
    let partyPrice = Number(input.shift());
    let loveLetters = Number(input.shift());
    let roses = Number(input.shift());
    let keyholders = Number(input.shift());
    let caricatures = Number(input.shift());
    let luckySurprises = Number(input.shift());
    let totalSum = loveLetters * 0.60 + roses * 7.20 + keyholders * 3.60 + caricatures * 18.20 + luckySurprises * 22;
    let totalItems = loveLetters + roses + keyholders + caricatures + luckySurprises;
    if (totalItems >= 25) {
        totalSum = totalSum - totalSum * 0.35;
    }
    let hosting = totalSum * 0.10;
    let totalMoney = totalSum - hosting;
    if (totalMoney >= partyPrice) {
        console.log(`Yes! ${(totalMoney - partyPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(partyPrice - totalMoney).toFixed(2)} lv needed.`);
    }
}

