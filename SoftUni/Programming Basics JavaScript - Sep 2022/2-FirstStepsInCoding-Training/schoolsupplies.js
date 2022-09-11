function solve(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let cleaning = Number(input[2]);
    let discount = Number(input[3]);
    let pensPrice = pens * 5.80;
    let markersPrice = markers * 7.20;
    let cleaningPrice = cleaning * 1.20;
    let totalPrice = pensPrice + markersPrice + cleaningPrice;
    let discountPrice = totalPrice * discount / 100;
    let finalPrice = totalPrice - discountPrice;
    console.log(finalPrice);
}


solve(["2 ",
"3 ",
"4 ",
"25 "]
)