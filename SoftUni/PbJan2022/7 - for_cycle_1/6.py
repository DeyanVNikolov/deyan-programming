word = input()

summ = 0
for letter in word:
    if letter == "a":
        summ += 1
    elif letter == "e":
        summ += 2
    elif letter == "i":
        summ += 3
    elif letter == "o":
        summ += 4
    elif letter == "u":
        summ += 5

print(summ)
