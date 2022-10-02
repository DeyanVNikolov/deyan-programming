function SkiTrip(input) {
    let days = Number(input[0]);
    let room = input[1];
    let grade = input[2];
    let price = 0;
    let discount = 0;
    let nights = days - 1;
    if (room == "room for one person") {
        price = nights * 18;
    } else if (room == "apartment") {
        price = nights * 25;
        if (days < 10) {
            discount = price * 0.3;
        } else if (days >= 10 && days <= 15) {
            discount = price * 0.35;
        } else if (days > 15) {
            discount = price * 0.5;
        }
    } else if (room == "president apartment") {
        price = nights * 35;
        if (days < 10) {
            discount = price * 0.1;
        } else if (days >= 10 && days <= 15) {
            discount = price * 0.15;
        } else if (days > 15) {
            discount = price * 0.2;
        }
    }
    let total = price - discount;
    if (grade == "positive") {
        total += total * 0.25;
    } else if (grade == "negative") {
        total -= total * 0.1;
    }
    console.log(total.toFixed(2));
}