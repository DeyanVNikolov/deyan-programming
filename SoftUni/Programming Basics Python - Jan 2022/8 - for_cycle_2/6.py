name = input()
academy = float(input())
jury_num = int(input())

points = 0
points += academy

for i in range(0, jury_num):
    name_act = input()
    pts = float(input())
    total = (len(name_act) * pts) / 2
    points += total
    if points >= 1250.5:
        break
    else:
        continue

if points >= 1250.5:
    print(f"Congratulations, {name} got a nominee for leading role with {points:.1f}!")
else:
    print(f"Sorry, {name} you need {abs(1250.5 - points)} more!")