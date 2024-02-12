import { deleteHttp, get, post, update } from "../../api/clientHttp.js";
import { URL_CATEGORIES } from "../../api/URLS.js";
import { idCategoryUpdate, printCategories } from "./functionDOM.js";
//Selectores
const formCategories = document.getElementById("formCategories");
export const nameCategory = document.getElementById("nameCategory");
export const descriptionCategory = document.getElementById(
  "descriptionCategory"
);
//Selector para hacer que las categorias se vean en la pagina, lo comentaré, copiaré y me lo...
//...llevaré para el script de functionDOM.js
// const categoriesTbody = document.getElementById("categorias-tbody");

formCategories.addEventListener("submit", (e) => {
  e.preventDefault();
  //como estamos utilizando el mismo formulario para agregar y para editar, deberemos...
  //...preguntar al momento de escuchar el evento submit cuando agregamos la categoria si ese...
  //...input tipo hidden contiene algún valor
  if (idCategoryUpdate.value) {
    //Si tiene un valor vamos a actualizar
    updateCategory(idCategoryUpdate.value);
  } else {
    createCategory();
  }
});

//De esta manera escuchamos cuando la pagina se recarga con el evento DOMContentLoader
//Aquí llamaremos la función getCategories() cuando el documento se recargue
document.addEventListener("DOMContentLoaded", () => {
  //Cuando estemos cargando la informacion con el DOMContentLoaded, obtendremos las categorias
  getCategories();
});

//Función crear categoria
async function createCategory() {
  const newCategory = {
    name: nameCategory.value,
    description: descriptionCategory.value,
  };

  await post(URL_CATEGORIES, newCategory);
}

//Función de obtener/imprimir categorias
//En esta función recibimos la url con get, pero tambien necesito la info y get en el...
//...clientHttp.js retorna esa info entonces la guardo acá en la variable data
async function getCategories() {
  const data = await get(URL_CATEGORIES);
  console.log(data);
  //Un atajo para importar las funciones, después de darle export a la que creamos, acá podemos...
  //...entre la ultima letra y el parentesis y presionar ctrl espacio y listo
  printCategories(data);
}

//Función de eliminar categoria
export async function deleteCategory(id) {
  console.log("Eliminando id", id);
  //le vamos a concatenar el identificador de lo que queremos eliminar en el query param
  await deleteHttp(`${URL_CATEGORIES}/${id}`);
  //En este caso no le pongo el response y el data porque no necesito que me devuelva nada
}

export async function updateCategory(id) {
  //Envío de objeto con la información actualizada
  //No necesitamos el id porque se lo estamos pasando por url
  const categoryUpdate = {
    name: nameCategory.value,
    description: descriptionCategory.value,
  };
  await update(`${URL_CATEGORIES}/${id}`, categoryUpdate);
}
