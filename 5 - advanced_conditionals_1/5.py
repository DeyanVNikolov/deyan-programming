price_sofia = {
    "coffee": 0.50,
    "water": 0.80,
    "beer": 1.20,
    "sweets": 1.45,
    "peantus": 1.60
}
price_plovdiv = {
    "coffee": 0.40,
    "water": 0.70,
    "beer": 1.15,
    "sweets": 1.30,
    "peantus": 1.50
}
price_varna = {
    "coffee": 0.45,
    "water": 0.70,
    "beer": 1.10,
    "sweets": 1.35,
    "peantus": 1.55
}

food = input()
city = input()
quantity = float(input())

price = 0

if food == "coffee":
    if city == "Varna":
        price = quantity * price_varna["coffee"]
    if city == "Plovdiv":
        price = quantity * price_plovdiv["coffee"]
    if city == "Sofia":
        price = quantity * price_sofia["coffee"]
elif food == "water":
    if city == "Varna":
        price = quantity * price_varna["water"]
    if city == "Plovdiv":
        price = quantity * price_plovdiv["water"]
    if city == "Sofia":
        price = quantity * price_sofia["water"]
elif food == "beer":
    if city == "Varna":
        price = quantity * price_varna["beer"]
    if city == "Plovdiv":
        price = quantity * price_plovdiv["beer"]
    if city == "Sofia":
        price = quantity * price_sofia["beer"]
elif food == "sweets":
    if city == "Varna":
        price = quantity * price_varna["sweets"]
    if city == "Plovdiv":
        price = quantity * price_plovdiv["sweets"]
    if city == "Sofia":
        price = quantity * price_sofia["sweets"]
elif food == "peanuts":
    if city == "Varna":
        price = quantity * price_varna["peantus"]
    if city == "Plovdiv":
        price = quantity * price_plovdiv["peantus"]
    if city == "Sofia":
        price = quantity * price_sofia["peantus"]

print(price)
