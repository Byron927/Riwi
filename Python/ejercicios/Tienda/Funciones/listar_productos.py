def listar_productos(inventario):
    if not inventario:
        print('no hay productos en el inventario \n')
    else:
        print('\nlista de productos')

        for indice, producto in enumerate(inventario):
            print(indice,'. -', producto['nombre'], 'cantidad:',producto['cantidad'], producto['precio'],'\n')