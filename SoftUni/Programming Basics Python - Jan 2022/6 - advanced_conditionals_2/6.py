num1 = int(input())
num2 = int(input())
operator = input()

result = 0
type_of = ""
if operator == "+" or operator == "-" or operator == "*":
    if operator == "+":
        result = num1 + num2
    elif operator == "*":
        result = num1 * num2
    elif operator == "-":
        result = num1 - num2
    if result % 2 == 0:
        type_of = "even"
    else:
        type_of = "odd"
    print(f"{num1} {operator} {num2} = {result} - {type_of}")

elif operator == "/":
    if num2 != 0:
        result = num1 / num2
        print(f"{num1} / {num2} = {result:.2f}")
    else:
        print(f"Cannot divide {num1} by zero")
elif operator == "%":
    if num2 != 0:
        result = num1 % num2
        print(f"{num1} % {num2} = {result}")
    else:
        print(f"Cannot divide {num1} by zero")

