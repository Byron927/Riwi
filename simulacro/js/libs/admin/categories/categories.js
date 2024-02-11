import { get, post } from "../../api/clientHttp.js";
import { URL_CATEGORIES } from "../../api/URLS.js";
import { printCategories } from "./functionDOM.js";
//Selectores
const formCategories = document.getElementById("formCategories");
const nameCategory = document.getElementById("nameCategory");
const descriptionCategory = document.getElementById("descriptionCategory");
//Selector para hacer que las categorias se vean en la pagina, lo comentaré, copiaré y me lo...
//...llevaré para el script de functionDOM.js
// const categoriesTbody = document.getElementById("categorias-tbody");

formCategories.addEventListener("submit", (e) => {
  e.preventDefault();

  createCategory();
});

//De esta manera escuchamos cuando la pagina se recarga con el evento DOMContentLoader
//Aquí llamaremos la función getCategories() cuando el documento se recargue
document.addEventListener("DOMContentLoaded", () => {
  //Cuando estemos cargando la informacion con el DOMContentLoaded, obtendremos las categorias
  getCategories();
});

async function createCategory() {
  const newCategory = {
    name: nameCategory.value,
    description: descriptionCategory.value,
  };

  await post(URL_CATEGORIES, newCategory);
}

//En esta función recibimos la url con get, pero tambien necesito la info y get en el...
//...clientHttp.js retorna esa info entonces la guardo acá en la variable data
async function getCategories() {
  const data = await get(URL_CATEGORIES);
  console.log(data);
  //Un atajo para importar las funciones, después de darle export a la que creamos, acá podemos...
  //...entre la ultima letra y el parentesis y presionar ctrl espacio y listo
  printCategories(data);
}
