size_x = int(input())
size_z = int(input())
pices = size_x * size_z
command = input()
number = 0


while command != "STOP":
    if command != "STOP":
        number = int(command)
    pices -= number
    if pices <= 0:
        break
    command = input()

if pices <= 0:
    print(f"No more cake left! You need {abs(pices)} pieces more.")
elif command == "STOP":
    print(f"{abs(pices)} pieces are left.")


