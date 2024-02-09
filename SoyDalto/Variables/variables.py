#el +,-,*,/ antes del = realiza la operacion con el valor inicial asigando a la variable
numero = 10
numero += 1
numero *= 5
print(numero)

#definiendo una variable con camelCase
nombreCompleto = 'Keiber Lázaro'

#difiniendo una variable snake_case
#concatenar con +
bienvenida_al_usuario = 'hola ' + nombreCompleto + ' ¿Como estas?'
print(bienvenida_al_usuario)

#concatenar con f-strings
bienvenida_al_usuario_2 = f'Hola {nombreCompleto} ¿como estas?'
print(bienvenida_al_usuario_2)
#comando del borra la variable 
del bienvenida_al_usuario_2

#in - not in --- busca en la variable y da respuesta true o false
#operadores de pertenencia (in / not in)
print('Keiber' in bienvenida_al_usuario) #true
print('Keiber' not in bienvenida_al_usuario) #false