const container = document.querySelector(".container");
let cache;
export async function getData() {
  const URL = "https://api.spacexdata.com/v3/launches";
  const response = await fetch(URL);
  const data = await response.json();
  cache = data;
  renderMain(data);
}

export function renderMain(data) {
  if (!data) {
    const titleError = document.createElement("h2");
    titleError.textContent = "No se encontraron mision";
    titleError.classList.add("alert");
    container.appendChild(titleError);
  } else {
    data.forEach((mision) => {
      const imgDefault = "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png";

      container.innerHTML += `
    <div
      class="card d-flex flex-column align-items-center text-center col-3"
      style="width: 18rem"
    >
      <img
        src="${mision.links.mission_patch_small || imgDefault}"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">${mision.mission_name}</h5>
        <p class="card-text">${mision.launch_year}</p>
        
        <button
          type="button"
          id="btn"
          data-id="${mision.flight_number}" 
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Ver Info
        </button>
      </div>
    </div>`;
    });
  }
}
// export async function obtenerInf(id) {
//   const data = await getData();
//   const inf = data[id];
//   console.log(inf);
//   verMas(inf);
// }
export function verMas(id) {
  let inf = cache[id];
  console.log(inf);

  const title = document.getElementById("exampleModalLabel");
  title.textContent = `${inf.mission_name}`;
  const video = document.querySelector(".modal-body");
  video.innerHTML = `
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${inf.links.youtube_id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `;
}
