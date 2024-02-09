// #1
let number1 = 25
let number2 = 30

console.log(number1+number2);

// #2
let simpleString1 = "Hola "
let simpleString2 = "Mundo"

console.log((simpleString1 +" "+ simpleString2).length);

// #3
const stringUsingString1 = String("JavaScript");
const stringUsingString2 = String("Ejercicios");

// #4
const stringUsingNewString1 = new String("Concatenar");
const stringUsingNewString2 = new String("Strings");

// #5
console.log(simpleString1.substring(2));

// #6
// Comprueba si la variable simpleString2 contiene el substring "ndo" e imprime el resultado en consola.
console.log(simpleString2.includes("ndo")); 

// #7 
// Concatena las variables simpleString1 y simpleString2 utilizando el método concat() y muestra el resultado en consola.
console.log(simpleString1.concat(simpleString2));

// #8
//Concatena las variables simpleString1 y simpleString2 utilizando el operador + y muestra el resultado en consola.
console.log(simpleString1+simpleString2);

// #9
// Utiliza template strings para concatenar las variables simpleString1 y simpleString2 e imprime el resultado en consola.
console.log(`${simpleString1} ${simpleString2}`);

// #10
// Declara una variable stringWithSpaces1 con el valor " TrimStart" y otra variable stringWithSpaces2 con el valor "TrimEnd ". Elimina los espacios en blanco al principio y al final de ambas cadenas e imprime el resultado en consola.
let TrimStart = "  Hola";
let TrimEnd = "Mundo  ";
console.log(TrimStart.trimStart());
console.log(TrimEnd.trimEnd());

// #11
// Reemplaza la letra 'o' por la letra 'i' en la variable simpleString1 e imprime el resultado en consola.
console.log(simpleString1.replace('o', 'i'));

// #12
// Utiliza el método slice() para obtener los primeros tres caracteres de la variable simpleString2 e imprime el resultado en consola.
console.log(simpleString2.slice(0,3));

// #13 
// Utiliza el método substring() para obtener una subcadena de la variable simpleString2 que comience en el índice 2 e imprime el resultado en consola.
console.log(simpleString2.substring(2));

// #14 
// Repite la variable simpleString1 dos veces utilizando el método repeat() e imprime el resultado en consola.
console.log(simpleString1.repeat(2));

// #15
// Divide la cadena "Esto es una oración de ejemplo" en un array de palabras y muestra el resultado en consola.
let cadena = "Esto es una oración de ejemplo";
console.log(cadena.split(" "));
