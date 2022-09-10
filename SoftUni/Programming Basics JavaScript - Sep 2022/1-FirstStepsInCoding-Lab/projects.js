// "The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."

function solve(input) {
    let architectName = input[0];
    let projects = Number(input[1]);
    let hours = projects * 3;
    console.log(`The architect ${architectName} will need ${hours} hours to complete ${projects} project/s.`);
}