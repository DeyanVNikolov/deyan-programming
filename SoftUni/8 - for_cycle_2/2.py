import sys

num = int(input())

max_num = -sys.maxsize
summ = 0

for i in range(0, num):
    number = int(input())
    if number > max_num:
        max_num = number
    summ += number

if (summ - max_num) == max_num:
    print("Yes")
    print(f"Sum = {max_num}")
else:
    print("No")
    print(f"Diff = {abs(max_num - (summ-max_num))}")
