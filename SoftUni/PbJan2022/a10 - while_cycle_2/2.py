fail_count = int(input())
failed = 0
has_failed = False
counter = 0
last_problem = ""
average = 0
problem = input()
while problem != "Enough":
    score = float(input())
    if score <= 4:
        failed += 1
        if failed >= fail_count:
            has_failed = True
            break
    average += score
    last_problem = problem
    problem = input()

    counter += 1
if not has_failed:
    print(f"Average score: {average/counter:.2f}")
    print(f"Number of problems: {counter}")
    print(f"Last problem: {last_problem}")
else:
    print(f"You need a break, {fail_count} poor grades.")
