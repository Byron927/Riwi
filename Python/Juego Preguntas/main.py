
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

Banco_preguntas = [
    {'pregunta': '¿En qué año ganó Uruguay su primera Copa del Mundo?\n',
     'opciones': ['1926', '1934', '1950'],
     'respuesta': '1930'},
    {'pregunta': '¿Cuál es el estadio de fútbol más grande del mundo por capacidad?\n',
     'opciones': ['Maracaná', 'Wembley', 'Camp Nou'],
     'respuesta': 'Maracaná'},
    {'pregunta': '¿Cuál es el apodo de la selección nacional de Argentina?\n',
     'opciones': ['Las Águilas', 'Los Leones', 'Los Albicelestes'],
     'respuesta': 'Los Albicelestes'},
    {'pregunta': '¿Quién es el máximo goleador de la historia de la UEFA Champions League?\n',
     'opciones': ['Lionel Messi', 'Cristiano Ronaldo', 'Raul'],
     'respuesta': 'Cristiano Ronaldo'},
    {'pregunta': '¿Qué equipo ganó la Copa Mundial Femenina de la FIFA 2019?\n',
     'opciones': ['Estados Unidos', 'Suecia', 'Holanda'],
     'respuesta': 'Estados Unidos'},
    {'pregunta': '¿Quién es el entrenador actual del FC Barcelona?\n',
     'opciones': ['Pep Guardiola', 'Luis Enrique', 'Xavi Hernandez'],
     'respuesta': 'Xavi Hernandez'},
    {'pregunta': '¿Cuál es el club más antiguo de Inglaterra?\n',
     'opciones': ['Arsenal', 'Manchester United', 'Sheffield FC'],
     'respuesta': 'Sheffield FC'},
    {'pregunta': '¿En qué país se fundó el club de fútbol FC Bayern Munich?\n',
     'opciones': ['Alemania', 'Austria', 'Suiza'],
     'respuesta': 'Alemania'},
    {'pregunta': '¿Qué país ganó la Eurocopa 2020?\n',
     'opciones': ['Italia', 'Inglaterra', 'España'],
     'respuesta': 'Italia'},
    {'pregunta': '¿Quién es el máximo goleador de la historia de la Selección de Brasil?\n',
     'opciones': ['Pele', 'Ronaldo', 'Neymar'],
     'respuesta': 'Pele'},
    {'pregunta': '¿Qué jugador es conocido como "El Fenómeno"?\n',
     'opciones': ['Lionel Messi', 'Ronaldo', 'Cristiano Ronaldo'],
     'respuesta': 'Ronaldo'},
    {'pregunta': '¿Cuál es el equipo de fútbol más antiguo del mundo?\n',
     'opciones': ['Liverpool FC', 'Nottingham Forest', 'Notts County'],
     'respuesta': 'Notts County'},
    {'pregunta': '¿En qué país se juega el Superclásico del fútbol sudamericano?\n',
     'opciones': ['Argentina', 'Brasil', 'Uruguay'],
     'respuesta': 'Argentina'},
    {'pregunta': '¿Cuál es el nombre completo de la Copa del Mundo de la FIFA?\n',
     'opciones': ['Copa del Mundo', 'Copa Mundial de la FIFA', 'FIFA World Cup'],
     'respuesta': 'Copa Mundial de la FIFA'},
    {'pregunta': '¿Cuál es el equipo de fútbol más exitoso de Escocia?\n',
     'opciones': ['Celtic', 'Rangers', 'Aberdeen'],
     'respuesta': 'Celtic'},
    {'pregunta': '¿Quién es el entrenador actual de la selección de Argentina?\n',
     'opciones': ['Diego Maradona', 'Jorge Sampaoli', 'Lionel Scaloni'],
     'respuesta': 'Lionel Scaloni'},
    {'pregunta': '¿En qué año se fundó la FIFA?\n',
     'opciones': ['1904', '1910', '1920'],
     'respuesta': '1904'},
    {'pregunta': '¿Cuál es el apodo de la selección nacional de México?\n',
     'opciones': ['Las Águilas', 'Los Tres Tristes Tigres', 'El Tri'],
     'respuesta': 'El Tri'},
    {'pregunta': '¿Qué país ha ganado más Copas de África?\n',
     'opciones': ['Nigeria', 'Egipto', 'Camerún'],
     'respuesta': 'Egipto'},
    {'pregunta': '¿Quién es el máximo goleador en la historia de la Premier League?\n',
     'opciones': ['Alan Shearer', 'Thierry Henry', 'Wayne Rooney'],
     'respuesta': 'Alan Shearer'},
]
def jugar(Banco_preguntas):

    correctas = 0
    incorrectar = 0

    print('\n ----- ¡¡¡ PRIMER PREGUNTA !!! -----\n')
    for i, pregunta in enumerate(Banco_preguntas):
        print(pregunta['pregunta'])
        for j, opcion in enumerate(pregunta['opciones']):
            print(j, '.-', opcion)
        indice = int(input('\n Ingrese una opcion: '))
        if pregunta['opciones'][indice] == pregunta['respuesta']:
            print('\n LA RESPUESTA FUE CORRECTA\n')
            correctas+=1
        else:
            print('\n RESPUESTA INCORRECTA\n')
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

