// final total

function solve(input) {
    let dogs = Number(input[0]);
    let otherAnimals = Number(input[1]);
    let dogFood = dogs * 2.50;
    let otherFood = otherAnimals * 4;
    let total = dogFood + otherFood;
    console.log(`${total} lv.`);
}