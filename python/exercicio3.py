salario = int(input('coloque aqui o seu salario: '))

if salario > 1250:
    n1_salario = salario * 1.1
    print('seu novo salario é de %.2f' %n1_salario)
elif salario <= 1250:
    n2_salario = salario * 1.15
    print('seu novo salario é de %.2f' %n2_salario)



    