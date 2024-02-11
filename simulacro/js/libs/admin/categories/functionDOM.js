import { cleanHTML } from "../../utils/cleanHTML.js";
//Selector del tbody
const categoriesTbody = document.getElementById("categorias-tbody");

export function printCategories(categories) {
    //Limpiar el html para eliminar lo que está por defecto y no tiene base de datos...
    //...pero se comentará
  categoriesTbody.innerHTML = "";

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
      console.log("eliminando");
    });

    btnEdit.addEventListener("click", () => {
      console.log("editando");
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
