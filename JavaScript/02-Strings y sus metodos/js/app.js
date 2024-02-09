nombre = "Riwi";
var nombre2 = "Riwi Medellin";


// let se puede reemplazar
let nombre3 = "Keiber Lazaro";

nombre3 = "Leandro";

const nombre4 = "ken "
// nombre4 = "Darwing"

// STRINGS

const ciudad1 = "Bucaramanga";
const ciudad2 = String("Pereira");
const ciudad3 = new String("Medellin");

console.log(ciudad1);
console.log(ciudad2);
// el value0f es para que no me imprima como lista
console.log(ciudad3.valueOf());


// METODOS DE LOS STRINGS

const centroEducativo = "Riwi Medellin";
const coder = "Tomás Montoya";

console.log("Centro Educativo", centroEducativo);

// Convertir a minuscula

console.log("Texto en minuscula: ", centroEducativo.toLowerCase());

// convertir a mayuscula
console.log("Texto en minuscula: ", centroEducativo.toUpperCase());

// mostrar cuantos caracteres tiene una cadena
console.log("La palabra",centroEducativo,"tiene",centroEducativo.length,"caracteres");

// preguntar si la cadena de caracteres incluye la palabra Riwi
console.log(centroEducativo.includes("riwi")); 
// false
console.log(centroEducativo.toLocaleLowerCase().includes("riwi")); 
// true

// concatenar las dos cadenas de Strings
console.log(centroEducativo.concat(" ",coder));
console.log(centroEducativo + " " + coder);
console.log(`${centroEducativo} ${coder}`);

// quitar espacios a los extremos de una cadena
const email = "   leandro1991.9@gmail.com   ";

// quitar los espacios al inicio
console.log(email.trimStart());
// quitar los espacios al final
console.log(email.trimEnd());
// quitar todos los espacios
console.log(email.trim());

//quitar una palabra de la oracion

console.log(coder.split(" "));

console.log(coder.split(" ")[0]);

// reemplazar una palabra
console.log(coder.replace('Tomás', 'Leandro'));
console.log(coder.replace('Montoya', 'Lazaro'));

// rellenar una cade de texto
const numero = "1";
console.log(numero.padStart(5,"0"));

// buscar el indice de una palabra
// search retorna el indice de la primera coincidencia
console.log(coder.search(/Montoya/));