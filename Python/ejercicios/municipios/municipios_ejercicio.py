def menu_principal():
    input("Presione ENTER para continuar: ")
    print("\n==========================")
    print("==== MENÚ DE OPCIONES ====")
    print("==========================\n")
    print('A. Registro de datos')
    print('B. Municipio que mas toneladas/día genera')
    print('C. Municipio que menos toneladas/día genera')
    print('D. Promedio de toneladas de basura/día')
    print('E. Promedio de toneladas de basura/mes')
    print('F. Mayor problema ambiental.')
    print('G. Menor problema ambiental.')
    print('H. Promedio de olores ofensivos')
    print('I. Promedio de creación asentamientos ilegales')
    print('J. Promedio de contaminación de Corrientes hídricas')
    print('K. Terminar')
    
municipios=[{"nombre":'Bello','toneladas':20, 'porcentaje': {'Olores ofensivos':59,'asentamientos ilegales': 21, 'corrientes hidricas': 20}},
                    {'nombre':'Medellin','toneladas':35, 'porcentaje': {'Olores ofensivos':45,'asentamientos ilegales': 15, 'corrientes hidricas': 40}},
                     {'nombre':'Envigado','toneladas':19, 'porcentaje': {'Olores ofensivos':30,'asentamientos ilegales': 17, 'corrientes hidricas': 53}}]


def registro_de_datos(municipios):
    
    nombre = input('Ingrese el nombre del municipio: ')
    toneladas = int(input('Ingrese la cantidad de toneladas que genera el municipia a diario: '))
    olores = int(input('Ingrese el porcentaje de afectacion respecto a olores: '))
    asentamientos = int(input('Ingrese el porcentaje de afectacion respecto a asentamientos ilegales: '))
    hidricas = int(input('Ingrese el porcentaje de afectacion respecto a contaminacion de corrientes hidricas: '))
    
    municipio={'nombre':nombre, 'toneladas': toneladas, 'porcentajes':{'olores':olores,'asentamientos':asentamientos,'hidricas':hidricas}}
    #agregar un diccionario al una lista
    municipios.append(municipio)
    print('El municipio fue ingresado con exito!')

    
def toneladas(municipios, opcion):
    
    if opcion == 1:
        municipio=''
        tonelada=0
        for i in municipios:
            if i['toneladas'] > tonelada:
                municipio=i['nombre']
                tonelada=i['toneladas']
        print(f'El municipio que mayor cantidad de basura genera es {municipio} con {tonelada} toneladas.')
    elif opcion == 2:
        municipio=''
        tonelada=municipios[0]['toneladas']
        for i in municipios:
            if i['toneladas'] < tonelada:
                municipio=i['nombre']
                tonelada=i['toneladas']
        print(f'El municipio que menor cantidad de basura genera es {municipio} con {tonelada} toneladas.')
        
def promedio_ton(municipios,opcion):
    
    sumatoria=0
    Counter=0
    if opcion==1:
        for i in municipios:
            sumatoria+=i['toneladas']
            Counter+=1

        print(f'el promedio de toneladas por dia de los municipios es {sumatoria/Counter}')
    if opcion==2:
        for i in municipios:
            sumatoria+=i['toneladas']
            Counter+=1
        
        print(f'el promedio de toneladas por mes de los municipios es {(sumatoria/Counter)*30}')
        
def problema_amb(municipios,opcion):
    
    if opcion==1:
        municipio=''
        problema=0
        contaminacion=""
        for i in municipios:
            #en el for (nombre) toma el primer key del diccionario porcentales en este caso son dos key 1 nombre del indice 2 es el valor 
            for nombre, j in i['porcentaje'].items():
                if j > problema:
                    municipio=i['nombre']
                    problema=j
                    contaminacion=nombre
                    
        print(f'El mayor problema de {municipio} son l@s {contaminacion} con un porcentaje del {problema}.')    
        
    if opcion==2:
        municipio=''
        problema=municipios[0]['porcentaje']['Olores ofensivos']
        contaminacion=""
        for i in municipios:
            for nombre, j in i['porcentaje'].items():
                if j < problema:
                    municipio=i['nombre']
                    problema=j
                    contaminacion=nombre
                    
        print(f'El menor problema de {municipio} son l@s {contaminacion} con un porcentaje del {problema}.')        
                   
def promedio_cont(municipios,opcion):
    
    sumatoria=0
    Counter=0
    if opcion==1:
        for i in municipios:
            sumatoria+=i["porcentaje"]["Olores ofensivos"]
            Counter+=1
            
        print(f'La contaminacion promedio de los olores ofensivos es {sumatoria/Counter}')
    
    if opcion==2:
        for i in municipios:
            sumatoria+=i["porcentaje"]["asentamientos ilegales"]
            Counter+=1
            
        print(f'La contaminacion promedio de los asentamientos ilegales es {sumatoria/Counter}')
        
    if opcion==3:
        for i in municipios:
            sumatoria+=i["porcentaje"]["corrientes hidricas"]
            Counter+=1
            
        print(f'La contaminacion promedio de las corrientes hidricas es {sumatoria/Counter}')
        
def main():
    while True:
        menu_principal()

        opcion=input('Ingrese una opcion: ').upper()
        opcion.upper()
        if opcion=='A':
            registro_de_datos(municipios)
        elif opcion=='B':
            toneladas(municipios,1)
        elif opcion=='C':
            toneladas(municipios,2)
        elif opcion=='D':
            promedio_ton(municipios,1)
        elif opcion=='E':
            promedio_ton(municipios,2) 
        elif opcion=='F':
            problema_amb(municipios,1)
        elif opcion=='G':
            problema_amb(municipios,2)
        elif opcion=='H':
            promedio_cont(municipios,1)
        elif opcion=='I':
            promedio_cont(municipios,2)
        elif opcion=='J':
            promedio_cont(municipios,3)     
            
        elif opcion=='K':
            print('Bye')
            break
    
main()
    
    