poslanie = 0.60
roza = 7.20
durjatel = 3.60
karikatura = 18.20
iznenada = 22

party_price = float(input())

poslanie_count = int(input())
roza_count = int(input())
durjatel_count = int(input())
karikatura_count = int(input())
iznenadi_count = int(input())
total_count = poslanie_count + roza_count + durjatel_count + karikatura_count + iznenadi_count

price_1 = poslanie_count * poslanie
price_2 = roza_count * roza
price_3 = durjatel * durjatel_count
price_4 = karikatura * karikatura_count
price_5 = iznenadi_count * iznenada

total = price_1 + price_2 + price_3 + price_4 + price_5
if total_count >= 25:
    pre_final = total - total * 0.65
    total = total - pre_final

final1_total = total - total * 0.90
final_total = total - final1_total


if final_total >= party_price:
    print(f"Yes! {final_total - party_price:.2f} lv left.")
else:
    print(f"Not enough money! {abs(final_total - party_price):.2f} lv needed.")




