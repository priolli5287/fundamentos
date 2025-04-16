a = int(input("Lado a: "))
b = int(input("Lado b: "))
c = int(input("Lado c: "))

if (a < b + c) and (b < a + c) and (c < a + b):
    if (a == b) and ( b == c):
        print("Triangulo equilatero")
    elif (a == b) or (a == c) or (b == c):
            print("Triangulo isosceles")
    else:
            print("Triangulo escaleno")
else:
    print(" N é um Triangulo")
