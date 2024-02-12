import { cleanHTML } from "../../utils/cleanHTML.js";
import { contentNotice, deleteNews, idNewsUpdate } from "../news/index.js";

const newsTbody = document.getElementById("news-tbody");
//boton para abrir el modal
const btnOpenModalNews = document.getElementById("btnOpenModalNews");

export function printNews(news) {
  cleanHTML(newsTbody);
  news.forEach((tempNew) => {
    const tr = document.createElement("tr");

    const tdImage = document.createElement("td");
    const tdTitle = document.createElement("td");
    const tdContent = document.createElement("td");
    const tdDate = document.createElement("td");
    const tdUser = document.createElement("td");
    const tdCategory = document.createElement("td");
    const tdActions = document.createElement("td");
    //creando la imagen
    const image = document.createElement("img");
    image.src = tempNew.image;
    image.width = "50";
    image.height = "50";
    //agregando clases de bootstrap para que sea un circulo
    image.classList.add("rounded-circle");
    //creando botones de edit y delete
    const btnEdit = document.createElement("button");
    const btnDelete = document.createElement("button");
    btnEdit.classList.add("btn", "btn-primary");
    btnDelete.classList.add("btn", "btn-danger");
    btnEdit.textContent = "Editar";
    btnDelete.textContent = "Eliminar";

    btnEdit.addEventListener("click", () => {
      loadInfoNews(tempNew);
    });

    btnDelete.addEventListener("click", () => {
      deleteNews(tempNew.id);
    });

    //info para lo demas
    tdTitle.textContent = tempNew.name;
    tdContent.textContent = tempNew.content;
    tdDate.textContent = tempNew.publicationDate;
    tdUser.textContent = tempNew.user.name;
    tdCategory.textContent = tempNew.category.name;

    //rellenando el td imagen
    tdImage.appendChild(image);
    tdActions.appendChild(btnEdit);
    tdActions.appendChild(btnDelete);

    //añadiendo todo al tr
    tr.appendChild(tdImage);
    tr.appendChild(tdTitle);
    tr.appendChild(tdContent);
    tr.appendChild(tdDate);
    tr.appendChild(tdUser);
    tr.appendChild(tdCategory);
    tr.appendChild(tdActions);

    //metiendo el tr dentro del tbody
    newsTbody.appendChild(tr);
  });
}

function loadInfoNews(newTemp) {
  btnOpenModalNews.click();
  nameNotice.value = newTemp.name;
  urlImage.value = newTemp.image;
  idCategory.value = newTemp.categoryId;
  contentNotice.value = newTemp.content;
  idNewsUpdate.value = newTemp.id;
}
