groups = int(input())

first = 0
second = 0
third = 0
forth = 0
fifth = 0
n = 0

for i in range(0, groups):
    number = int(input())
    if number <= 5:
        first += number
        n += number
    elif 6 <= number < 13:
        second += number
        n += number
    elif 13 <= number <= 25:
        third += number
        n += number
    elif 25 < number <= 40:
        forth += number
        n += number
    elif number > 40:
        fifth += number
        n += number

first_percent = (first / n) * 100
second_percent = (second / n) * 100
third_percent = (third / n) * 100
forth_percent = (forth / n) * 100
fifth_percent = (fifth / n) * 100

print(f"{first_percent:.2f}%")
print(f"{second_percent:.2f}%")
print(f"{third_percent:.2f}%")
print(f"{forth_percent:.2f}%")
print(f"{fifth_percent:.2f}%")
