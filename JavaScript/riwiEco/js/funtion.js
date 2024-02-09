function waste() {
  const data = puntosEcologicos.find(
    (puntosEcologicos) => puntosEcologicos.piso == selectPiso.value
  );
  const contadorCanecas = document.querySelectorAll(".body_top span");
  contadorCanecas[0].textContent = `${data.aprovechables}/500`;
  contadorCanecas[1].textContent = `${data.organicos}/500`;
  contadorCanecas[2].textContent = `${data.no_aprovechables}/500`;
}

function limpiarPiso() {
  const data = puntosEcologicos.find(
    (puntosEcologicos) => puntosEcologicos.piso == selectPiso.value
  );
  data.aprovechables = 0;
  data.no_aprovechables = 0;
  data.organicos = 0;
  localStorage.setItem("ls", JSON.stringify(puntosEcologicos));
  const contadorCanecas = document.querySelectorAll(".body_top span");
  contadorCanecas[0].textContent = `${data.aprovechables}/500`;
  contadorCanecas[1].textContent = `${data.organicos}/500`;
  contadorCanecas[2].textContent = `${data.no_aprovechables}/500`;
}

const alertEco = () => {
  const data = puntosEcologicos.find(
    (puntosEcologicos) => puntosEcologicos.piso == selectPiso.value
  );
  let valor =
    (data["aprovechables"] + data["no_aprovechables"] + data["organicos"]) /
    3 /
    500;
  if (valor <= 0.25) {
    alertE.classList.add("alert-danger");
    alertE.textContent = `El punto de ecologico en el piso ${data.piso} es bajo`;
  } else if (valor > 0.25 && valor <= 0.65) {
    alertE.classList.remove("alert-danger");
    alertE.classList.add("alert-warning");
    alertE.textContent = "";
    alertE.textContent = `El punto de ecologico en el piso ${data.piso} es medio`;
  } else if (valor > 0.65) {
    alertE.classList.remove("alert-danger");
    alertE.classList.remove("alert-warning");
    alertE.classList.add("alert-success");
    alertE.textContent = "";
    alertE.textContent = `El punto de ecologico en el piso ${data.piso} es alto`;
  }
};
