function greening(input){
    let sqprice = 7.61;
    let discount = 0.18;

    let squaremeters = Number(input[0]);
    let price = squaremeters * sqprice;
    let discountprice = price * discount;
    let finalprice = price - discountprice;

    console.log(`The final price is: ${finalprice} lv.`);
    console.log(`The discount is: ${discountprice} lv.`);
}