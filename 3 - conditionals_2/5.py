budget = float(input())
statist = int(input())
price_of_dress = float(input())

decor = budget * 0.10
total_dress = statist * price_of_dress
if statist > 150:
    total_dress -= total_dress * 0.10

total = decor + total_dress
if total > budget:
    needed = total - budget
    print("Not enough money!")
    print(f"Wingard needs {format(round(needed, 2), '.2f')} leva more.")
else:
    remain = budget - total
    print("Action!")
    print(f"Wingard starts filming with {format(round(remain, 2), '.2f')} leva left.")

