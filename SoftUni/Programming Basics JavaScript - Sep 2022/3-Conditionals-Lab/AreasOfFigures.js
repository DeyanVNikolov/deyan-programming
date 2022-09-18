function solve(input) {
    let figure = input[0];
    if (figure == "square") {
        let side = Number(input[1]);
        console.log(side * side);
    } else if (figure == "rectangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        console.log(sideA * sideB);
    } else if (figure == "circle") {
        let radius = Number(input[1]);
        console.log(Math.PI * radius * radius);
    } else if (figure == "triangle") {
        let side = Number(input[1]);
        let height = Number(input[2]);
        console.log(side * height / 2);
    }
}