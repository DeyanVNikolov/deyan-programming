first_range = int(input())
second_range = int(input())
third_range = int(input())

first_num = 1
second_num = 1
third_num = 1

first_cond = False
second_cond = False
third_cond = False

for one in range(1, first_range + 1):
    for two in range(1, second_range + 1):
        for three in range(1, third_range + 1):
            if one % 2 == 0:
                first_num = one
                first_cond = True
            if two == 2 or two == 5 or two == 7 or two == 3:
                second_num = two
                second_cond = True
            if three % 2 == 0:
                third_num = three
                third_cond = True

            if first_cond == True and second_cond == True and third_cond == True:
                print(f"{first_num} {second_num} {third_num}")
                first_cond = False
                second_cond = False
                third_cond = False
            else:
                first_cond = False
                second_cond = False
                third_cond = False
                continue
