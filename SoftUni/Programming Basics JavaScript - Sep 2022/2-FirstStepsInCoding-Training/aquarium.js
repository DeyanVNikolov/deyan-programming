function solve(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);
    let volume = length * width * height;
    let liters = volume * 0.001;
    let percent1 = percent * 0.01;
    let final = liters * (1 - percent1);
    console.log(final);

}

solve(["85 ",
"75 ",
"47 ",
"17 "]
)