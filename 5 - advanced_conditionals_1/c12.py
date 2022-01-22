city = input()
sells = float(input())

win = 0
valid = False

if city == "Sofia":
    if 0 <= sells <= 500:
        win = sells + (sells * 0.05)
    elif 500 < sells <= 1000:
        win = sells + (sells * 0.07)
    elif 1000 < sells <= 10000:
        win = sells + (sells * 0.08)
    elif sells > 10000:
        win = sells + (sells * 0.12)
    valid = True

if city == "Varna":
    if 0 <= sells <= 500:
        win = sells + (sells * 0.045)
    elif 500 < sells <= 1000:
        win = sells + (sells * 0.075)
    elif 1000 < sells <= 10000:
        win = sells + (sells * 0.10)
    elif sells > 10000:
        win = sells + (sells * 0.13)
    valid = True

if city == "Plovdiv":
    if 0 <= sells <= 500:
        win = sells + (sells * 0.055)
    elif 500 < sells <= 1000:
        win = sells + (sells * 0.08)
    elif 1000 < sells <= 10000:
        win = sells + (sells * 0.12)
    elif sells > 10000:
        win = sells + (sells * 0.145)
    valid = True

if sells < 0:
    valid = False

if valid:
    win = win - sells
    print(f"{win:.2f}")
else:
    print("error")
