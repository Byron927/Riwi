function asignarCasa() {
  casas.map((casa) => {
    console.log(casa);
    casa.linaje.filter((i) => {
      console.log(i);
      i != estudiante.linaje;
    });
  });
}
asignarCasa();
let c = [];
casas.forEach((casa) => {
  let existecasa = casa.linaje.some((i) => i == estudiante.linaje);
  console.log(existecasa);
  existecasa
    ? casa.cualidades.includes(estudiante.cualidades)
      ? (estudiante.casa = casa.casa)
      : ""
    : "";
});
