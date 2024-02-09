import { renderMain, verMas, getData } from "./function.js";
const container = document.querySelector(".container");
const verm = document.querySelector(".btn-primary");
getData();


container.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-primary")) {
    const id = event.target.getAttribute("data-id") - 1;
    // getData();
    verMas(id);
  }

  // if (event.target.classList.contains("bx-arrow-back")) {
  //   callToApi(inputTitle.value);
  // }
});
