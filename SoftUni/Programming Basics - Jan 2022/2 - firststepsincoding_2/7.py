pileshko = 10.35
fish = 12.40
vegetariansko = 8.15

pile_needed = int(input())
fish_needed = int(input())
vegy = int(input())

pile_total = pile_needed * pileshko
fish_total = fish_needed * fish
vegy_total = vegy * vegetariansko

total_food = pile_total + fish_total + vegy_total

dessert = (total_food * 0.20)

total = total_food + dessert + 2.50

print(total)