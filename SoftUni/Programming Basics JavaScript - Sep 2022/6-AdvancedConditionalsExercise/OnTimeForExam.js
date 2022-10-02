function OnTimeForExam(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);
    let examTime = examHour * 60 + examMinute;
    let arrivalTime = arrivalHour * 60 + arrivalMinute;
    let difference = Math.abs(examTime - arrivalTime);
    let hours = Math.floor(difference / 60);
    let minutes = difference % 60;
    if (examTime == arrivalTime) {
        console.log("On time");
    } else if (examTime > arrivalTime) {
        if (difference < 30) {
            console.log("On time");
            console.log(`${difference} minutes before the start`);
        } else if (difference >= 30 && difference < 60) {
            console.log("Early");
            console.log(`${difference} minutes before the start`);
        } else if (difference >= 60) {
            console.log("Early");
            console.log(`${hours}:${minutes < 10 ? "0" + minutes : minutes} hours before the start`);
        }
    } else if (examTime < arrivalTime) {
        if (difference < 60) {
            console.log("Late");
            console.log(`${difference} minutes after the start`);
        } else if (difference >= 60) {
            console.log("Late");
            console.log(`${hours}:${minutes < 10 ? "0" + minutes : minutes} hours after the start`);
        }
    }
}


OnTimeForExam(["9", "00", "10", "30"]);