#listas: 
# son estructuras de datos que permiten almacenar multiples elementos en un unico conteneder.

lista = ["Keiber","Lázaro",True,1.72]
print(lista[0])
print(lista[1])
print(lista[2])
print(lista[3])
#los espacios en las listas empiezan desde 0

#asignar un valor de la lista a una variable 
primer_elemento = [0]

#cambiar valor de un elemento
lista[0]= 'Leandro'

#agregar elementos a la lista
#agraga un espacio en la lista, seria el siguiente en la ultima posicion, los datos dentro del parentesis son los valores asignados en la ubicacion.
lista.append(32)
lista.append(['Leandro','Bastos'])
print('lista modificada',lista)

#eliminar elementos
#el numero 3 hace referencia a la ubicacion en la lista, no al valor asignado; los puestos se corres a la izquierda, es decir: el 4 se volveria 3.
lista.rememove(3)

#acceder a una lista anidada
lista_anidada = [[a,b,c],[d,e,f],[g,h,i]]
primer_elemento_la=lista_anidada[0][0] #devuelve a
segundo_elemento_la=lista_anidada[1][2] #devuelve f


#la diferencia entre tupla y lista es que la tupla no se puede modificar
#tener en cuenta que la diferencia entre las dos son los (tupla) [lista]
tupla = ("Keiber","Lázaro",True,1.72)

#esto es valido
lista[2] = 'maquinola'
#esto no es valido
#tupla[2] = 'maquinola'

#creando un conjunto (set)
#no se pueden modificar los elementos
#no se puede acceder por un indice
#print[3] -> no puede acceder al elemento
#no permite duplicar datos del conjunto
#se puede acceder a los datos por medio de un bucle
#son datos desordenados
conjunto = {"Keiber","Lázaro",True,1.72}

#creando un diccionario (dict) (la estructura es key  : value y separamos con comas)
diccionario = {
    'nombre' : 'Keiber',
    'apellido' : 'Lázaro',
    'esta emocionado' : True,
    'altura' : 1.72,
    'dato duplicad' : 'Lázaro'   
}
print(diccionario['nombre']) #ejemplo
print(diccionario['altura'] + 2) #ejemplo
#en un diccionario los indices se pueden nombrar
diccionario2 = {
    0: 'Keiber',
    1 : 'Lázaro',
    2 : True,
    3 : 1.72,
    4 : 'Lázaro'   
}