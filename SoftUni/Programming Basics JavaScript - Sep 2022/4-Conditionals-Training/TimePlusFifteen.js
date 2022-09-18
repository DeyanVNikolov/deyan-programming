function solve3(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);
    let minutesAfter15 = minutes + 15;
    if (minutesAfter15 >= 60) {
        hour++;
        minutesAfter15 -= 60;
    }
    if (hour >= 24) {
        hour = 0;
    }
    if (minutesAfter15 < 10) {
        console.log(hour + ":0" + minutesAfter15);
    } else {
        console.log(hour + ":" + minutesAfter15);
    }
}