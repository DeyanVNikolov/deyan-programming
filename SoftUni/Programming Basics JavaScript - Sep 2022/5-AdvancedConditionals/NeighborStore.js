// град / продукт	coffee	water	beer	sweets	peanuts
// Sofia	0.50	0.80	1.20	1.45	1.60
// Plovdiv	0.40	0.70	1.15	1.30	1.50
// Varna	0.45	0.70	1.10	1.35	1.55



function NeighborStore(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let price = 0;

    let sofia = {
        coffee: 0.50,
        water: 0.80,
        beer: 1.20,
        sweets: 1.45,
        peanuts: 1.60
    };
    
    let plovdiv = {
        coffee: 0.40,
        water: 0.70,
        beer: 1.15,
        sweets: 1.30,
        peanuts: 1.50
    };

    let varna = {
        coffee: 0.45,
        water: 0.70,
        beer: 1.10,
        sweets: 1.35,
        peanuts: 1.55
    };

    if (city === "Sofia") {
        price = quantity * sofia[product];
    } else if (city === "Plovdiv") {
        price = quantity * plovdiv[product];
    }
    else if (city === "Varna") {
        price = quantity * varna[product];
    }

    console.log(price); 

    
}