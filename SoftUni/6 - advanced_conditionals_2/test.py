vid_chetya = input()
broi_cvetya = int(input())
budjet = int(input())
if vid_chetya == "Roses" or vid_chetya == "Dahlias" or vid_chetya == "Tulips" or vid_chetya == "Narcissus" or vid_chetya == "Gladiolus":
    if vid_chetya == "Roses":
        if broi_cvetya > 80:
            chena = broi_cvetya * 5
            chena = chena - chena * 0.1
        else:
            chena = broi_cvetya * 5
    elif vid_chetya == "Dahlias":
        if broi_cvetya > 90:
            chena = broi_cvetya * 3.80
            chena = chena - chena * 0.15
        else:
            chena = broi_cvetya * 3.80
    elif vid_chetya == "Tulips":
        if broi_cvetya > 80:
            chena = broi_cvetya * 2.80
            chena = chena - chena * 0.15
        else:
            chena = chena - chena * 2.80
    elif vid_chetya == "Narcissus":
        if broi_cvetya < 120:
            chena = broi_cvetya * 3
            chena = chena + chena * 0.15
        else:
            chena = broi_cvetya * 3
    elif vid_chetya == "Gladiolus":
        if broi_cvetya < 80:
            chena = broi_cvetya * 2.50
            chena = chena + chena * 0.2
        else:
            chena = broi_cvetya * 2.50
if budjet >= chena:
    pari = abs(budjet-chena)
    print(f'Hey, you have a great garden with {broi_cvetya} {vid_chetya} and {pari:.2f} leva left.')
elif budjet < chena:
    pari = abs(budjet - chena)
    print(f'Not enough money, you need {pari:.2f} leva more.')

