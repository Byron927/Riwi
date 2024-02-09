let saldo = 2500000;
let continuar = true;
let diasVagaciones = 0;
let gastos = 0;

//caso 1
do {
  const opcion = prompt(`*** Aeropuerto el Dorado ***
  1. Compra una almojábana con gaseosa son 15.000
  2. Compra un Subway con gaseosa 23.000
  3. No compra nada`);

  switch (opcion) {
    case "1":
      saldo = saldo - 15000;
      gastos += 15000;
      alert(`Su saldo es $ ${saldo}`);
      continuar = false;
      break;
    case "2":
      saldo = saldo - 23000;
      gastos += 23000;
      alert(`Su saldo es $ ${saldo}`);
      continuar = false;
      break;
    default:
      alert(`Su saldo es $ ${saldo}`);
      continuar = false;
      break;
  }
} while (continuar);

//caso 2

const altoPermitido = 0.55;
const largoPermitido = 0.4;
const anchoPermitido = 0.2;
let altoOriginal =
  prompt(`*** Abordaje con maleta de mano ***
  Ingresa el alto de tu maleta en centimetros`) / 100;
let largoOriginal =
  prompt(`*** Abordaje con maleta de mano ***
  Ingresa el largo de tu maleta en centimetros`) / 100;
let anchoOriginal =
  prompt(`*** Abordaje con maleta de mano ***
  Ingrese el ancho de tu maleta en centimetros`) / 100;
alert(`Es un poco mas grande del tamaño normal.
Retira las prendas que consideres necesarias para obtener las dimensiones adecuadas.
¡Retirando prendas ... !`);
let factorAlto = altoPermitido / altoOriginal;
let factorLargo = largoPermitido / largoOriginal;
let factorAncho = anchoPermitido / anchoOriginal;
const factorReduccion = Math.min(factorAlto, factorLargo, factorAncho);
let nuevoAlto = altoOriginal * factorReduccion;
let nuevoLargo = largoOriginal * factorReduccion;
let nuevoAncho = anchoOriginal * factorReduccion;
alert(
  `Tu maleta es ${nuevoAlto} cm de alto, ${nuevoLargo} cm de largo y ${nuevoAncho} cm de ancho`
);
alert(`Las nuevas dimensiones cumplen con los estanderes establecidos`);

//caso 3

alert(`!!!Bienvenido a Medellin!!!
Recordatorio!: debes estar por lo menos 20 minutos antes en sala de espera para abortar tu proximo vuelo`);
alert(`Confirma tu Reserva`);
alert(`Buscando red WiFi...`);
const redWiFi = `Nuenva red disponible: 
ElPassEs: 01110010_01101001_01110111_01101001`;
alert(`${redWiFi}`);
alert(`***Hacking WiFi Passwords***`);
let claveWiFi = redWiFi.slice(34, 69);
claveWiFi = claveWiFi.split("_");
let contraseña = "";
for (const i of claveWiFi) {
  const decimal = parseInt(i, 2);
  const letra = String.fromCharCode(decimal);
  contraseña += letra;
}
alert(`Clave WiFi obtenida: ${contraseña} 
Reserva Confirmada con exito`);
saldo = saldo - 50000;
gastos += 50000;
alert(`Se ha generado un cobro de $ ${50000}
Concepto: Uso WiFi/hora`);
alert(`Tu saldo actual es de $ ${saldo}`);

//caso 4
alert(`¡Bienvenido a Macondo!`);

