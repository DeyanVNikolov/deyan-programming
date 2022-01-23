month = input()
nights = int(input())

price_of_studio = 0
price_of_apt = 0

if month == "May" or month == "October":
    price_of_studio = 50
    price_of_apt = 65
elif month == "June" or month == "September":
    price_of_studio = 75.20
    price_of_apt = 68.70
elif month == "July" or month == "August":
    price_of_studio = 76
    price_of_apt = 77

final_apt = nights * price_of_apt
final_studio = nights * price_of_studio

if nights > 14:
    if month == "May" or month == "October":
        final_studio -= final_studio * 0.30
    elif month == "June" or month == "September":
        final_studio -= final_studio * 0.20
    final_apt -= final_apt * 0.10
elif nights > 7:
    if month == "May" or month == "October":
        final_studio -= final_studio * 0.05

print(f"Apartment: {final_apt:.2f} lv.")
print(f"Studio: {final_studio:.2f} lv.")
