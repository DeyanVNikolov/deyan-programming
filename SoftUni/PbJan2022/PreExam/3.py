count = int(input())
points = float(input())
season = input()
place = input()

total = 0

if place == "Bulgaria":
    total = points * count
    if season == "summer":
        total = total - total * 0.05
    elif season == "winter":
        total = total - total * 0.08
elif place == "Abroad":
    mid = (points * count)
    total = mid + (mid * 0.50)
    if season == "summer":
        total = total - total * 0.1
    elif season == "winter":
        total = total - total * 0.15

after_return = total * 0.75

print(f"Charity - {after_return:.2f}")
print(f"Money per dancer - {((total - after_return) / count):.2f}")
