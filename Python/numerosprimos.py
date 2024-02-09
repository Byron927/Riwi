#n=int(input("ingrese desde donde quiere iniciar "))
#m=int(input("ingrese donde quiere finalizar "))
#A=n
#B=m
#c=0
#d=0
#
#for n in range(m+1):
#    if B%A==0:
#        c+=1
#        if c==2:
#            d+=1
#            print(d)

#verificar si un numero es primo

numero=int(input('Ingresa el numero a evaluar: '))
i=1
contador_divisiones_exactas=0
while (i<=numero):
    if (numero%i==0):
        contador_divisiones_exactas+=1
    i+=1
if(contador_divisiones_exactas==2):
    print(f'el numero {numero} es primo')
else:
    print(f'el numero {numero} no es primo')
    

#numeros primos

num = int(input("Escribe un numero: "))
d=0
for i in range(2, num+1):
    for j in range(2, i):
        if i % j == 0:
            break
    else:
        print(f"{i} es primo")
       