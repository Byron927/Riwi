pintarCartas();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const pacienteNuevo = {};

  for (const [key, value] of formData) {
    if (value == "") return;

    pacienteNuevo[key] = value;
  }

  if (pacientes[indice]) {
    editar(pacienteNuevo);
  } else {
    pacientes.push(pacienteNuevo);
  }
  // if (pacientes) {
  //   pacientes.find((paciente) => {
  //     if (
  // paciente.userName == pacienteNuevo.userName &&
  //   paciente.phoneNumber == pacienteNuevo.phoneNumber &&
  //   paciente.petName == pacienteNuevo.petName;
  //     ) {
  //
  //     } else {
  //       pacientes.push(pacienteNuevo);
  //       pintarCartas();
  //       localStorage.setItem("ls", JSON.stringify(pacientes));
  //       form.reset();
  //     }
  //   });
  // }
  pintarCartas();
  localStorage.setItem("ls", JSON.stringify(pacientes));
  form.reset();
});

document.addEventListener("DOMContentLoaded", () => {
  let listaCache = localStorage.getItem("ls");
  if (listaCache) {
    pacientes = JSON.parse(listaCache);
  }
  pintarCartas();
});
