import { deleteHttp, get, post, update } from "../../api/clientHttp.js";
import { URL_CATEGORIES, URL_NEWS } from "../../api/URLS.js";
import { printNews } from "./functionsDOM.js";

//Selectores
const formNews = document.getElementById("formNews");
export const nameNotice = document.getElementById("nameNotice");
export const urlImage = document.getElementById("urlImage");
export const idCategory = document.getElementById("idCategory");
export const contentNotice = document.getElementById("contentNotice");
export const idNewsUpdate = document.getElementById("idNewsUpdate");

//Eventos
//Para agregar las categorias que ya están en la sección de categorias en el select...
//...de categorias cuando quiero agregar una nueva noticia tendremos que

document.addEventListener("DOMContentLoaded", () => {
  loadCategories();
  getNews();
});

formNews.addEventListener("submit", (e) => {
  e.preventDefault();
  if (idNewsUpdate.value) {
    updateNews();
  } else {
    createNew();
  }
});

async function createNew() {
  //Traeremos el id del localstorage
  //JSON.parse hace lo contrario de stringify, porque stringify convierte un objeto...
  //...a string y parse viceversa
  const user = JSON.parse(localStorage.getItem("user"));
  //Si intenta agregar una noticia sin tener una categoria seleccionada no lo dejará
  if (!idCategory.value) {
    console.error("La categoria es obligatoria");
    return;
  }

  const newNotice = {
    name: nameNotice.value,
    image: urlImage.value,
    //categoria es una llave foránea de news, por lo tanto tenemos que poner el nombre en singular precedido de...
    //...la palabra Id pero con la I mayúscula, llave foránea significa que esta llave...
    //...se relaciona con la llave ppal de la categoria "categories"
    categoryId: idCategory.value,
    content: contentNotice.value,
    userId: user.id,
    //Ejemplo para obtener la fecha: new Date().toISOString().split("T")[0], donde...
    //...new Date().toISOString() sería igual a 01/01/2022T11:53, es decir, la fecha y ...
    //...la hora separadas por una T, pero las dividimos con .split("T")[0], porque...
    //estaría dividiendo con split y tomando la posición cero, es decir la fecha
    publicationDate: new Date().toISOString().split("T")[0],
  };

  await post(URL_NEWS, newNotice);
}

async function loadCategories() {
  const categories = await get(URL_CATEGORIES);

  console.log(categories);

  categories.forEach((category) => {
    //crearemos etiquetas option para meterlas dentro del select
    const option = document.createElement("option");
    //llenando de contenido la etiqueta option, que tienen valor y contenido, el valor...
    //...tiene que ser el id de la categoria y el contenido algo que el usuario pueda identificar
    option.textContent = category.name;
    option.value = category.id;
    //ahora lo ingresamos por cada iteracion en el select
    idCategory.appendChild(option);
  });
}

async function getNews() {
  //hasta este punto, cuando abro la url de news en una ventana aparte con el endpoint, me doy...
  //...cuenta de que en categoryId y userId me trae solo numeros pero no me muestra la...
  //...categoria ni el usuario, entonces en la url tendré que ponerle un query param, que se...
  //...hace con un "?" seguido de _embed= y la tabla de la conexion que quiero ver, para este...
  //...el caso de categoryId pondré solo category y para userId solo user, es decir...
  //...http://localhost:3000/news?_embed=category y para ver los dos sería con &_embed=user,...
  //...es decir, http://localhost:3000/news?_embed=category&_embed=user, por eso es que esta...
  //...parte se la agrego a la variable news en la url ?_embed=category&_embed=user
  const news = await get(`${URL_NEWS}?_embed=category&_embed=user`);

  printNews(news);
}

//funcion eliminar news
export async function deleteNews(id) {
  await deleteHttp(`${URL_NEWS}/${id}`);
}

//Funcion actualizar
async function updateNews() {
  const user = JSON.parse(localStorage.getItem("user"));

  const newNotice = {
    name: nameNotice.value,
    image: urlImage.value,
    categoryId: idCategory.value,
    content: contentNotice.value,
    userId: user.id,
    publicationDate: new Date().toISOString().split("T")[0],
  };
  await update(`${URL_NEWS}/${idNewsUpdate.value}`, newNotice);
}
