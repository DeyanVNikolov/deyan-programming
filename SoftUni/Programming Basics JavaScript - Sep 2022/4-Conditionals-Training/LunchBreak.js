function lunchbreak(input) {
    let name = input[0];
    let episode = Number(input[1]);
    let breakTime = Number(input[2]);
    let lunchTime = breakTime / 8;
    let restTime = breakTime / 4;
    let totalTime = breakTime - (lunchTime + restTime);

        if (totalTime >= episode) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(totalTime - episode)} minutes free time.`);
    } else {
        let minutes = Math.ceil(episode - totalTime);
        console.log(`You don't have enough time to watch ${name}, you need ${minutes} more minutes.`);
    }
}


lunchbreak(["Game of Thrones",
"60",
"96"])


