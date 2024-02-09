//Peticion HTTP con fetch

//Selectores
const btnText = document.querySelector("#loadText");
const textoHTML = document.querySelector("#text");

//Eventos
btnText.addEventListener("click", () => {
  // consumirTxt();
  consumirTxtSegundaForma();
});

function consumirTxt() {
  //fetch es un servioi integrado de javascritp que nos permite hacer peticiones HTTP, fetch recibe como parametro la URL del archivo al cual se la va a hacer la peticion
  //FETCH RETORNA UNA PROMESA
  const URL = "data/data.txt";
  fetch(URL)
    .then((respuesta) => {
      console.log(respuesta);
      console.log(respuesta.status);
      console.log(respuesta.statusText);
      //si quiero la respuesta en texto = text()
      //en JSON =json()
      return respuesta.text();
    })
    .then((valor) => {
      textoHTML.textContent = valor;
    });
}

async function consumirTxtSegundaForma() {
  const URL = "data/dta.txt";

  try {
    //plan A
    const respuesta = await fetch(URL);
    if (respuesta.status != 200) {
      throw new Error("Ocurrió un error");
    }
    const valor = await respuesta.text();
    textoHTML.textContent = valor;
  } catch (error) {
    //plan B
    console.log(error);
    textoHTML.textContent = error;
  }
}
