sea_count = int(input())
mountain_count = int(input())
profit = 0
sold = False
package = input()


while package != "Stop" or (sea_count == 0 and mountain_count == 0):
    if package == "sea":
        if sea_count > 0:
            profit += 680
            sea_count -= 1
    elif package == "mountain":
        if mountain_count > 0:
            profit += 499
            mountain_count -= 1
    if sea_count == 0 and mountain_count == 0:
        break
    package = input()

if sea_count == 0 and mountain_count == 0:
    print("Good job! Everything is sold.")
    print(f"Profit: {profit} leva.")
else:
    print(f"Profit: {profit} leva.")