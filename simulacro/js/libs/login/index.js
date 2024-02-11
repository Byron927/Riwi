//Por buena práctica, los import siempre van arriba
import { URL_USERS } from "../api/URLS.js";
//Selectores
const formLogin = document.getElementById("formLogin");
const email = document.getElementById("email");
const password = document.getElementById("password");

//Eventos
formLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  logIn();
});

async function logIn() {
  //fetch es una promesa y por lo tanto tendremos que esperar con el await
  //el query params "?email=${email.value}" no es mas que una variable que se envía por una URL...
  //...en este caso vamos a enviar el email y siempre se inicia con un "?"
  const response = await fetch(`${URL_USERS}?email=${email.value}`);
  const data = await response.json();

  if (!data) {
    console.error("Email no registrado");
    return;
  }
  //Si yo estoy obteniendo por email, entonces estoy seguro de que solo hay un usuario...
  //...que tiene ese email, por eso utilizo la posición cero
  if (data[0].password !== password.value) {
    console.error("Contraseña inválida");
    return;
  }

  //localStorage es una api del navegador que me da persistencia, es decir, si cierro el navegador...
  //...y lo vuelvo a abrir tendré la info en el localStorage, no se elimina a menos de que el usuario...
  //...o el código la eliminen y siempre recibe dos valores, 1ro la llave y 2do el valor, OJO,...
  //...solo guarda strings, entonces como yo quiero guardar un objeto me toca convertirlo a string...
  //...con la función JSON.stringify y dentro del parentesis le envío lo que quiero convertir:
  localStorage.setItem("user", JSON.stringify(data[0]));
  //Despues redireccionamos al usuario hacia la vista administrator
  window.location.href = "administrator.html";
}
