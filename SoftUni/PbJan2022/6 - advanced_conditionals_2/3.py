flowers = input()
count = int(input())
budget = int(input())

price = 0

if flowers == "Roses":
    price += count * 5
    if count > 80:
        price -= price * 0.10
elif flowers == "Dahlias":
    price += count * 3.80
    if count > 90:
        price -= price * 0.15
elif flowers == "Tulips":
    price += count * 2.80
    if count > 80:
        price -= price * 0.15
elif flowers == "Narcissus":
    price += count * 3
    if count < 120:
        price += price * 0.15
elif flowers == "Gladiolus":
    price += count * 2.50
    if count < 80:
        price += price * 0.20

if budget >= price:
    left = budget - price
    print(f"Hey, you have a great garden with {count} {flowers} and {left:.2f} leva left.")
else:
    needed = price - budget
    print(f"Not enough money, you need {needed:.2f} leva more.")

