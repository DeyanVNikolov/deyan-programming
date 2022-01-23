projection = input()
rows = int(input())
cols = int(input())

total_seats = rows * cols
price = 0

if projection == "Premiere":
    price = total_seats * 12
elif projection == "Normal":
    price = total_seats * 7.50
elif projection == "Discount":
    price = total_seats * 5

print(f"{price:.2f} leva")
