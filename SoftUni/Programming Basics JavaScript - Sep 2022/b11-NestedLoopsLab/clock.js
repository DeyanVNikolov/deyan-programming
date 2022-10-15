// Напишете функция, която отпечатва часовете в денонощието от 0:0 до 23:59, всеки на отделен ред. Часовете трябва да се изписват във формат "{час}:{минути}".

function clock() {
    for (let hour = 0; hour <= 23; hour++) {
        for (let minute = 0; minute <= 59; minute++) {
            console.log(`${hour}:${minute}`);
        }
    }
}

clock();