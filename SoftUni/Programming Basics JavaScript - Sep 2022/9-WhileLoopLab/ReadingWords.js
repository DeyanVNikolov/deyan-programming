// Напишете функция, която чете елементите на масив, докато не получи командата "Stop".

function solve(input) {
    let index = 0;
    let command = input[index];
    while (command !== "Stop") {
        console.log(command);
        index++;
        command = input[index];
    }
    }

solve(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);