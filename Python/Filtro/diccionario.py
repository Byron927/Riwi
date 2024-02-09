#Sistema de inventario 
def listar_productos(inventario):
    if not inventario:
        print('no hay productos en el inventario \n')
    else:
        print('\nlista de productos')

        for indice, producto in enumerate(inventario):
            print(indice,'. -', producto['nombre'], 'cantidad:',producto['cantidad'], producto['precio'],'\n')

def agregar_productos(inventario):
    try:
        nombre = input('ingrese el nombre del producto: ')
        cantidad = input('ingrese la cantidad del producto: ')
        precio = input('ingrese el precio del producto: ')

        producto = {'nombre': nombre, 'cantidad': int(cantidad), 'precio': float(precio)}
        #inventario es a quien se le agrega (append), producto es el valor agregado
        inventario.append(producto)
        print('se agrego el producto con exito')

    except:
        print('error, valor no valido')

def actualizar_producto(inventario):
    listar_productos(inventario)
    if not inventario:
        return
    else:
        try:
            indice = int(input('ingrese el indice del producto a modificar:'))
            if(indice <0 or indice > len(inventario)):
                print('el indice no exite.')
            else:
                nombre = input('ingrese el nuevo nombre del producto: ')
                cantidad = input('ingrese la nueva cantidad del producto: ')
                precio = input('ingrese el nuevo precio del producto: ')

                inventario[indice]['nombre']= nombre
                inventario[indice]['cantidad']= int(cantidad)
                inventario[indice]['precio']= float(precio)

                print('\nEl producto fue actualizado con exito.')

        except:
            print('error, valor no valido')
        

def eliminar_producto(inventario):
    listar_productos(inventario)  
    if not inventario:
        return
    else:
        try:
            indice = int(input('ingrese el indice del producto a eliminar: '))
            if(indice <0 or indice > len(inventario)):
                print('el indice no existe')
            else:
                print('eliminando producto')
                inventario.pop(indice)
                print('el producto fue eliminado con exito \n')

                listar_productos(inventario)
        except:
            print('error, valor no valido')

def mostrar_menu():
    input('Presione ENTER para continuar')
    print('\n ------ MENU DE OPCIONES -----\n')
    print('1. listar productos')
    print('2. agregar productos')
    print('3. actualizar productos')
    print('4. eliminar productos')
    print('5. salir')

def main():
    inventario = []
    while True:
        mostrar_menu()
        opcion = input('ingrese una opcion: ')
        
        if(opcion == '1'):
            listar_productos(inventario)

        elif(opcion == '2'):
            agregar_productos(inventario)

        elif(opcion == '3'):
            actualizar_producto(inventario)

        elif(opcion == '4'):
            eliminar_producto(inventario)

        elif(opcion == '5'):
            break
main()
