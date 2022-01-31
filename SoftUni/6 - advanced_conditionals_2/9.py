price_for_one = 18
price_of_apt = 25
price_of_president = 35

days = int(input())
type_of = input()
grade = input()

nights = days - 1
before_price = 0
discount = 0

if type_of == "room for one person":
    before_price = nights * price_for_one
elif type_of == "apartment":
    before_price = nights * price_of_apt
    if nights < 10:
        discount = 30
    elif 10 <= nights <= 15:
        discount = 35
    elif nights > 15:
        discount = 55
elif type_of == "president apartment":
    before_price = nights * price_of_president
    if nights < 10:
        discount = 10
    elif 10 <= nights <= 15:
        discount = 15
    elif nights > 15:
        discount = 20

price_before_grade = before_price - (before_price * (discount / 100))

total_price = 0

if grade == "positive":
    total_price = price_before_grade + (price_before_grade * 0.25)
elif grade == "negative":
    total_price = price_before_grade - (price_before_grade * 0.10)

print(f"{total_price:.2f}")