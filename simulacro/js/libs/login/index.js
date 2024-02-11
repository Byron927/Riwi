//Por buena práctica, los import siempre van arriba
import { URL_USERS } from "../api/URLS.js";

//Selectores
const formLogin = document.getElementById("formLogin");
const email = document.getElementById("email");
const password = document.getElementById("password");

//Eventos
formLogin.addEventListener("Submit", (e) => {
  e.preventDefault();

  logIn();
});

async function logIn() {
  //fetch es una promesa y por lo tanto tendremos que esperar con el await
  //el query params "?email=${email.value}" no es mas que una variable que se envía por una URL...
  //...en este caso vamos a enviar el email y siempre se inicia con un "?"
  const response = await fetch(`${URL_USERS}?email=${email.value}`);
  const data = await response.json();

  console.log(data);
}
