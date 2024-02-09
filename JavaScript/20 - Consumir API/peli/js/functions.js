const container = document.querySelector(".container-cards");

export async function verMas(id) {
  const URL = `https://www.omdbapi.com/?apikey=690d22ef&i=${id}`;
  const response = await fetch(URL);
  const data = await response.json();
  printInf(data);
}

//funcion para hacer el llamado a la API
export async function callToApi(title) {
  const URL = `https://www.omdbapi.com/?apikey=690d22ef&s=${title}`;
  //realizo la peticion HTTP con el servicio fetch
  //await = codigo no bloqueante a codigo bloqueante
  const response = await fetch(URL);
  const data = await response.json();
  printMovies(data.Search);
}

export function buscaRT(info) {
  let infC = info[0];
  if (infC) {
    info.forEach((inf) => {
      if (inf.Source === "Rotten Tomatoes") {
        infC = inf;
      }
    });
  } else infC = { Source: "Rating", Value: "Sin calificación" };
  return infC;
}

export function printInf(data) {
  cleanHTML();
  if (!data) {
    const titleError = document.createElement("h2");
    titleError.textContent = "No se encontraron peliculas";
    titleError.classList.add("alert");
    container.appendChild(titleError);
  }
  container.innerHTML = `
    <div class="card-info">
        <div class="img">
          <img
            height="445px"
            src="${data.Poster}"
            alt=""
          />
        </div>
        <div class="info">
            <i class='bx bx-arrow-back'></i>
          <h2 class="title">${data.Title}</h2>
          <div class="rating">
            ${buscaRT(data.Ratings).Source}: ${buscaRT(data.Ratings).Value}
          </div>
          <div class="sub-info">
            <p>Estreno: ${data.Released}</p>
            <p>Classification: ${data.Rated}</p>
            <p>Duracion: ${data.Runtime}</p>
            <p>Genero: ${data.Genre}</p>
          </div>
          <div class="sub-info2">
            <p>Directores: ${data.Director}</p>
            <p>Escritores: ${data.Writer}</p>
            <p>Actores: ${data.Actors}</p>
            <p>
              Trama: ${data.Plot}
            </p>
            <p>
              Premios: ${data.Awards}
            </p>
          </div>
        </div>
      </div>`;
}

export function printMovies(movies) {
  cleanHTML();
  //VALIDAR QUE SI EXISTAN PELICULAS
  if (!movies) {
    const titleError = document.createElement("h2");
    titleError.textContent = "No se encontraron peliculas";
    titleError.classList.add("alert");
    container.appendChild(titleError);
  }

  // container.innerHTML = ""; ES LENTA
  movies.forEach((movie) => {
    //inyectar el HTML
    container.innerHTML += `
    <div class="card">
      <h2 class="tittle-movie">${movie.Title}</h2>
      <img
          class="card-img"
          src="${movie.Poster}"
          alt=""/>
      <p>Año <span>${movie.Year}</span></p>
      <p>Tipo <span>${movie.Type}</span></p>
      <button class="ver-mas" data-id="${movie.imdbID}">Ver más</button>
    </div>`;
  });
}

export function cleanHTML() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  container.innerHTML = "";
}
