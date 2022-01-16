record = float(input())
distance = float(input())
onemeter = float(input())

time = distance * onemeter
additional_time = 12.5 * (distance // 15)
total_time = time + additional_time

if total_time < record:
    print(f" Yes, he succeeded! The new world record is {format(round(total_time, 2), '.2f')} seconds.")
else:
    needed = total_time - record
    print(f"No, he failed! He was {format(round(needed, 2), '.2f')} seconds slower.")
