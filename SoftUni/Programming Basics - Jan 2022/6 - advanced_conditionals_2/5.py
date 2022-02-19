budget = float(input())
season = input()

place = ""
type_of = ""
final_price = 0

if budget <= 100:
    place = "Bulgaria"
elif budget <= 1000:
    place = "Balkans"
elif budget > 1000:
    place = "Europe"

if place == "Bulgaria" or place == "Balkans":
    if season == "summer":
        type_of = "Camp"
    elif season == "winter":
        type_of = "Hotel"
elif place == "Europe":
    type_of = "Hotel"

if place == "Bulgaria" and season == "summer":
    final_price = budget * 0.30
elif place == "Bulgaria" and season == "winter":
    final_price = budget * 0.70
elif place == "Balkans" and season == "summer":
    final_price = budget * 0.40
elif place == "Balkans" and season == "winter":
    final_price = budget * 0.80
elif place == "Europe" and (season == "winter" or season == "summer"):
    final_price = budget * 0.90

print(f"Somewhere in {place}")
print(f"{type_of} - {final_price:.2f}")
