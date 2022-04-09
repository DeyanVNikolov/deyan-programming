deposit = float(input())  # deposit
month = int(input())  # months
additional_percent = float(input())
total_percent = additional_percent / 100

sum_m = deposit + month * ((deposit * total_percent) / 12)

print(sum_m)
