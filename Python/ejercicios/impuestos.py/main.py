


def mostrar_menu_P ():
    
    print('\nMENU PRINCIPAL\n')
    print('1.- Ingresar salario mensual: \n')
    print('2.- Ingresar gastos mensuales: \n')
    print('3.- Listar gastos mensuales \n')
    print('4.- Actualizar gastos\n')
    print('5.- Impuestos sobre gastos: \n')
    print('6.- Impuestos sobre salario: \n')
    print('7.- Total Impuestos a pagar: \n')
    print('8.- Salario Neto libre: \n')
    
    print('9.- ¿Desea Salir? S/N: \n')
    
def agregar_gastos_mensuales(gastos_mensuales):
    try:
        nombre=input('Ingrese el nombre de la categoria: ').capitalize()
        valance=0
        
        gasto={'nombre':nombre,'valor':int(valance)}
        gastos_mensuales.append(gasto)
        print(gastos_mensuales)
        print(gasto)
        
    except:
        print('error, valor no valido')

def listar_gastos(gastos_mensuales):
    if not gastos_mensuales:
        print('no hay gastos mensuales\n')
    else:
        print('\nlista de gastos')
    
        for i, gasto in enumerate(gastos_mensuales):
            print(i, '.-', gasto['nombre'],'$', gasto['valor'])

def actualizar_gastos(gastos_mensuales):
    listar_gastos(gastos_mensuales)
    if not gastos_mensuales:
        return
    else:
        try:
            indice = int(input('ingrese el indice del gasto a modificar:'))
            if(indice <0 or indice > len(gastos_mensuales)):
                print('el indice no exite.')
            else:
                valor=int(input('Ingrese el nuevo gasto: '))
                gastos_mensuales[indice]['valor']+=valor
        except:
            print('error, valor no valido')
            
def impu_gastos(gastos_mensuales,imp_gastos):
    j=0
    for i in gastos_mensuales:
        j+=i['valor']
        imp_gastos=j*0.05
    print(f'El total de impuestos sobre los gastos es igual a $ {imp_gastos}')
    
def impu_salario(salario):
    if float(salario)<3000:
        print(salario)
        i=0.1
        print(f'El total de impuestos sobre el salario es igual a $ {salario*i}')
        
    elif float(salario)>=3000 and float(salario)<6000:
        print(salario)
        i=0.2
        print(f'El total de impuestos sobre el salario es igual a $ {salario*i}')
    
    elif float(salario)>=6000:
        i=0.3
        print(salario)
        print(f'El total de impuestos sobre el salario es igual a $ {salario*i}')           
    
def main():
    gastos_mensuales=[]
    salario=0
    imp_salario=0
    imp_gastos=0
    while True:
        mostrar_menu_P()
        opcion_mp=int(input('Elija una opcion: '))
        if opcion_mp==1:
            salario+=float(input('Ingrese el salario mensual: '))
            # registro_salario(salario)
        elif opcion_mp==2:
            agregar_gastos_mensuales(gastos_mensuales)
        elif opcion_mp==3:
            listar_gastos(gastos_mensuales)
        elif opcion_mp==4:
            actualizar_gastos(gastos_mensuales)
        elif opcion_mp==5:
            impu_gastos(gastos_mensuales,imp_gastos)
        elif opcion_mp==6:
            print(salario)
            
            if float(salario)<3000:
                print(salario)
                i=0.1
                imp_salario=salario*i
                print(f'El total de impuestos sobre el salario es igual a $ {imp_salario}')
        
            elif float(salario)>=3000 and float(salario)<6000:
                print(salario)
                i=0.2
                imp_salario=salario*i
                print(f'El total de impuestos sobre el salario es igual a $ {imp_salario}')
    
            else:
                i=0.3
                imp_salario=salario*i
                print(salario)
                print(f'El total de impuestos sobre el salario es igual a $ {imp_salario}')
                
        elif opcion_mp==7:
            print(f'El total de impuestor a pagar es igual a $ {imp_salario+imp_gastos}')
            
        elif opcion_mp==8:
            print(f'El total neto libre es de $ {salario-imp_salario-imp_gastos}')
        
        elif opcion_mp==9:
            resp=input('S/N: ').lower()
            while True:
                if resp=='s':
                    break

main()

    