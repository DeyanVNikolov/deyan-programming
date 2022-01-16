naylon = 1.50
paint = 14.50
thinner = 5.00

naylon_needed = int(input())
paint_needed = int(input())
thinner_needed = int(input())
hours = int(input())

total_naylon = (naylon_needed + 2) * naylon

total_paint = (paint_needed + (0.10 * paint_needed)) * paint

total_thinner = thinner_needed * thinner

total_sum_no_workers = total_naylon + total_paint + total_thinner + 0.40
with_workers = (total_sum_no_workers * 0.30) * hours

total = total_sum_no_workers + with_workers

print(total)


