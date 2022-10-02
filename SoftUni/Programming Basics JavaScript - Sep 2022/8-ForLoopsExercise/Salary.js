function Salary(input) {
    let n = Number(input[0]);
    let salary = Number(input[1]);
    let total = 0;
    for (let i = 2; i <= n + 1; i++) {
        let site = input[i];
        if (site === "Facebook") {
            salary -= 150;
        } else if (site === "Instagram") {
            salary -= 100;
        } else if (site === "Reddit") {
            salary -= 50;
        }
        if (salary <= 0) {
            console.log("You have lost your salary.");
            break;
        }
    }
    if (salary > 0) {
        console.log(salary);
    }
}

Salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);

Salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);