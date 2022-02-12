import sys

min_num = -sys.maxsize
operation = input()

while operation != "Stop":
    to_int = int(operation)
    if to_int > min_num:
        min_num = to_int
    operation = input()

print(min_num)