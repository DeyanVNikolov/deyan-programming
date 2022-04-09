needed_money = float(input())
available_money = float(input())
money = available_money
days_passed = 0
days_spend = 0

are_saved = False
while needed_money!=available_money:

    action = input()
    current_money = float(input())
    days_passed += 1
    if action == "save":
        money += current_money
        days_spend=0
    else:
        money -= current_money
        if money < 0:
            money =0
        days_spend += 1
        if days_spend >= 5:
            break

    if money >= needed_money:
        are_saved = True
        break

if are_saved:
    print(f"You saved the money for {days_passed} days.")
else:
    print("You can't save the money.")
    print(days_passed)
