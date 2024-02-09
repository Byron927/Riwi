#AND

Resultado = True & True #devolver true
Resultado2 = True & False #devolver false
Resultado3 = False & True #devolver false
Resultado4 = False & False #devolver false

#OR
Resultado5 = True | True #devolver true
Resultado6 = True | False #devolver true
Resultado7 = False | True #devolver true
Resultado8 = False | False #devolver false

#NOT

Resultado9 = not True #devolver false
Resultado9_1 = not 2==2 #devolver false
Resultado10 = not False #devolver true
Resultado10_2 = not 2<2 #devolver true

print(Resultado)
print(Resultado2)
print(Resultado3)
print(Resultado4)
print(Resultado5)
print(Resultado6)
print(Resultado7)
print(Resultado8)
print(Resultado9)
print(Resultado10)
print(Resultado9_1)
print(Resultado10_2)

