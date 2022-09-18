function solve6(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timeForMeter = Number(input[2]);
    let time = distance * timeForMeter;
    let delay = Math.floor(distance / 15) * 12.5;
    time += delay;
    if (time < record) {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(time - record).toFixed(2)} seconds slower.`);
    }
}