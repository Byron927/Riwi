const contNieve = document.querySelector(".nieve");
const audioNavidad = document.querySelector("#musica-navideña");
audioNavidad.play();
audioNavidad.loop = true;
contNieve.innerHTML = "";

function generarNieve() {
  Array.from({ length: 50 }).forEach((element) => {
    const num = random(1, 10);
    contNieve.innerHTML += `<span style="--i: ${num}"></span>`;
  });
}
function generarNieve2() {
  Array.from({ length: 50 }).forEach((element) => {
    const num = random(2.5, 12.5);
    contNieve.innerHTML += `<span style="--i: ${num}"></span>`;
  });
}
function random(inicio, final) {
  return Math.floor(Math.random() * (final - inicio + 1) + inicio);
}

function timerNavidad() {
  //obtener fecha actual
  const fechaActual = new Date();
  //definir fecha objetivo
  const fechaObjetivo = new Date(fechaActual.getFullYear(), 11, 25); //el mes 11 representa diciembre
  //verificar si la fehca objetivo ya paso en este año
  if (fechaActual.getMonth() === 11 && fechaActual.getDate() > 25) {
    fechaObjetivo.setFullYear(fechaObjetivo.getFullYear() + 1);
  }
  //calcular la diferencia entre las dos fechas
  let diferenciaMs = fechaObjetivo - fechaActual;

  //convertir los ms a dias horas minutos segundos
  let diasRestantes = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
  let horasRestantes = Math.floor(
    (diferenciaMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutosRestantes = Math.floor(
    (diferenciaMs % (1000 * 60 * 60)) / (1000 * 60)
  );
  let segundosRestantes = Math.floor((diferenciaMs % (1000 * 60)) / 1000);

  const diasHTML = document.getElementById("dia-timer");
  const horaHTML = document.getElementById("hora-timer");
  const minutosHTML = document.getElementById("minutos-timer");
  const segundosHTML = document.getElementById("segundos-timer");
  diasHTML.innerHTML = diasRestantes.toString().padStart(2, "0");
  horaHTML.innerHTML = horasRestantes.toString().padStart(2, "0");
  minutosHTML.innerHTML = minutosRestantes.toString().padStart(2, "0");
  segundosHTML.innerHTML = segundosRestantes.toString().padStart(2, "0");
}
setInterval(timerNavidad, 1000);
generarNieve();
generarNieve2();

document.addEventListener("DOMContentLoaded", function () {
  const imagen = document.querySelector("img");

  // Escucha el evento de finalización de la animación
  imagen.addEventListener("animationiteration", function () {
    reiniciarAnimacion();
  });

  // Función para reiniciar la animación
  function reiniciarAnimacion() {
    imagen.style.transform = "translateX(100%)";
  }
});
