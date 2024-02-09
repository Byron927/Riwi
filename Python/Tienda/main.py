from Funciones.indice import menu, listar, agregar, eliminar, actualizar

def main():
    inventario = []
    while True:
        
        menu()
        opcion = input('ingrese una opcion: ')
        
        if(opcion == '1'):
            listar(inventario)

        elif(opcion == '2'):
            agregar(inventario)

        elif(opcion == '3'):
            actualizar(inventario)

        elif(opcion == '4'):
            eliminar(inventario)

        elif(opcion == '5'):
            break
main()