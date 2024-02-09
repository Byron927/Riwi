let puntosEcologicos = [
  {
    piso: "3",
    no_aprovechables: 0,
    organicos: 0,
    aprovechables: 0,
  },
  {
    piso: "4",
    no_aprovechables: 0,
    organicos: 0,
    aprovechables: 0,
  },
  {
    piso: "5",
    no_aprovechables: 0,
    organicos: 0,
    aprovechables: 0,
  },
];

// Selectores
const selectPiso = document.getElementById("select_floor");
const canecas = document.querySelectorAll(".bowl");
const btnSubmit = document.getElementById("btnSubmit");
const vaciarC = document.getElementById("vaciar");
const vaciarAll = document.getElementById("vaciarAll");
const alertE = document.querySelector("#alerE");
const btnClose = document.getElementById("btnClose");
const cantidad = document.getElementById("cantidad");
