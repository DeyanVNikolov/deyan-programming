pens = int(input())
markers = int(input())
liters = int(input())
discount = int(input())
discount_precent = discount / 100

# ЦЕНА
price_pens = 5.80
price_markers = 7.20
liters_price = 1.20

# РЕШЕНИЕ
pens_total = pens * price_pens
markers_total = markers * price_markers
liters_total = liters * liters_price

total_before = pens_total + markers_total + liters_total
total = total_before * (1 - discount_precent)
print(total)