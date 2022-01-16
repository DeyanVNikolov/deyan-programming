from math import ceil

title = input()
episode_air = int(input())
break_time = int(input())

lunch = break_time * 0.125
relax = break_time * 0.25

total_time_one = break_time - (lunch + relax)

if total_time_one >= episode_air:
    remain = total_time_one - episode_air
    print(f"You have enough time to watch {title} and left with {ceil(remain)} minutes free time.")
else:
    needed = episode_air - total_time_one
    print(f"You don't have enough time to watch {title}, you need {ceil(needed)} more minutes.")