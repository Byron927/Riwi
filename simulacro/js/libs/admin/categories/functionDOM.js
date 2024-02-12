import { cleanHTML } from "../../utils/cleanHTML.js";
import {
  deleteCategory,
  descriptionCategory,
  nameCategory,
} from "./categories.js";
//Selector del tbody
const categoriesTbody = document.getElementById("categorias-tbody");
export const idCategoryUpdate = document.getElementById("idCategoryUpdate");
export const btnAddCategoryModal = document.getElementById(
  "btnAddCategoryModal"
);

export function printCategories(categories) {
  //Limpiar el html para eliminar lo que está por defecto y no tiene base de datos...
  //...pero se comentará y se importará mejor la función de cleanHTML, debido a que...
  //...son muchas las veces que tendremos que hacerlo
  // categoriesTbody.innerHTML = "";

  //Explicación en el script de cleanHTML.js
  cleanHTML(categoriesTbody);

  //Como esta categoria es una lista entonces haré foreach
  categories.forEach((category) => {
    //Estamos añadiendo con tr una fila y con td las columnas
    const tr = document.createElement("tr");
    const tdId = document.createElement("td");
    const tdName = document.createElement("td");
    const tdDescription = document.createElement("td");
    const tdButtons = document.createElement("td");
    //Creando los botones de editar y eliminar
    const btnEdit = document.createElement("button");
    const btnDelete = document.createElement("button");
    //Agregando las palabras que llevará cada botón
    btnDelete.textContent = "Eliminar";
    btnEdit.textContent = "Editar";
    //Agregando las clases de bootstrap que tienen los originales, el danger es porque...
    //...se verá rojo y el primary es azul
    btnDelete.classList.add("btn", "btn-danger");
    btnEdit.classList.add("btn", "btn-primary");
    //Como estamos usando DOM scripting debemos agregar los eventos
    btnDelete.addEventListener("click", () => {
      //esta funcion se esta importando desde el script de categories
      deleteCategory(category.id);
    });

    btnEdit.addEventListener("click", () => {
      loadInfoCategory(category);
    });
    //Acá estaremos agregando el texto que literalmente llevarán las columnas (td)...
    //...en la fila (tr)
    //Este id lo sacamos de la categoria que se está recorriendo en el momento...
    //...toda vez que esto es un temporal que irá cambiando su valor en cada iteración
    //En esta ocasion es .id porque así es como se llama en el json
    tdId.textContent = category.id;
    tdName.textContent = category.name;
    tdDescription.textContent = category.description;

    tdButtons.appendChild(btnEdit);
    tdButtons.appendChild(btnDelete);
    //Despues de creados todos los td (columnas), tendremos que ingresarlos en el tr (fila)
    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdDescription);
    tr.appendChild(tdButtons);
    //Ahora se debe meter el tr (la fila) dentro del tbody, la cual sí tendrá base de datos...
    //...pero las otras no, serán de relleno, entonces antes de hacer cualquier impresión en...
    //...la vista, limpiaré con innerHTML = "" en la primera linea de la creacion de la...
    //...funcion printCategories, como tendré que limpiar tantas vistas, es recomendable...
    //...crear una carpeta utils
    categoriesTbody.appendChild(tr);
  });
}

//Funcion para cargar/mostrar la info de lo que se desea editar
function loadInfoCategory(category) {
  nameCategory.value = category.name;
  descriptionCategory.value = category.description;
  //Como hace falta el id de lo que se está actualizando entonces tendremos que adicionar...
  //...en el html dentro del formulario de categorias un input tipo hidden (input type="hidden")...
  //...con el identificador idCategoryUpdate, para que aparezca oculto en el modal, no olvidar...
  //...que también se le debe hacer el selector con su respectivo id.
  idCategoryUpdate.value = category.id;
  //Para que el modal en donde se ve el nombre y la categoria se abra debemos insertarle...
  //...un id al boton que tiene ese modal, seleccionarlo y traerlo con el evento click...
  //...a esta funcion para que se abra cuando le den click al boton editar y se vea la info
  btnAddCategoryModal.click();
}
