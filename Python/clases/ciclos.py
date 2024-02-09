#(comienza,finaliza antes de, pasos)
range(0,10,2)
#(comienza 0, finaliza antes de 5, pasos 1)
range(5)
#(comienza 2, finaliza antes de 5, pasos 1)
range(2,5)

#
for variable in range (0,10,2):
    print(variable)

#while: este se repetira mientras cumpla la condicion 
#while condicion: 
#break: palabra reservada para romper el ciclo

#cuando se va asignar un valor numerico por medio de input se debe definir la variable antes del input y depues del igual    
numero=int(input('ingrese un valor: '))
for i in range(2,101,2):
    print(numero, 'x', i,'=',numero*i)
    
numero2=int(input('ingrese un valor'))
fin=int(input('hasta que numero deseas el resultado?: '))
for i in range (1,fin+1):
    print(numero2,'x',i,'=',numero2*1)
  
fin2=int(input('hasta que numero')) 

for j in range(11):
    print('tabla del: ',j)
    for i in range(fin2+1):
        print(int(j),'x',i,'=',j*i)
    #dar un salto de liena en la impresion (tabla de comandos/ejecucion codigo)
    print('\n')
    

#ejercicios
# - Imprimir numero del 1 al n
# - sumar numeros del 1 al n
# - imprimir la tabla de multiplicar del 53
# - contar cuantes veces aparece una letra en una cadena
# - imprimir numero pares del 1 al 20
# - escribe un programa que cuente las vocales de una letra
# - escribir un programa que muestre cuantas palabras tiene una palabra ingresada por el usuario
# - escribe un programaque muestre cuantos numeros pares hay de 4 al 200
# - escribe un programa donde el usuario pueda ver un menu, seleccionar una opcion,
# si la opcion es 1 el usuario podra sumar dos numeros que el desee, 
# si es dos multiplicar, si es tres dividir, si es 4 restar, si es 5 finalizar
# - escribe un programa que muestre las tablas de multiplicar del 0 al 10 hasta el rango de 10