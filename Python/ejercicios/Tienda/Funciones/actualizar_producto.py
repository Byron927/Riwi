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