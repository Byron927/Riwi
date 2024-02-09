len()
#cuanta cuantos caracteres tiene un string

print()
#imprime en consola

int()
#declara numero en decimales

str()
# vuelte todo string

# DECLARANDO UNA FUNCION
def saludar(nombre):
    print('hola a todos soy', nombre)

#invocar funcion
saludar('leandro')

def saludar(nombre)
    return 'hola a todos soy' + nombre

saludo = saludar('Keiber')
print(saludo + 'terry')

#varios parametros en una funcion

def saludar(nombre, ciudad)
    #el '''return''' es para retornar a la fincion que se esta programando
    return 'hola a todos soy' + nombre + 'y soy de ' + ciudad

saludo = saludar('Keiber','Cucuta')
print(saludo)

#CALCULADORA
def mostrar_menu():
    print('MENÚ DE OPCIONES \n')
    print('1. Sumar')
    print('2. Resta')
    print('3. Multiplicar')
    print('4. Dividir')
    print('5. Salir')

def sumar(lista_numero)
    suma_total = 0
    numeros_sumados = ''
    for indice in lista_numero:
        suma_total = suma_total + indice
        numeros_sumados +=str(indice) + '+'
        #con el 0:len ... -1 lo que quiere hacer es desde 0: len que cuenta todo el string y le resta un caracter 
    print('la suma de: ', lista_numero[0:len(numeros_sumados)-1], ' = ', suma_total)

flag = True
flag2 = True
while flag: #primer while solo muestra el menu
    mostrar_menu()
    opcion=input('Ingrese una opcion: ')

    if opcion == '1':
        lista_numero = []
        
    else: 
         print('Opcion invalida')
         
        while flag2:
            nuevo_numero = int(input('Ingrese el numero a sumar: '))
            lista_numero.append(nuevo_numero)
            seguir = input('desea continuar? SI o NO')
            #.lower vuelve todo a minuscula
            #.capitalize combierte la primera letra en mayuscula
            #.upper combiente todo en mayuscula
            if seguir.lower == 'no':
                flag2 = False
                sumar(lista_numero)
                

    if(opcion=='5')
    break "esto es una prueba"

