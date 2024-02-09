// Comentario de una sola linea
/* Comentario
   en bloque*/

// Alert muestra un mensaje de alerta al usuario
alert("Hola Mundo");


// Prompt muestra un mensaje al usuario y contiene una entrada
prompt("Cuantos años tienes?");

edad = prompt("Cuantos años tienes?");
// clg este comando me recorta la escritura de console
console.log("La edad es: ",edad);
console.log("La edad es: " + edad);
console.log(`La edad es: ${edad}`);


// console.info muestra informacion por consola
// ci 
console.info("Informacion al usuario");

// console.warn muestra un mensaje de advertencia 
// cw
console.warn("Esto es un menaje de advertencia");

// console.error muestra un mensaje de error
// ce
console.error("Estos es un mensaje de error");

// console.debug muestra un mesaje con el fin de debugear
// cdb
console.debug("Esto es un mensaje de debugeo");

// console.group agrupa los mensajes de consola
// cgr
console.group("Grupo Principal");
console.log("item 1");
console.log("item 2");
console.log("item 3");
console.group("Segundo Grupo");
console.log("item 4");
console.groupEnd();
console.groupEnd();

// console.table nos permite visualizar listas en forma de tablas
// clt
console.table([{nombre: "Keiber", ciudad: "Medellin", edad: edad}]);

