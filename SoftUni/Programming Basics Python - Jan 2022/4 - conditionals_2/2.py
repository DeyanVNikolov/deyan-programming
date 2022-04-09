points = int(input())
bonus = 0

if points <= 100:
    bonus = 5
elif 100 < points <= 1000:
    bonus = points * 0.20
else:
    bonus = points * 0.10

if points % 2 == 0:
    bonus += 1

if points % 10 == 5:
    bonus += 2

total = bonus + points

print(bonus)
print(total)