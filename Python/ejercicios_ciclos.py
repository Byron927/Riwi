# - Imprimir numero del 1 al n
numero=int(input('ingrese un numero: '))
for variable in range (1,numero+1):
    print(variable)

# - sumar numeros del 1 al n
numero=int(input('ingrese un numero: '))
suma=0
for i in range (1,numero+1):
    suma+=i
print(int(suma))

#def tabla_mult_53(tabla,rango):
# - imprimir la tabla de multiplicar del 53
tabla=int(input('Ingresa la tabla que desea octener: '))
rango=int(input('Ingrese el rango de la tabla: '))
for i in range(1,rango+1):
        print(tabla,'x',i,'=',tabla*i)
    
# - imprimir numero pares del 1 al 20   
nx=int(input('ingrese un numero: '))
print(1)
for variable in range (2,nx+1,2):
    print(variable)
    
# - escribe un programa que cuente las vocales de una letra
#https://www.youtube.com/watch?v=8eMOS3yzRkM
texto=input('ingresa una frase: ')
vocales='aeiouAEIOU'
contador=0
for i in texto:
    if i in vocales:
        contador+=1
print(f'la frase tiene {contador} vocales')

# - escribir un programa que muestre cuantas palabras tiene una oracion ingresada por el usuario
texto=input('ingresa una frase: ')
palabras=' '
contador=1
for i in texto:
    if i in palabras:
        contador+=1
print(f'la frase tiene {contador} palabras')

# - escribe un programaque muestre cuantos numeros pares hay de 4 al 200
desde=int(input('ingrese el numero de inicio: '))
final=int(input('ingrese el numero final: '))
contador=0
for variable in range (desde,final+1,2):
    if variable%2==0:
        contador+=1
total=contador
print(total)

# - escribe un programa donde el usuario pueda ver un menu, seleccionar una opcion,
# si la opcion es 1 el usuario podra sumar dos numeros que el desee, 
# si es dos multiplicar, si es tres dividir, si es 4 restar, si es 5 finalizar
while True:
    print('''Hola Usuario!
1: Sumar dos numeros
2: Multiplicar dos numeros
3: Dividir dos numeros
4: Restar dos numeros
5: Salir''')
    opcion=int(input('Elije una opcion: '))
    if opcion==1:
         numero1=int(input('Ingresa el primer valor: '))
         numero2=int(input('Ingresa el segundo valor: '))
         print(f'La suma de {numero1} + {numero2} es igual a: {numero1+numero2}')
    elif opcion==2:
         numero1=int(input('Ingresa el primer valor: '))
         numero2=int(input('Ingresa el segundo valor: '))
         print(f'La resta de {numero1} - {numero2} es igual a: {numero1-numero2}')
    elif opcion==3:
         numero1=int(input('Ingresa el primer valor: '))
         numero2=int(input('Ingresa el segundo valor: '))
         print(f'La multiplicacion de {numero1} * {numero2} es igual a: {numero1*numero2}')
    elif opcion==4:
         numero1=int(input('Ingresa el primer valor: '))
         numero2=int(input('Ingresa el segundo valor: '))
         print(f'La divicion de {numero1} entre {numero2} es igual a: {numero1/numero2}')
    elif opcion==5:
         print('¿Seguro desea salir? s/n')
         respuesta=input()
         if respuesta=='s':
             print('bye')
             break
         elif respuesta=='n':
             continue
    else: 
         print('Opcion invalida')

#secuencia fibonacci
n=int(input('ingrese un numero: '))
b=1
a=0
for variable in range (1,n+1):
    c = a + b
    a = b
    b = c
    print(b)

# - escribe un programa que muestre las tablas de multiplicar del 0 al 10 hasta el rango de 10
fin2=int(10) 
for j in range(11):
    print('tabla del: ',j)
    for i in range(fin2+1):
        print(int(j),'x',i,'=',j*i)
    #dar un salto de liena en la impresion (tabla de comandos/ejecucion codigo)
    print('\n')







