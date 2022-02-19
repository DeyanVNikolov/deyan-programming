x = int(input())
y = int(input())
z = int(input())
cubic_meters_room = x * z * y

boxes = input()
box_num = 0

while boxes != "Done":
    if boxes != "Done":
        box_num = int(boxes)
    cubic_meters_room -= box_num
    if cubic_meters_room <= 0:
        break
    boxes = input()

if cubic_meters_room <= 0:
    print(f"No more free space! You need {abs(cubic_meters_room)} Cubic meters more.")
elif boxes == "Done":
    print(f"{cubic_meters_room} Cubic meters left.")