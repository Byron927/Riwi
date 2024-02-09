lista = ["Keiber","Lázaro",True,1.72]
print(lista[0])
print(lista[1])
print(lista[2])
print(lista[3])
#los espacios en las listas empiezan desde 0

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
    'male' : True,
    'altura' : 1.72,
    'dato duplicad' : 'Lázaro'   
}
# print(diccionario['nombre']) #ejemplo
# print(diccionario['altura'] + 2) #ejemplo
# #en un diccionario los indices se pueden nombrar
# diccionario2 = {
#     0: 'Keiber',
#     1: 'Lázaro',
#     2: True,
#     3: 1.72,
#     4: 'Lázaro'   
#}
print(diccionario)
diccionario.pop('apellido')
diccionario['apellido']='bastos'
print(diccionario)

print(diccionario)
del diccionario['apellido']
diccionario['apellido']='bastos'
print(diccionario)