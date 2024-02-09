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
