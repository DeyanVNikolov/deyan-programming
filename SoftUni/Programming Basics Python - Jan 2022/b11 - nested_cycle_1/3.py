n = int(input())
combs = 0

for one in range (0, n + 1):
    for second in range(0, n + 1):
        for third in range(0, n + 1):
            if one + second + third == n:
                combs += 1

print(combs)
