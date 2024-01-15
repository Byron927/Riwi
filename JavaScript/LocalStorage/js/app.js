localStorage.setItem("company", "riwi")

// Ejemplo basico para obtener info del localstorage

const info = localStorage.getItem("company");

// console.log(info)

// Eliminar un item localStorage
localStorage.removeItem("company")


// ELiminar o limpiar todo el localstorage
localStorage.clear()
// console.log(info)

//GUARDAR UN OBJETO EN EL LOCALSTORAGE

//1. Crear objeto
const coder = {
    nombre: "Terry",
    fecha_nac: "Mayo",
    edad: 24
};

//2.Convertir el objeto a string (JSON)
console.log(coder)
const objString = JSON.stringify(coder);
console.log(objString)

//3.Agregar el objeto al localstorage
localStorage.setItem("coder", objString);

// Actualizar el objeto

//1. Obtener el objeto guardado anteriormente
let coderModificar = localStorage.getItem("coder");

//2. Convertir de String a codigo (JSON)
codigoModificar = JSON.parse(coderModificar);

coderModificar.fecha_nac = "junio";
coderModificar.edad = 21;


//3. Convertir de nuevo el objeto en String y sobrescribir el localstorage
localStorage.setItem("coder", JSON.stringify(coder))
console.log(coderModificar)


//Lista de objetos
const coders = [
    { nombre: "Roberto", edad: 34 },
    { nombre: "Ricardo", edad: 21 },
    { nombre: "Julian", edad: 22 },
    { nombre: "Darwing", edad: 23 },
    { nombre: "Tomás", edad: 20 },
]

let listaString = JSON.stringify(coders);

localStorage.setItem("coders", listaString);

let listaActualizar = localStorage.getItem("coders");

listaActualizar = JSON.parse(listaActualizar);

listaActualizar.forEach(element => {
    if (element.nombre == "Darwing") {
        element.edad++
    }
})

localStorage.setItem("coders", JSON.stringify(listaActualizar))

console.log(listaActualizar)

