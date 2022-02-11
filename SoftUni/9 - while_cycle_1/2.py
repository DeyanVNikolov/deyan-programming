inital_name = input()
inital_password = input()
try_n = input()

while try_n != inital_password:
    try_n = input()

print(f"Welcome {inital_name}!")
