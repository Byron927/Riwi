import random
# Crear un juego de preguntas

# - Debe tener un menu interactivo, opcion para jugar y opcion para salir

# - en la opcion uno el usuario podra responder las preguntas que el sistema 
# le muestre de forma aleatoria guardando cuantas respuestas esta contestando bien 

# - cuando el usuario termine de responder todas las preguntas en programa debe decirle cuantas preguntas fueron correctas.

def mostras_menu():
    input('\n Presiones ENTRER para iniciar el juego !!!\n')
    print('\n ----- MENU PRINCIPAL -----\n')
    print('\n1. LETS GO !!!\n')
    print('\n2. EXIT!!!\n')


Banco_preguntas = [{'pregunta': '¿Cuantas Ligas de Campeones tiene el AC Milan?', 'opciones': ['5 Ligas de Campeones', '8 Ligas de Campeones', '7 Ligas de Campeones'], 'respuesta': '7 Ligas de Campeones'},
                 {'pregunta': '¿Quien es el maximo goleador en la historia de la Premier League', 'opciones': ['Alan Shearer', 'Robbie Fowler', 'Michael Owen'], 'respuesta': 'Alan Shearer' },
                 {'pregunta': '¿Cual es eñ equipo con mas titulos en la Copa Libertadores?', 'opciones': ['Boca Juniors', 'Independiente', 'Peñaron'], 'respuesta': 'Imdependiente'}]

def jugar(Banco_preguntas):

    correctas = 0
    incorrectar = 0

    print('\n ----- ¡¡¡ PRIMER PREGUNTA !!! -----\n')
    aleatorio = random.choice(Banco_preguntas)
    print(aleatorio['pregunta'])
    for j, opcion in enumerate(aleatorio['opciones']):
        print(j, '.-', opcion)
    indice = int(input('\n Ingrese una opcion: '))
    if aleatorio['opciones'][indice] == aleatorio['respuesta']:
        print('\n LA RESPUESTA FUE CORRECTA')
        correctas+=1
    else:
        print('\n RESPUESTA INCORRECTA')
        incorrectar+=1
    print(f'El numero de respuestas correstas fue: {correctas}')
    print(f'El numero de respuestas incorrectar fue: {incorrectar}')




def main():

    while True:
        mostras_menu()
        opcion = int(input('\n Ingrese una opcion: '))

        if opcion == 1:
            jugar(Banco_preguntas)
            

        elif opcion == 2:
            print('\n ----- EXIT!!! -----\n')

            break
main()
