arquivo = open ("teste.txt", "w")

for linha in range (1, 101) :
    arquivo.write (f'linha {linha}\n')
arquivo.close ()

arquivo = open ("teste.txt", "r")

for linha in arquivo.readlines () :
    print (linha, end='')
arquivo.close ()