function solve(input){
    
    let deposit = Number(input[0]);
    let term = Number(input[1]);
    let interest = Number(input[2]);
    let interestRate = deposit * interest / 100;
    let total = deposit + term * interestRate / 12;
    console.log(total);

}