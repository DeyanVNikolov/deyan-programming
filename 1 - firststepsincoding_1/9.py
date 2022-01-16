base_price = 7.61
discount = 0.18

square_m = float(input())
price_before = square_m * base_price
discount = price_before * discount
final_price = price_before - discount

print(f"The final price is: {final_price} lv.")
print(f"The discount is: {discount} lv.")
