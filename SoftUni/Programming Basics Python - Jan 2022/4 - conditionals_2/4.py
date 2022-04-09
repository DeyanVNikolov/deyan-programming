price_of_travel = float(input())
puzzles = int(input())
dolls = int(input())
bears = int(input())
minions = int(input())
trucks = int(input())

price_puzzle = 2.60
price_dolls = 3
price_bear = 4.10
price_minion = 8.20
price_truck = 2

total_order = puzzles + dolls + bears + minions + trucks

total_puzzle = puzzles * price_puzzle
total_dolls = dolls * price_dolls
total_bear = bears * price_bear
total_minion = minions * price_minion
total_truck = trucks * price_truck

total = total_puzzle + total_dolls + total_bear + total_minion + total_truck

if total_order >= 50:
    grand_total = total - total * 0.25
else:
    grand_total = total

rent = grand_total * 0.10
grand_total -= rent
remain = grand_total - price_of_travel
needed_money = price_of_travel - grand_total

if grand_total >= price_of_travel:
    print(f"Yes! {format(round(remain, 2), '.2f')} lv left.")
else:
    print(f"Not enough money! {format(round(needed_money, 2), '.2f')} lv needed.")

