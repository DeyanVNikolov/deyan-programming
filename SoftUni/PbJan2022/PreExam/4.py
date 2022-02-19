student_count = int(input())

group1 = 0
group2 = 0
group3 = 0
group4 = 0
total = 0.00

for i in range(1, student_count + 1):
    grade = float(input())
    if grade >= 5.00:
        group1 += 1
        total += grade
    elif 4.00 <= grade < 5.00:
        group2 += 1
        total += grade
    elif 3.00 <= grade < 4.00:
        group3 += 1
        total += grade
    elif grade < 3.00:
        group4 += 1
        total += grade


print(f"Top students: {((group1 / student_count) * 100):.2f}%")
print(f"Between 4.00 and 4.99: {((group2 / student_count) * 100):.2f}%")
print(f"Between 3.00 and 3.99: {((group3 / student_count) * 100):.2f}%")
print(f"Fail: {((group4 / student_count) * 100):.2f}%")
print(f"Average: {(total / student_count):.2f}")
