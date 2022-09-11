function solve(input){
    let tution = Number(input[0]);
    let priceOfSneakers = tution * 0.60;
    let priceOfEquipment = priceOfSneakers * 0.80;
    let priceOfBall = priceOfEquipment / 4;
    let priceOfAccessories = priceOfBall / 5;
    let total = tution + priceOfSneakers + priceOfEquipment + priceOfBall + priceOfAccessories;
    console.log(total.toFixed(2));
}

solve(["365"])