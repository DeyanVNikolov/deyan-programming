// Габи иска да започне здравословен начин на живот и си е поставила за цел да върви 10 000 стъпки всеки ден. Някои дни обаче е много уморена от работа и ще иска да се прибере преди да постигне целта си. Напишете функция, която чете от масив по колко стъпки изминава тя всеки път като излиза през деня и когато постигне целта си да се изписва "Goal reached! Good job!" и колко стъпки повече е извървяла "{разликата между стъпките} steps over the goal!"
// Ако иска да се прибере преди това, тя ще въведе командата "Going home" и ще въведе стъпките, които е извървяла докато се прибира. След което, ако не е успяла да постигне целта си, на конзолата трябва да се изпише: "{разликата между стъпките} more steps to reach goal."


function solve(input) {
    let steps = 0;
    let goal = 10000;
    let index = 0;
    while (steps < goal) {
        let command = input[index];
        index++;
        if (command == "Going home") {
            let stepsToHome = Number(input[index]);
            steps += stepsToHome;
            break;
        }
        let stepsTaken = Number(command);
        steps += stepsTaken;
    }
    if (steps >= goal) {
        console.log("Goal reached! Good job!");
        console.log(`${steps - goal} steps over the goal!`);
    } else {
        console.log(`${goal - steps} more steps to reach goal.`);
    }
}

solve(["1000",
"1500",
"2000",
"6500"])
