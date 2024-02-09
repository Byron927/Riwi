//Selectores
//Input email
const inputEmail = document.getElementById("email")
//Input password
const inputPassword = document.getElementById("password")
//Form login
const formLogin = document.getElementById("form-login")

//Eventos
//Evento para formulario login
formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailUser = inputEmail.value
    const passwordUser = inputPassword.value


    getEmailAndUser(emailUser, passwordUser)

})

//Para transformar una función en promesa debo señalarla con el async antes de la funcion
//y la respuesta de la promesa debe llevar el await
//En la funcion de la linea 24 email reemplazará a emailUser que es donde la estoy llamando y password
//reemplazará a passwordUser en la línea 17
async function getEmailAndUser(email, password) {
    //URL user desde el LocalHost
    const URL = `http://localhost:3000/users?email=${email}`
    //Respuesta que devuelve el LocalHost
    const response = await fetch(URL)
    //Traducir la respuesta en lenguaje javascript
    const data = await response.json()
    

    if (data.length) {
        if (data[0].password === password) {
            console.log("Pasaste las credenciales")
            window.location.href = "administrator.html"
        } else {
            console.log("Contraseña incorrecta");
        }
    } else {
        console.log("No existe el correo");
    }
}

