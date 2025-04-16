from math import ceil

PI = 3.1415

#adiquire os valores do raio e altura do cilindro
r = float(input('qual o valor do raio do cilindro: '))
h = float(input('qual o valor da altura do cilindro: '))

#calcular a area do cilindro
area_base = PI * r**2
area_lateral = h * 2 * PI * r
area_cilindro = area_base + area_lateral
print(f'area a ser pintada: {area_cilindro:.2f} m²')

litros = area_cilindro/3
print(f'qtde de litros necessarios: {litros:.2f}L')

latas = ceil (litros / 5)
print(f'qtde de latas de tinta: {latas}')

if latas == 1:
    preço = 50

if latas == 2:
    preço = 48

if latas == 3:
    preço = 46

if latas > 3:
    preço = 45

# calcular o custo
print(f'preço unitario da lata: R${preço:.2f}')
print(f'custo total: R${latas * preço:.2f}')