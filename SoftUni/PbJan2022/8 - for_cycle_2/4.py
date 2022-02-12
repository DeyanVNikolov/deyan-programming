age = int(input())
machine_price = float(input())
toy_price = int(input())

total_money = 0
total_toys = 0

birth_money = 0

first_money_for_birhday = 10

for i in range(1, age + 1):
    if i % 2 == 1:
        total_toys += 1
    elif i % 2 == 0:
        birth_money += first_money_for_birhday
        taken = birth_money - 1
        total_money += taken
        first_money_for_birhday += 10
        birth_money = 0

toy_money = total_toys * toy_price

total = toy_money + total_money

if total >= machine_price:
    print(f"Yes! {total-machine_price:.2f}")
else:
    print(f"No! {abs(total-machine_price):.2f}")
