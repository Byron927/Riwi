//selectores

const formLogin = document.getElementById("form-login");
const email = document.getElementById("email");
const password = document.getElementById("password");

const URLBase = "http://localhost:3000/users";

//EVENTOS

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  login();
});
async function login() {
  const response = await fetch(`${URLBase}?email=${email.value}`);
  const data = await response.json();

  if (!data.length) {
    console.log("Email no resgistrado");
    return;
  }
  if (data[0].password === password.value) {
    //con el objeto window podemos redireccionar al usuario
    window.location.href = "administrator.html";
    localStorage.setItem("isAuthorizated", "true");
  } else {
    console.log("Credenciales incorrectas");
  }
}

