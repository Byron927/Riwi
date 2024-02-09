// 1. Verifica si un número es positivo.
// 2. Verifica si un número es negativo.
let num1 = -10;
if (num1 > 0) {
  console.log("El número es positivo");
} else {
  console.log("El numero es negativo");
}

// 3. Comprueba si un número es par.
// 4. Comprueba si un número es impar.

num1 = 20;
let resultado = num1 % 2;
if (resultado == 0) {
  console.log("El número es par");
} else {
  console.log("El número no es par");
}

// 5. Determina si un número es múltiplo de 5.

num1 = 35;
resultado = num1 % 5;
if (resultado == 0) {
  console.log("El número es múltiplo de 5");
} else {
  console.log("El número no es múltiplo de 5");
}

// 6. Verifica si un número es divisible entre 3.

num1 = 37;
resultado = num1 % 3;
if (resultado == 0) {
  console.log("El número es divisible entre 3");
} else {
  console.log("El número no es divisible entre 3");
}

// 7. Determina si un número es mayor que 100.

num1 = 101;
if (num1 > 100) {
  console.log("El número es mayor que 100");
} else {
  console.log("El número no es mayor que 100");
}

// 8. Verifica si un número es menor que -50.

num1 = -51;
if (num1 < -50) {
  console.log("El número es menor que -50");
} else {
  console.log("El número no es menor que -50");
}

// 9. Comprueba si un número está en el rango de 20 a 50.

num1 = 35;
if (num1 >= 20 && num1 <= 50) {
  console.log("El número está en el rango de 20 a 50");
} else {
  console.log("El número no está en el rango de 20 a 50");
}

// 10. Determina si un número es igual a 0.

num1 = -20;
if (num1 == 0) {
  console.log("El número es igual a 0");
} else {
  console.log("El número no es igual a 0");
}

// 11. Verifica si un número es mayor que -10 y menor que 10.

if (num1 > -10 && num1 < 10) {
  console.log("El numero es mayor que -10 y menor que 10");
} else {
  if (num1 < -10) {
    console.log("El numero no es mayor que -10");
  } else {
    console.log("El numero no es menor que 10");
  }
}

// 12. Determina si un año es un año bisiesto.

num1 = 2020;
resultado = num1 % 4;
if (resultado == 0) {
  console.log("El año es un año bisiesto");
} else {
  console.log("El año no es un año bisiesto");
}

// 13. Verifica si una persona es mayor de edad (mayor o igual a 18 años).
// 14.
num1 = 18;
if (num1 >= 18) {
  console.log("La persona es mayor de edad");
} else {
  console.log("La persona no es mayor de edad");
}

// 15. Verifica si un número es un cuadrado perfecto.

num1 = 100;
resultado = Math.sqrt(num1);
let resultado2 = Math.round(resultado) * Math.round(resultado);
if (resultado2 == num1) {
  console.log("El número es un cuadrado perfecto");
} else {
  console.log("El número no es un cuadrado perfecto");
}

// 16. Determina si un número es un número de Fibonacci.

let a = 1;
let b = a;
let c = a + b;
a = b;
b = c;

console.log(Math.sqrt(num1));

console.log(Number.isInteger(Math.sqrt(num1)));
