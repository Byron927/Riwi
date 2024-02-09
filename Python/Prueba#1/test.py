def mostrar_menu_principal():
    print('\n ----- MENU PRINCIPAL -----\n')
    print('\n1. <Riwi> \n')
    print('\n2. Premiacion Coders \n')
    print('\n3. Salir ')

def mostrar_menu1():

    print('Menu de Opciones')
    print('1 .- Registrar Trainer')
    print('2 .- Registrar Coders')
    print('3 .- Retornar')

def mostrar_menu2():

    print('Menu Premiaciones')
    print('1.- Clasificacion Coders')
    print('2.- Retornar')
    
def registro_trainer(trainer):
    nombreT=input('Ingrese el nombre del Trainer: ')
    grupoT=input('Ingrese el grupo del Trainer: ').upper()        
    trainer = (f'{nombreT} {grupoT}')
    print('\nEl Trainer fue ingresado con exito.')

def agregar_coders(codersA,codersB,codersC):

    nombre = input('ingrese el nombre del coder: ')
    mes_ingreso = input('ingrese el mes de ingreso del coder: ')
    grupo = input('ingrese el grupo del coder: ').upper(    )
    inasistencia = input('ingrese la cantidad de inasistencia del coder: ')
    edad = input('ingrese la edad del coder: ')
    talleres = input('ingrese la cantidad de talleres del coder: ')
    participaciones = input('ingrese la cantidad de participaciones del coder: ')
    nota_test_nivelacion = input('ingrese la la nota del test de nivelacion del coder: ')
    coder = {'nombre': nombre,
    'mes': mes_ingreso,
    'grupo': grupo.upper,
    'inasistencia':float(inasistencia),
    'edad':float(edad),
    'talleres':float(talleres),
    'participaciones':float(participaciones),
    'nota_test_nivelacion':float(nota_test_nivelacion)
    }
    if grupo =='A':
        codersA.append(coder)
        print('se agrego el coder con exito al grupo A')
        
    elif grupo == 'B':
        codersB.append(coder)
        print('se agrego el coder con exito al grupo B')
        
    elif grupo == 'C':
        codersC.append(coder)
        print('se agrego el coder con exito al grupo C')

def mostrar_informacion(trainer,codersA,codersB,codersC):
    print('\n---   ---   Listas   ---   ---\n')
    print('1. Listar Grupo')
    print('2. Menos inasistencias')
    print('3. Listar Mayores de edad')
    print('4. Listar Menores de edad')
    print('5. Listar Coder con mas talleres entregados')
    print('6. Listar Coder con mas participaciones en clase')
    print('7. Listar ')



def main():

    trainer=''
    codersA=[]
    codersB=[]
    codersC=[]

    while True:
        mostrar_menu_principal()
        opcion=int(input('Ingrese una opcion: '))
        if opcion == 1:
            flag=True
            while flag:
                mostrar_menu1()
                opcion1 = int(input('Ingrese una opcion: '))
                if (opcion1==1):
                    registro_trainer(trainer)
                  
                elif (opcion1==2):
                        agregar_coders(codersA,codersB,codersC)
                elif(opcion1==3):
                    flag=False
        elif (opcion==2):
            while True:
                mostrar_menu2()
                opcion2 = int(input('Ingrese una opcion: '))
                if (opcion2==1):
                    mostrar_informacion(trainer,codersA,codersB,codersC)

                elif (opcion2==2):
                    break
            
            
        elif (opcion==3):
            print('\n Bye \n')
            break
        
    
main()