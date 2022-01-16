budget = float(input())
cards = int(input())
process = int(input())
ram = int(input())

card_price = 250
total_cards = card_price * cards
process_price = (total_cards * 0.35) * process
ram_price = (total_cards * 0.10) * ram

total = total_cards + process_price + ram_price

if cards > process:
    total -= total * 0.15

if budget > total:
    remain = budget - total
    print(f"You have {format(round(remain, 2), '.2f')} leva left!")
else:
    needed = total - budget
    print(f"Not enough money! You need {format(round(needed, 2), '.2f')} leva more!")
