a = int(input('qual a distancia que voce deseja percorrer em km: '))

if a <= 200:
    b = a * 0.5
    print('o valor foi de R$ %.2f' %b)
else:
    c = 200*0.5 + ((200 - a) * 0.45)
    print('o valor foi de R$ %.2f' %c)