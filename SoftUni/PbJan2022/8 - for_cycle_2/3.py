n = int(input())

first = 0
second = 0
third = 0
forth = 0
fifth = 0

for i in range(0, n):
    number = int(input())
    if number < 200:
        first += 1
    elif 200 <= number < 400:
        second += 1
    elif 400 <= number < 600:
        third += 1
    elif 600 <= number < 800:
        forth += 1
    elif number >= 800:
        fifth += 1

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
