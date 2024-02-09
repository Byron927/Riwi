// ejemplo basico para guardar informacion en el localstorage
localStorage.setItem("Keiber", "Lázaro");
// ejemplo basico para obtener informacion del localstorage
const info = localStorage.getItem("Keiber");

console.log(info);

// eliminar un item del localStorage
localStorage.removeItem("Keiber");

// eliminar o limpiar todo el localStorage
localStorage.clear();
console.log(info);

// ejemplo para guardar un objeto en el localStorage
// 1. creamos el objeto
const coder = {
  nombre: "Leandro",
  fecha_nac: "septiembre",
  edad: 24,
};
// 2. convertir el objeto a string (JSON)
console.log(coder);
const objString = JSON.stringify(coder);
console.log(objString);

// 3. agregar el objeto al localStorage
localStorage.setItem("coder", objString);

// actualizar el objeto

// 1. obtener el objeto guardado anteriormente
let coderModificar = localStorage.getItem("coder");

// 2. convertir de String a codigo (JSON)
coderModificar = JSON.parse(coderModificar);
coderModificar.fecha_nac = "octubre";
coderModificar.edad = 31;

// 3.convertir de nuevo el objeto en string y sobreescribir el localStorage
localStorage.setItem("coder", JSON.stringify(coderModificar));
console.log(coderModificar);
