// Eventos y Escuchadores de eventos
btnSubmit.addEventListener("click", () => {
  puntosEcologicos.forEach((punto) => {
    if (punto.piso == selectPiso.value) {
      punto[tipoCanecaAgregar] += parseInt(cantidad.value);
    }
  });
  waste();
  alertEco();
  localStorage.setItem("ls", JSON.stringify(puntosEcologicos));
  btnClose.click();
  // btnClose.click(); es igual a document.getElementById("btnClose").click();
  cantidad.value = "";
  // para los input no funciona el .textContent
});
canecas.forEach((caneca) => {
  caneca.addEventListener("click", (event) => {
    // 1. abrir modal
    document.getElementById("btnOpenModal").click();
    // 2. obtener el atributo personalizado
    tipoCanecaAgregar = caneca.getAttribute("type-bowl");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let listaCache = localStorage.getItem("ls");
  if (listaCache) {
    puntosEcologicos = JSON.parse(listaCache);
  }
  alertEco();
  waste();
});

selectPiso.addEventListener("input", () => {
  alertEco();
  waste();
});

vaciarC.addEventListener("click", () => {
  limpiarPiso();
  alertEco();
});

vaciarAll.addEventListener("click", () => {
  puntosEcologicos.forEach((i) => {
    i.aprovechables = 0;
    i.no_aprovechables = 0;
    i.organicos = 0;
    localStorage.setItem("ls", JSON.stringify(puntosEcologicos));
    alertEco();
    waste();
  });
});
