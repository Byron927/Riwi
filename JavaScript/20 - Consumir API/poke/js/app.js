document.addEventListener("DOMContentLoaded", () => {
  consumirApi();
});

async function consumirApi() {
  // const URL = "https://jsonplaceholder.typicode.com/photos";
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
  try {
    const respuesta = await fetch(URL);
    console.log(respuesta);
    const data = await respuesta.json();
    console.log(data);
    imprimirDatos(data.results.slice(0, 300));
  } catch (error) {
    console.log("se estalló la pagina");
  }
}

function imprimirDatos(data) {
  data.forEach((element) => {
    const img = element.url.split("/").at(-2);
    console.log(element);
    document.body.innerHTML += `
    <div class="card" style="width: 18rem;">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${img}.svg" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">${element.name}</p>
      </div>
    </div>`;
  });
}
