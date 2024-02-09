const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Operador > mayor que

console.log(`${numero1} es mayor que ${numero3}? ${numero1 > numero3} `);
console.log(`${numero3} es mayor que ${numero2}? ${numero3 > numero2} `);

// menor que

console.log(`${numero1} es menor que ${numero3}? ${numero1 < numero3}`);

// >= o <=

console.log(
  `${numero2} es mayor o igual que ${numero1}? ${numero2 >= numero1}`
);

// comparadores
console.log(numero2 == numero1);
console.log(numero2 === numero1);
console.log(typeof numero2);
console.log(typeof numero1);

// diferente

const password = "qwerty1234";
const password_confirmation = "qwerty1234";

console.log(password !== password_confirmation);

// null y undefined

let varNull = null;
let varUndefined;

console.log(typeof varNull);
console.log(typeof varUndefined);
console.log(varNull == varUndefined);
console.log(varNull === varUndefined);

// > o < de forma estricta
let estatura = 1.95;
// operador AND &&
console.log(estatura >= 1.71 && typeof estatura == "number" && estatura <= 1.8);

// operador OR ||
console.log(estatura >= 1.71 || typeof estatura == "number");

// operadores ternarios

/* 
 <= 1.65 = bajito
 >= 1.66 <= 1.75 = promedio
 >= 1.76 alto
*/

estatura <= 1.65
  ? console.log("Eres una persona bajita")
  : estatura >= 1.66 && estatura <= 1.75
  ? console.log("Eres una persona dentro del promedio")
  : console.log("Eres una persona alta");

if (estatura <= 1.65) {
  console.log("Eres una persoan bajita");
} else {
  if (estatura >= 1.66 && estatura <= 1.75) {
    console.log("Eres una persona en el promedio");
  } else {
    console.log("Eres una persona alta");
  }
}

// condicion de un solo caso con if
// si la persona mide mas de 1.90 es una persona muy alta

if (estatura > 1.9) console.log("Es una persona muy alta");
else console.log("Perteneces a otro rango");

// forma ternaria

estatura > 1.9 && console.log("Eres una personaa muy alta");

//
const coder = "Ana";
const edadCoder = 26;
const ciudad = "Medellin";
const sector = "Palmas";
const hayMetro = false;
const horaDespertar = "5a.m";
let anaDespierta = false;

if (coder == "Ana") {
  if (sector == "Palmas") {
    console.log("Ana vive en las palmas");
    if (!hayMetro) {
      console.log("Ana tiene que llegar en bus o Uber");
      if (horaDespertar == "5a.m") {
        console.log("Llega temprano a Riwi");
      } else {
        console.log("a Ana la levanta la mamá");
        if (!anaDespierta && horaDespertar == "5a.m") {
          anaDespierta = true;
        } else {
          console.log("Ana llegará tarde");
        }
      }
    }
  } else {
    console.log(`No eres Ana`);
  }
}
