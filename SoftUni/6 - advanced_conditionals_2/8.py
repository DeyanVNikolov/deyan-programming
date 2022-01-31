hour_of_exam = int(input())
minute_of_exam = int(input())
hour_of_arrival = int(input())
minute_of_arrival = int(input())

time_of_exam = (hour_of_exam * 60) + minute_of_exam
time_of_arrival = (hour_of_arrival * 60) + minute_of_arrival

arrival = ""

if time_of_exam < time_of_arrival:
    arrival = "Late"

elif (time_of_exam - time_of_arrival <= 30) and (time_of_exam - time_of_arrival > 0):
    arrival = "On Time with min"
elif time_of_arrival == time_of_exam:
    arrival = "On Time"
elif time_of_exam - time_of_arrival > 30:
    arrival = "Early"

if arrival == "Late":
    print("Late")
    hour_late = 0
    minute_late = 0
    late_by = time_of_arrival - time_of_exam
    if late_by >= 60:
        minute_late = late_by % 60
        hour_late = (late_by - minute_late) / 60
        if minute_late >= 10:
            print(f"{hour_late:.0f}:{minute_late} hours after the start")
        else:
            minute_z = str(minute_late)
            print(f"{hour_late:.0f}:{minute_z.zfill(2)} hours after the start")
    else:
        print(f"{late_by} minutes after the start")
elif arrival == "On Time":
    print("On Time")
elif arrival == "On Time with min":
    print("On Time")
    early_with = time_of_exam - time_of_arrival
    if early_with >= 60:
        minute_early = early_with % 60
        hour_early = (early_with - minute_early) / 60
        if minute_early >= 10:
            print(f"{hour_early:.0f}:{minute_early} hours before the start")
        else:
            minute_z = str(minute_early)
            print(f"{hour_early:.0f}:{minute_z.zfill(2)} hours before the start")
    else:
        print(f"{early_with} minutes before the start")
elif arrival == "Early":
    print("Early")
    early_with = time_of_exam - time_of_arrival
    if early_with >= 60:
        minute_early = early_with % 60
        hour_early = (early_with - minute_early) / 60
        if minute_early > 10:
            print(f"{hour_early:.0f}:{minute_early} hours before the start")
        else:
            minute_z = str(minute_early)
            print(f"{hour_early:.0f}:{minute_z.zfill(2)} hours before the start")
    else:
        print(f"{early_with} minutes before the start")
