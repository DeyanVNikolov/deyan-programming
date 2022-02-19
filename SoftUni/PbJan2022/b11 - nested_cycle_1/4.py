first = int(input())
second = int(input())
magic = int(input())
found = False
n = 0

for one in range(first, second + 1):
    if not found:
        for two in range(first, second + 1):
            if not found:
                if one + two == magic:
                    n += 1
                    print(f"Combination N:{n} ({one} + {two} = {magic})")
                    found = True
                else:
                    n += 1
            else:
                break
    else:
        break
if not found:
    print(f"{n} combinations - neither equals {magic}")
