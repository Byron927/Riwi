let saldo = 5000000000;
let gastos = 0;
let continuar = true;
do {
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
