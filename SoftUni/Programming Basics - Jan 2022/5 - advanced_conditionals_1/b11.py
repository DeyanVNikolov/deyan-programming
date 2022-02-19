price_work = {
    "banana": 2.50,
    "apple": 1.20,
    "orange": 0.85,
    "grapefruit": 1.45,
    "kiwi": 2.70,
    "pineapple": 5.50,
    "grapes": 3.85
}
price_end = {
    "banana": 2.70,
    "apple": 1.25,
    "orange": 0.90,
    "grapefruit": 1.60,
    "kiwi": 3.00,
    "pineapple": 5.60,
    "grapes": 4.20
}

fruit = input()
day = input()
qunatity = float(input())

price = 0
if fruit == "banana" or fruit == "apple" or fruit == "orange" or fruit == "grapefruit" or fruit == "kiwi" or fruit == "pineapple" or fruit == "grapes":
    if day == "Monday" or day == "Tuesday" or day == "Wednesday" or day == "Thursday" or day == "Friday":
        price = qunatity * price_work[fruit]
        print(f"{price:.2f}")
    elif day == "Saturday" or day == "Sunday":
        price = qunatity * price_end[fruit]
        print(f"{price:.2f}")
    else:
        print("error")
else:
    print("error")
