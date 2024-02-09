#CALCULADORA
def mostrar_menu():
    print('MENÚ DE OPCIONES \n')
    print('1. Sumar')
    print('2. Resta')
    print('3. Multiplicar')
    print('4. Dividir')
    print('5. Salir')

def sumar(lista_numero):
    suma_total = 0
    numeros_sumados = ''
    for indice in lista_numero:
        suma_total = suma_total + indice
        numeros_sumados +=str(indice) + '+'
        #con el 0:len ... -1 lo que quiere hacer es desde 0: len que cuenta todo el string y le resta un caracter 
    print('la suma de: ', lista_numero[0:len(numeros_sumados)-1], ' = ', suma_total)

def restar(lista_numero):
    resta_total = lista_numero[0]
    numeros_restados = ''
    primer_dato = str(resta_total)
    for indice in lista_numero[1:]:
        resta_total = resta_total - indice
        numeros_restados +=str(indice) + '-'
    primer_dato+= '- ' + numeros_restados
    print('la resta de: ',lista_numero, '=', resta_total)

def multiplicar(lista_numero):
    mul_total = 1
    numeros_mul = ''
    for indice in lista_numero:
        mul_total = mul_total * indice
        numeros_mul +=str(indice) + '*'
    print('la multiplicacion de: ', lista_numero[0:len(numeros_mul)-1], ' = ', mul_total)

def dividir(lista_numero):
    mul_total = 1
    numeros_div = ''
    for indice in lista_numero:
        div_total = div_total * indice
        numeros_div +=str(indice) + '*'
    print('la divicion de: ', lista_numero[0:len(numeros_div)-1], ' = ', div_total)

flag = True
flag2 = True
while flag: #primer while solo muestra el menu
    mostrar_menu()
    opcion=input('Ingrese una opcion: ')

    if opcion == '1':
        lista_numero = []
        while flag2:
            nuevo_numero = int(input('Ingrese el numero a sumar: '))
            lista_numero.append(nuevo_numero)
            seguir = input('desea continuar? SI o NO')
            # .lower vuelve todo a minuscula
            # .capitalize combierte la primera letra en mayuscula
            # .upper combiente todo en mayuscula
            if seguir.lower() == 'no':
                flag2 = False
                sumar(lista_numero)

    if opcion == '2':
        lista_numero = []
        while flag2:
            nuevo_numero = int(input('Ingrese el numero a restar'))
            lista_numero.append(nuevo_numero)
            seguir = input('desea continuar? SI o NO')
            if seguir.lower() == 'no':
                flag2 = False
                restar(lista_numero)
    
    if opcion == '3':
        lista_numero = []
        while flag2:
            nuevo_numero = int(input('Ingrese el numero a multiplicar'))
            lista_numero.append(nuevo_numero)
            seguir = input('desea continuar? SI o NO')
            if seguir.lower() == 'no':
                flag2 = False
                multiplicar(lista_numero)

    if opcion == '4':
        lista_numero = []
        while flag2:
            nuevo_numero = int(input('Ingrese el numero a dividir'))
            lista_numero.append(nuevo_numero)
            seguir = input('desea continuar? SI o NO')
            if seguir.lower() == 'no':
                flag2 = False
                dividir(lista_numero)

    if(opcion=='5'):
        break

