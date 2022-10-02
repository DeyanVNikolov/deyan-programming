function NewHouse(input) {
    let typeFlowers = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;

    switch (typeFlowers) {
        case "Roses":
            price = flowersCount * 5;
            if (flowersCount > 80) {
                price *= 0.9;
            }
            break;
        case "Dahlias":
            price = flowersCount * 3.8;
            if (flowersCount > 90) {
                price *= 0.85;
            }
            break;
        case "Tulips":
            price = flowersCount * 2.8;
            if (flowersCount > 80) {
                price *= 0.85;
            }
            break;
        case "Narcissus":
            price = flowersCount * 3;
            if (flowersCount < 120) {
                price *= 1.15;
            }
            break;
        case "Gladiolus":
            price = flowersCount * 2.5;
            if (flowersCount < 80) {
                price *= 1.2;
            }
            break;
    }

    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${typeFlowers} and ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
    }
}