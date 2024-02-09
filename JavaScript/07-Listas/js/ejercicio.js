const coders = [
  {
    id: 22,
    nombre: "Keiber",
    barrio: "Robledo",
    cedula: "1090440363",
    edad: 32,
  },
  {
    id: 3,
    nombre: "Santiago",
    barrio: "Belén",
    cedula: "1000445856",
    edad: 21,
  },
  {
    id: 2,
    nombre: "Kevin",
    barrio: "Patio Bonito",
    cedula: "1045445856",
    edad: 23,
  },
  { id: 18, nombre: "Samuel", barrio: "La Paz", cedula: "65895856", edad: 27 },
];

const inicio = Number(prompt("Ingrese el primer rango de edad"));
const final = Number(prompt("Ingrese el ultimo rango de edad"));
let coincidencias = "";

coders.forEach((element, index) => {
  if (element.edad >= inicio && element.edad <= final) {
    coincidencias += `Nombre: ${element.nombre}, Edad: ${element.edad}, cedula: ${element.cedula}, Barrio: ${element.barrio}\n`;
  }
});

alert(`
ESTUDIANTES DENTRO DEL RANGO:
${coincidencias}`);
