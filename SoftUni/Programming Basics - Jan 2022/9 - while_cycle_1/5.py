total = 0
operation = input()


while operation != "NoMoreMoney":
    to_float = float(operation)
    if to_float < 0:
        print("Invalid operation!")
        break
    else:
        total += to_float
        print(f"Increase: {format(to_float, '.2f')}")
        operation = input()
        continue

final = format(total, '.2f')
print(f"Total: {format(total, '.2f')}")
