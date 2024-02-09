//Crear una lista

const lista = [
  "T o  más     ",
  true,
  { nombre: "Terry", barrio: "Belen" },
  2,
  [1, 2, 3, 4],
];

//Acceder a elementos
console.log(lista[3]);
// console.log(lista.at(3));
console.log(lista[2]["nombre"]);
console.log(lista[2].nombre);
// \s expresion para espacios
console.log(lista[0].replace(/\s/g, ""));
console.log(lista[0].trim().split(" ").join(""));
lista[0] = lista[0].trim().split(" ").join("");
//Recorrer una lista
//Foor loop
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}

//for of and in
for (let iterador of lista) {
  console.log(iterador);
}
for (let iterador in lista) {
  console.log(iterador);
}

//Metodos de listas o arregles (arrays)

const coders = [
  { id: 22, nombre: "Keiber", barrio: "Robledo", cedula: "1090440363" },
  { id: 3, nombre: "Santiago", barrio: "Belén", cedula: "1000445856" },
  { id: 2, nombre: "Kevin", barrio: "Patio Bonito", cedula: "1045445856" },
  { id: 18, nombre: "Samuel", barrio: "La Paz", cedula: "65895856" },
];

// foreach
coders.forEach((temporal, index) => {
  console.log(index, temporal);
  temporal.edad = Math.floor(Math.random() * (30 - 15 + 1) + 15);
});
console.log(coders);

lista.forEach((temporal) => {
  console.log(temporal);
});
// const nombreEstudiante = prompt("Estudiante a Buscar");
// coders.forEach((coder) => {
//   if (coder.nombre.toLowerCase() === nombreEstudiante.toLocaleLowerCase()) {
//     alert(
//       `Estudiante Encontrado: Nombre: ${coder.nombre} edad: ${coder.edad} barrio: ${coder.barrio}`
//     );
//   }
// });

//Map -- similar a foreach reporta una nueva lista
const nuevaLista = coders.map((temporal, index) => {
  temporal.barrio = "Antioquia";
  return { ...temporal };
});
console.log(nuevaLista);
console.log(coders);

//filter
const filtrados = coders.filter((iterador) => iterador.nombre === "Keiber");
console.log(filtrados);

const filtrados2 = coders
  .filter((iterador) => iterador.nombre == "Keiber")
  .map((iterador) => iterador.nombre);
console.log(filtrados2);

//some

const filtrados3 = coders.some((iterador) => iterador.nombre === "Keiber");
console.log(filtrados3);

//sort -- utiliza el algoritmo de ordenamientos burbuja el cual se basa en la recta numerica
// formula para ordenar listas en base a un parametro numerico
const lisOrdenada = coders.sort((a, b) => a.id - b.id);
console.log(lisOrdenada);
// ordena de forma alfabetica respecto al nombre
const lisOrdenada2 = coders.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(lisOrdenada2);

//funciones
// la funcion declarada con la palabra reservada puede ser llamada en cualquier linea de codigo
function saludar() {
  console.log("saludar");
}
// la funcion flecha solo se puede llamar despues de ser creada ... refiriendome a la linea donde esta escrita
const mostrarError = (message) => {
  console.log(message);
};
//Cuando una funcion llama otra funcion se le llama callback
const ejecutarPrograma = (funcion1, funcion2) => {
  funcion1();
  funcion2("Error");
};
ejecutarPrograma(saludar, mostrarError);
