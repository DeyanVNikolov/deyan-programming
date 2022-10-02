function TreckingMania(input) {
    let groups = Number(input[0]);
    let i = 1;
    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let total = 0;
    for (i; i <= groups; i++) {
        let people = Number(input[i]);
        total += people;
        if (people <= 5) {
            musala += people;
        }
        if (people >= 6 && people <= 12) {
            monblan += people;
        }
        if (people >= 13 && people <= 25) {
            kilimanjaro += people;
        }
        if (people >= 26 && people <= 40) {
            k2 += people;
        }
        if (people >= 41) {
            everest += people;
        }
    }
    console.log(`${(musala / total * 100).toFixed(2)}%`);
    console.log(`${(monblan / total * 100).toFixed(2)}%`);
    console.log(`${(kilimanjaro / total * 100).toFixed(2)}%`);
    console.log(`${(k2 / total * 100).toFixed(2)}%`);
    console.log(`${(everest / total * 100).toFixed(2)}%`);
}

TreckingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);