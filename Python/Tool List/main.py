def listar_tareas_pendientes(tareas_pendientes):
    if not listar_tareas_pendientes:
        print('No hay tareas pendientes. \n')
    else:
        print('\nTareas pendientes\n ')

        for indice, actividad in enumerate(listar_tareas_pendientes):
            print(indice,' - ' actividad['Descrición'], ' - ' actividad['Lugar'], ' - ' actividad['Hora'], ' - ' actividad['Realizada'])

def listar_tareas_completadas(tareas_completadas):            
    if not listar_tareas_completadas:
        print('No hay tareas completadas. \n')
    else:
        print('\nTareas completadas\n ')

        for indice, actividad in enumerate(listar_tareas_completadas):
            print(indice,' -'actividad['Descrición'],'-'actividad['Lugar'],'-'actividad['Hora'],'-'actividad['Realizada'])

def agregar_tareas(tareas_pendientes)
    while True:
        try:
            Descrición=input('Ingrese la actividad: ')
            Lugar=input('Ingrese el lugar de la actividad: ')
            Hora=input('Ingrese el hora de la actividad: ')
            Realizada = False
            actividad = {'Descrición' : Descrición, 'Lugar' : Lugar, 'Hora' : Hora, 'Realizada' :Realizada}
            tareas_pendientes.append(actividad)
            print('\nLa tarea se agrego correctamente')
            break
        except:
            print('Error, ingrese un valor valido')

def actualizar_tareas(tareas_pendientes)
    listar_tareas_pendientes(tareas_pendientes)
    if not tareas_pendientes:
        return:
    else:
        try:
            indice = int(input('Ingrese el indice de la tarea que desea actualizar'))
            if (indice<0 or indice>(len(listar_tareas_pendientes))):
                print('el indice no exite')
            else:
                Descrición = input('Ingrese la actividad: ')
                Lugar = input('Ingrese el lugar de la actividad: ')
                Hora = input('Ingrese el hora de la actividad: ')
                Realizada = input('Ingresi la actividad se realizo: S/N')
                if Realizada.upper() =='S':
                    Realizada = True
                else:
                    Realizada = False
                actividad = {'Descrición' : Descrición, 'Lugar' : Lugar, 'Hora' : Hora, 'Realizada' :Realizada}





def mostrar_menu():
    input('Presiona ENTER para continuar')
    print('-------MENÚ DE OPCIONES-------\n')
    print('1 .- Listar tareas pendientes\n')
    print('2.- Listar tareas completadas\n')
    print('3.- Agregar tareas\n')
    print('4.- Actualizar tareas\n')
    print('5.- Eliminar tareas\n')
    print('6.- Salir\n')

def main():

    tareas_pendientes = []
    tareas_completadas = []
    
    while True:

        mostrar_menu()
        opcion = int(input("Ingrese una opcion: "))
        
        if (opcion == '1'):
            listar_tareas_pendientes(tareas_pendientes)
        elif (opcion == '2'):
            listar_tareas_completadas(tareas_completadas)
        elif (opcion == '3'):
            agregar_tareas(tareas_pendientes)
        elif (opcion == '4'):
            actualizar_tareas(tareas_pendientes)



        elif (opcion == '5 '):
            break

main()

