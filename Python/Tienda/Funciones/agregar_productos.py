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