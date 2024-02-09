// 1. ¿Es 35 mayor que 25?
let numb1 = 35;
let numb2 = 25;

console.log(`¿Es ${numb1} mayor que ${numb2}? ${numb1 > numb2}`);

// 2. ¿Es 45 menor que 30?

numb1 = 45;
numb2 = 30;

console.log(`¿Es ${numb1} menor que ${numb2}? ${numb1 < numb2}`);

// 3. ¿Son 50 y "50" iguales?

numb1 = 50;
numb2 = "50";

console.log(numb1 == numb2);

// 4. ¿Es 40 estrictamente igual a 40 convertido a número?

numb1 = 40;
numb2 = "40";

console.log(numb1 === numb2);

// 5. ¿Son "apple" y "orange" diferentes?

let var1 = "apple";
let var2 = "orange";

console.log(var1 != var2);

// 6. ¿Es "apple" estrictamente diferente de "Apple"?

var1 = "apple";
var2 = "Apple";

console.log(var1 !== var2);

// 7. ¿Cuál es el valor de una variable sin definir?

let var3;

console.log(var3);

// 8. ¿Cuál es el tipo de dato de una variable sin definir?

console.log(typeof var3);

// 9. ¿Es null igual a undefined?

var1 = null;
var3;

console.log(var1 == var3);

// 10. ¿Son null y undefined estrictamente iguales?

console.log(var1 === var3);

// 11. ¿Es "2.75" mayor que 2.5?

numb1 = "2.75";
numb2 = 2.5;

console.log(numb1 > numb2);

// 12. ¿Es "2.75" mayor que 2.75?

numb2 = 2.75;

console.log(numb1 > numb2);

// 13. ¿Es "2.75" mayor o igual a 2.75?

console.log(numb1 >= numb2);

// 14. ¿Es "2.75" menor o igual a 2.75?

console.log(numb1 <= numb2);

// 15. ¿Es "2.75" un número mayor a 2.8?

numb2 = 2.8;
console.log(numb1 > numb2);

// 16. ¿Es "2.75" un número menor a 2.7?

numb2 = 2.7;

console.log(numb1 < numb2);

// 17. ¿Es el nombre "John" diferente de "john"?

var1 = "John";
var2 = "john";

console.log(var1 != var2);

// 18. ¿Es el nombre "John" diferente de "Jon"?

var2 = "Jon";

console.log(var1 != var2);

// 19. ¿Es la edad 30 estrictamente diferente de "30"?

var1 = 30;
var2 = "30";

console.log(var1 === var2);

// 20. ¿Cuál es el resultado de desplazar a la derecha 25 dos veces en bits?

var1 = 25;

console.log(var1 >> 2);

// 21. ¿Cuál es el resultado de desplazar a la izquierda 8 tres veces en bits?

var1 = 8;

console.log(var1 << 3);

// 22. ¿Son 15 y 15 iguales?

var1 = 15;
var2 = 15;

console.log(var1 == var2);

// 23. ¿Son 20 y 30 diferentes?

var1 = 20;
var2 = 30;

console.log(var1 != var2);

// 24. ¿Es "15" mayor que 30?

var1 = "15";

console.log(var1 > var2);

// 25. ¿Es 20 menor que 40?

var1 = 20;
var2 = 40;

console.log(var1 < var2);

// 26. ¿Es 100 mayor o igual a "99"?

var1 = 100;
var2 = "99";

console.log(var1 >= var2);

// 27. ¿Es 500 estrictamente igual a "500"?

var1 = 500;
var2 = "500";

console.log(var1 === var2);

// 28. ¿Es 750 estrictamente igual a 750?

var1 = 750;
var2 = 750;

console.log(var1 === var2);

// 29. ¿Es 5 estrictamente diferente de "5"?

var1 = 5;
var2 = "5";

console.log(var1 !== var2);

// 30. ¿Es 3 mayor que 5 y 4 menor que 6?

var1 = 3;
var2 = 5;
var3 = 4;
let var4 = 6;

console.log(var1 > var2 && var3 < var4);
