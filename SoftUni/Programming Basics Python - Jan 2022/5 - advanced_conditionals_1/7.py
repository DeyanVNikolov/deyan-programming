hour = int(input())
day = input()

if (not (not (day == "Monday") and not (day == "Tuesday") and not (day == "Wednesday") and not (
        day == "Thursday")) or day == "Friday" or day == "Saturday") and 10 <= hour <= 18:
    print("open")
else:
    print("closed")
