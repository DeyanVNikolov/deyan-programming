budget = int(input())
season = input()
ribar = int(input())

price_of_boat = 0

if season == "Spring":
    price_of_boat += 3000
elif season == "Summer" or season == "Autumn":
    price_of_boat += 4200
elif season == "Winter":
    price_of_boat += 2600

final_price = int

if ribar <= 6:
    final_price = price_of_boat - (price_of_boat * 0.10)
elif 7 <= ribar <= 11:
    final_price = price_of_boat - (price_of_boat * 0.15)
elif ribar >= 12:
    final_price = price_of_boat - (price_of_boat * 0.25)

if ribar % 2 == 0 and season != "Autumn":
    final_price -= final_price * 0.05

if budget >= final_price:
    left = budget - final_price
    print(f"Yes! You have {left:.2f} leva left.")
else:
    needed = final_price - budget
    print(f"Not enough money! You need {needed:.2f} leva.")
