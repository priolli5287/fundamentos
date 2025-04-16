a = int(input('que ano estamos: '))
b = int(input('que ano voce nasceu: '))
c = a-b
print(f'voce tem {c} anos')
if c >= 18:
    print('voce pode tirar CNH')
else:
    print('voce é menor de idade')