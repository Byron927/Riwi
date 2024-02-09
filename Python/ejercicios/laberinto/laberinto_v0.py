import random

def menu_principal():
    
    print('\n Menú Principal !!!')
    print('\n 1 .- Lets Go!')
    print('\n 2 .- Salir')

banco_de_direccion=['Derecha','Izquierda']
banco_de_opciones=['Premio','Moster!']
banco_de_premio=['Puedes Continuar','Puedes Continuar','Puedes Continuar','key!!!']


def main():
    
    while True: 
        menu_principal()
        opcion=int(input('Selecciones una opcion: '))
        counter=0
        if opcion!=1 and opcion!=2:
            print('Elija una opcion valida')
             
        if opcion == 1:
            
            
            while True:
                
                print(f'1 .- Derecha 2 .- Izquierda')
                opcion=int(input('elige una opcion: '))
            
                if opcion == 1:
                    i=random.choice(banco_de_opciones)
                    print(i)
                    if i=='Premio':
                        j=random.choice(banco_de_premio)
                        if j=='Puedes Continuar':
                            print('Continua!!!')
                            counter+=1
                        elif j=='key!!!':
                            print(j)
                            print('GANASTE')
                            counter+=1
                            print(f'Ganaste en el intento # {counter}')
                            break
                    elif i=='Moster!':
                        print('GAME OVER')
                        counter+=1
                        print(f'perdiste en el intento # {counter}')
                        break
                
                if opcion == 2:
                    i=random.choice(banco_de_opciones)
                    print(i)
                    if i=='Premio':
                        j=random.choice(banco_de_premio)
                        if j=='Puedes Continuar':
                            print('Continua!!!')
                            counter+=1
                        elif j=='key!!!':
                            print(j)
                            print('GANASTE')
                            counter+=1
                            print(f'Ganaste en el intento # {counter}')
                            break
                    elif i=='Moster!':
                        print('GAME OVER')
                        counter+=1
                        print(f'perdiste en el intento # {counter}')
                        break
            
            
            
            
        elif opcion == 2:
            print('bye')
            
            break
main()
