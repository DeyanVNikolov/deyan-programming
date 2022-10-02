function FishingBoat(input) {
    let budget = input[0];
    let season = input[1];
    let fishers = input[2];
    let price = 0;
    switch (season) {
        case "Spring":
            price = 3000;
            break;
        case "Summer":
        case "Autumn":
            price = 4200;
            break;
        case "Winter":
            price = 2600;
            break;
    }
    if (fishers <= 6) {
        price *= 0.9;
    } else if (fishers <= 11) {
        price *= 0.85;
    } else {
        price *= 0.75;
    }
    if (fishers % 2 == 0 && season != "Autumn") {
        price *= 0.95;
    }
    if (budget >= price) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
    }
}

FishingBoat(["3000", "Summer", "11"]);