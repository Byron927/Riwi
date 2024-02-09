import {callToApi,verMas} from "./functions.js";

//selectores
const inputTitle = document.querySelector("#search");
let timer;
const container = document.querySelector(".container-cards");
//eventos
inputTitle.addEventListener("input", (event) => {
  //event = evento que ocurrio
  //target = la etiqueta donde ocurrio el evento
  //value = el valor del input

  //hacemos un backDrop de forma manual con JAVASCRIPT
  clearTimeout(timer);
  timer = setTimeout(() => {
    callToApi(event.target.value);
  }, 500);
});

container.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("ver-mas")) {
    const id = event.target.getAttribute("data-id");
    verMas(id);
  }

  if (event.target.classList.contains("bx-arrow-back")) {
    callToApi(inputTitle.value);
  }
});
