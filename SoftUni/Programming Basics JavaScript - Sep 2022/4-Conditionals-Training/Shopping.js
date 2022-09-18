function shopping(input) {
    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);
    let videoCardPrice = 250;
    let videocardfinal = videoCards * videoCardPrice;
    let processorPrice = videocardfinal * 0.35;
    let ramPrice = videocardfinal * 0.10;

    let total = videocardfinal + (processorPrice * processors) + (ramPrice * ram);
    if (videoCards > processors) {
        total = total * 0.85;
    }
    if (total <= budget) {
        console.log(`You have ${(budget - total).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva more!`);
    }
}

shopping((["900",
"2",
"1",
"3"])
)