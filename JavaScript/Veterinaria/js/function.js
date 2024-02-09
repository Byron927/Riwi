function pintarCartas() {
  const containerCites = document.getElementById("containerCites");
  containerCites.innerHTML = "";
  pacientes.forEach((paciente, index) => {
    const card = document.createElement("div");
    card.classList.add("card", "card_cite");
    card.innerHTML = `<div class="card-body">
                <h5 class="card-title fs-3 fw-bold">${paciente.petName}</h5>
                <p class="card-text">
                  <div class="d-flex gap-2">
                    <span class="fw-bold">Propietario:</span>
                    <span>${paciente.userName}</span>
                  </div>
                  <div class="d-flex gap-2">
                    <span class="fw-bold">Telefono:</span>
                    <span>${paciente.phoneNumber}</span>
                  </div>
                  <div class="d-flex gap-2">
                    <span class="fw-bold">Fecha:</span>
                    <span>${paciente.date}</span>
                  </div>
                  
                  <div class="d-flex gap-2">
                    <span class="fw-bold">Hora:</span>
                    <span>${paciente.time}</span>
                  </div>
                  <div class="d-flex gap-2">
                    <span class="fw-bold">Sintomas:</span>
                    <span>${paciente.description}</span>
                  </div>
                </p>
                <div class="d-flex gap-2">
                  <button onclick="asignar(${index});" class="btn btn-primary">Editar</button>
                  <button onclick="eliminar(${index});" class="btn btn-danger">Eliminar</button>
                </div>
              </div>`;
    //onclick("function()");
    // googlear ...
    containerCites.appendChild(card);
  });
}

function eliminar(index) {
  //splice es un metodo de listas y strings, donde el primer valor es la posicion y el segundo el numero de elementos a borrar
  pacientes.splice(index, 1);
  localStorage.setItem("ls", JSON.stringify(pacientes));
  pintarCartas();
}

// function editar(index, editButton) {
//   editButton.addEventListener("click", () => {
//     const petname = document.getElementById("name_pet");
//     const nameuser = document.getElementById("name_person");
//     const phone = document.getElementById("phone_person");
//     const date = document.getElementById("date_cite");
//     const time = document.getElementById("time_cite");
//     const descp = document.getElementById("description");
//     const p = pacientes[index];
//     console.log(p);

//     p.forEach(() => {
//       petname.value = i.value;
//     });

//     // // for (const [key, value] of inputs) {
//     // //   pEdict[key] = value;
//     // // }
//     // console.log(inputs, textArea);
//   });
// }

function asignar(index) {
  indice = index;
  const inputs = document.querySelectorAll("input");
  const textArea = document.querySelector("textarea");
  textArea.value = pacientes[index]["description"];
  inputs.forEach((input) => {
    const propiedad = input.getAttribute("name");
    input.value = pacientes[index][propiedad];
  });
}

function editar(paciente) {
  pacientes[indice] = paciente;
  indice = undefined;
}
