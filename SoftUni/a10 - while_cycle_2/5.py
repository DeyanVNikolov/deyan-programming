
is_enough = False
coins=0
in_stotinki =0
money = float(input())
in_stotinki = round(money*100,2)
while True:




    while in_stotinki // 200 != 0:
        coins+=1
        in_stotinki-=200
    while in_stotinki // 100 != 0:
        coins+=1
        in_stotinki-=100
    while in_stotinki // 50 != 0:
        coins+=1
        in_stotinki-=50
    while in_stotinki // 20 != 0:
        coins+=1
        in_stotinki-=20
    while in_stotinki // 10 != 0:
        coins+=1
        in_stotinki-=10
    while in_stotinki // 5 != 0:
        coins+=1
        in_stotinki-=5
    while in_stotinki // 2 != 0:
        coins+=1
        in_stotinki-=2
    while in_stotinki // 1 != 0:
        coins+=1
        in_stotinki-=1
    if in_stotinki <=0:
        break

print(coins)
