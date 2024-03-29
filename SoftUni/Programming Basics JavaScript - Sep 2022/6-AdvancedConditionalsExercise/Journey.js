function Journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let type = "";
    let price = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season == "summer") {
            price = budget * 0.3;
            type = "Camp";
        } else {
            price = budget * 0.7;
            type = "Hotel";
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season == "summer") {
            price = budget * 0.4;
            type = "Camp";
        } else {
            price = budget * 0.8;
            type = "Hotel";
        }
    } else {
        destination = "Europe";
        price = budget * 0.9;
        type = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${price.toFixed(2)}`);
}