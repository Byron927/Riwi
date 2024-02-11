//Funcion que se encargará de hacer solicitudes http del método POST
//Recibo como parámetro la info y se va a insertar como una solicitud http
//Necesito la url que me va a llegar en el fetch y por lo tanto debo...
//...recibirla también como parámetro, sin importar si es la de users,...
//...categories o news, simplemente me llegará dinamicamente
export async function post(url, info) {
  try {
    //Solicitud http
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });

    const data = await response.json();
  } catch (error) {
    console.error(error);
  }
}

//Esta función nos servirá para hacer peticiones get a todas las entidades
export async function get(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}