do {
  continuar = true;
  const opcion = prompt(`*** Herramienta Comunicacion Macondo ***
  1. Traductor.
  2. Salir`);

  switch (opcion) {
    case "1":
      let frase = prompt("Traducir: ");
      alert(`Traduciendo ...`);
      frase = frase.replace(/[aeou]/g, "i");
      alert(frase);
      break;

    default:
      continuar = false;
      break;
  }
} while (continuar);
function juegoTaxi() {
  do {
    continuar = true;
    const opcion = prompt(`*** Que Inicie el Juego ***
  1.Piedra
  2.Papel
  3.Tijera
  Elige una opcion`);
    let taxi = 0;
    switch (opcion) {
      case "1":
        taxi = Math.random() * 3;
        taxi = Math.ceil(taxi);
        if (taxi == 3) {
          alert(`Has ganado !!!
        Pi li cisi viiji lidrin`);
          continuar = false;
        } else if (taxi == 2) {
          saldo = saldo - 300000;
          gastos += 300000;
          alert(`DX ...
        Nuevo saldo disponible $ ${saldo}`);
          continuar = false;
        } else {
          alert(`Volver a jugar!!!`);
        }
        break;
      case "2":
        taxi = Math.random() * 3;
        taxi = Math.ceil(taxi);
        if (taxi == 2) {
          alert(`Has ganado !!!
        Pi li cisi viiji lidrin`);
          continuar = false;
        } else if (taxi == 1) {
          saldo = saldo - 300000;
          gastos += 300000;
          alert(`DX ...
        Nuevo saldo disponible $ ${saldo}`);
          continuar = false;
        } else {
          alert(`Volver a jugar!!!`);
        }
        break;
      case "3":
        taxi = Math.random() * 3;
        taxi = Math.ceil(taxi);
        if (taxi == 2) {
          alert(`Has ganado !!!
        Pi li cisi viiji lidrin`);
          continuar = false;
        } else if (taxi == 1) {
          saldo = saldo - 300000;
          gastos += 300000;
          alert(`DX ...
        Nuevo saldo disponible $ ${saldo}`);
          continuar = false;
        } else {
          alert(`Volver a jugar!!!`);
        }
        break;
    }
  } while (continuar);
}
//caso 5
alert(`Llegaste al Hotel:`);
alert(`Taxista: Siriin $ 300 000 pir il sirvicii`);
alert(`Viejo ladron ! juguemos piedra, papel o tijera, si gano se va a dormir sin plata,
si ganas pues me tumba`);
juegoTaxi();
//caso 6
alert(
  `Bienvenido al Hotel "SI SOBREVIVES TE DEVOLVEMOS EL 10%"!!! el costo por día es $300.000`
);
let vivo = true;
const costoDiaH = 300000;
let costoTotalH = 0;
const vestuario = ["Amarillo", "Verde", "Rojo", "Azul"];
let op = {};
let casino = false;
do {
  continuar = true;
  const opcion = prompt(`*** Vestuario ***
  Elige el color de prenda que deseas usar el dia de hoy !!!
  1.${vestuario[0]}
  2.${vestuario[1]}
  3.${vestuario[2]}  
  4.${vestuario[3]}  
  *** ***`);
  switch (opcion) {
    case "1":
      alert(`Elegiste ${vestuario[opcion - 1]} `);
      op = prompt(`DIA DE PISCINA !!!
      Deseas meterte a la piscina ???
      S/N`);
      if (op.toUpperCase() == "s") {
        vivo = false;
        alert(`Se te hizo la moricion !!!`);
        alert(`El total de dias Vagacionados fueron ${diasVagaciones}
          El gasto total fue de $ ${gastos}
          Dejaste por heredar $ ${saldo}
          `);
        diasVagaciones++;
      } else {
        alert(`Esperemos que el proximo día sea mucho mejor!!!`);
        alert(`Nuevo saldo disponible $ ${saldo}`);
        diasVagaciones++;
      }
      break;
    case "2":
      alert(`Elegiste ${vestuario[opcion - 1]}`);
      op = prompt(`DIA DE CAMINATA !!!
        Deseas realizar toda la caminata ???
        S/N`);
      if (op.toUpperCase() == "s") {
        vivo = false;
        alert(`Te perdiste y un jaguar te encontro ... 
          Se te hizo la moricion !!!`);
        alert(`El total de dias Vagacionados fueron ${diasVagaciones}
          El gasto total fue de $ ${gastos}
          Dejaste por heredar $ ${saldo}
          `);
        diasVagaciones++;
      } else {
        alert(`Esperemos que el proximo día sea mucho mejor!!!`);
        alert(`Nuevo saldo disponible $ ${saldo}`);
        diasVagaciones++;
      }
      break;
    case "3":
      alert(`Elegiste ${vestuario[opcion - 1]}`);
      op = prompt(`DIA DE PLAYA !!!
        1. Voleibol
        2. Nadar
        3. Coctelasos
        Elige una opcion`);
      if (op == 1) {
        alert(`De las mejores vacaciones !!!
          Muchos mas dias como este !!!`);
        alert(`Nuevo saldo disponible $ ${saldo}`);
        diasVagaciones++;
      } else if (op == 2) {
        alert(`Maravilloso dia !!!`);
        alert(`Nuevo saldo disponible $ ${saldo}`);
        diasVagaciones++;
      } else {
        alert(`Por favor moderate con los cocteles`);
        alert(`5 HOURS LATER...`);
        alert(`WEY CALMATE ...`);
        alert(`A Few Moments Later ...`);
        alert(`Pa emergencias por chirrinchi adulterado`);
        alert(`Hospital realizó un cobro por $ 280000`);
        alert(`Pa la casa ...`);
        alert(`... el mismo taxista DX`);
        juegoTaxi();
        saldo -= 280000;
        continuar = false;
        alert(`El total de dias Vagacionados fueron ${diasVagaciones}
          El gasto total fue de $ ${gastos}
          Saldo Final Vacaciones $ ${saldo}
          `);
        diasVagaciones++;
      }
      break;
    case "3":
      alert(`Elegiste ${vestuario[opcion - 1]} `);
      op = prompt(`DIA DE ACTIVIDADES EN EL HOTEL !!!
        1. Bingo
        2. Bailar 
        3. Casino y Apuestas
        Elige una opcion`);
      if (op == 1) {
        saldo *= 1.8;
        alert(`Gran Eleccion !!!
          Hoy tuviste mucha suerte !!!
          Nuevo saldo disponible $ ${saldo}`);
        diasVagaciones++;
      } else if (op == 2) {
        alert(`Puros prohibidos y azotando baldosa !!!
          GRAN DIA`);
        diasVagaciones++;
      } else {
        alert(`Debiste parar mucho antes...
          Vagaciones finalizadas
          `);
        diasVagaciones++;
        casino = true;
        continuar = false;
      }
    default:
      break;
  }
} while (continuar && vivo && diasVagaciones < 4);

gastos += diasVagaciones + costoDiaH;
saldo -= gastos;

if (casino == true) {
  saldo = 300000;
  alert(`Saliendo del Hotel te encontraste el mismo taxista ...
  `);
  juegoTaxi();
  alert(`Saldo final ${saldo}`);
} else if (vivo == false) {
  alert(`Se murio el compa ...
  Dejaste a Heredar $ ${saldo}
  Solo pudiste Vagacionar ${diasVagaciones} dias`);
} else {
  alert(`Saldo Final $ ${saldo}
  Dias vacacionados: ${diasVagaciones}
  Gastos Totales ${gastos}`);
}
