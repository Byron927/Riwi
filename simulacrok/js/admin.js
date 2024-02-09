//selectores

const URLBase = "http://localhost:3000";
const formNewNotice = document.getElementById("form-notice");
const formCategory = document.getElementById("form-category");
const selectCategory = document.getElementById("idCategory");
const tbodyCategories = document.getElementById("categorias-tbody");
const tbodyNotices = document.getElementById("notices-tbody");

let cache;
document.addEventListener("DOMContentLoaded", () => {
  loadingSelectCategory();
  getCategories();
  getNotices();
});
tbodyNotices.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    const id = e.target.getAttribute("data-id");
    deleteNew(id);
  }
  if (e.target.classList.contains("edit")) {
    const id = e.target.getAttribute("data-id");
    cache = id;
    pintarModal2(id);
  }
});
tbodyCategories.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    const id = e.target.getAttribute("data-id");
    deleteCategory(id);
  }
  if (e.target.classList.contains("edit")) {
    const id = e.target.getAttribute("data-id");
    cache = id;
    console.log(id);
    pintarModal(id);
  }
  // if (e.target.classList.contains("closet")) {
  //   console.log("object");
  //   formCategory.reset();
  // } preguntar a kevin
});

async function pintarModal(id) {
  const response = await fetch(`${URLBase}/categories/${id}`);
  const data = await response.json();
  const name = document.getElementById("nameCategory");
  const description = document.getElementById("descriptionCategory");
  name.value = data.name;
  description.value = data.description;
}

async function pintarModal2(id) {
  const response = await fetch(`${URLBase}/news/${id}`);
  const data = await response.json();
  console.log(data);

  const name = document.getElementById("nameNotice");
  const url = document.getElementById("urlImage");
  const category = document.getElementById("idCategory");
  const description = document.getElementById("contentNotice");
  name.value = data.name;
  url.value = data.description;
  category.value = data.categoryId; //Kevin
  description.value = data.description;
}

async function deleteNew(id) {
  await fetch(`${URLBase}/news/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

async function deleteCategory(id) {
  await fetch(`${URLBase}/categories/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

async function editCategory(category) {
  await fetch(`${URLBase}/categories/${cache}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });
  cache = undefined;
}

async function getCategories() {
  const response = await fetch(`${URLBase}/categories`);
  const data = await response.json();
  pintarCategory(data);
}

async function getNotices() {
  const response = await fetch(`${URLBase}/news?_embed=user&_embed=category`);
  const data = await response.json();
  // pantalla del administrador
  pintarNotices(data);
}


function pintarNotices(data) {
  cleanHTML2();
  data.forEach((notice) => {
    const tr = document.createElement("tr");
    tr.innerHTML += `
                <td>
                  <div class="img-container">
                    <img
                      src="${notice.url}"
                      alt="photo"
                    />
                  </div>
                </td>
                <td>${notice.name}</td>
                <td>${notice.description}</td>
                <td>${notice.date}</td>
                <td>${notice.user.name}</td>
                <td>${notice.category.name}</td>
                <td class="d-flex flex-column gap-1">
                  <button data-id="${notice.id}" class="btn btn-primary edit" data-bs-toggle="modal"
                  data-bs-target="#modal-notice">Edit</button>
                  <button data-id="${notice.id}" class="btn btn-danger delete">Delete</button>
                </td>
              `;
    tbodyNotices.appendChild(tr);
  });
}

function pintarCategory(data) {
  cleanHTML1();
  data.forEach((category, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML += `<td>${i + 1}</td>
                <td>${category.name}</td>
                <td>${category.description}</td>
                <td>
                  <button data-id="${
                    category.id
                  }"class="btn btn-primary edit" data-bs-toggle="modal" data-bs-target="#modal-category">Edit</button>
                  <button data-id="${
                    category.id
                  }" class="btn btn-danger delete">Delete</button>
                </td>`;

    tbodyCategories.appendChild(tr);
  });
}

function cleanHTML2() {
  while (tbodyNotices.firstChild) {
    tbodyNotices.removeChild(tbodyNotices.firstChild);
  }
}

function cleanHTML1() {
  while (tbodyCategories.firstChild) {
    tbodyCategories.removeChild(tbodyCategories.firstChild);
  }
}

formCategory.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(formCategory);
  const newCategory = {};

  for (const [key, value] of formData) {
    newCategory[key] = value;
  }
  if (cache === undefined) {
    createCategory(newCategory);
    formCategory.reset();
  } else {
    editCategory(newCategory);
    formCategory.reset();
  }
});

formNewNotice.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formNewNotice);
  const newNotice = {};

  for (const [key, value] of formData) {
    newNotice[key] = value;
  }
  if (cache === undefined) {
    createNotice(newNotice);
    formNewNotice.reset();
  }
  //else {
  //   editCategory(newNotice);
  //   formNewNotice.reset();
  // }
});

async function createNotice(notice) {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  const hoy = new Date();
  notice.userId = user[0].id;
  notice.date = hoy.toLocaleDateString();

  await fetch(`${URLBase}/news`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(notice),
  });
}

async function createCategory(category) {
  await fetch(`${URLBase}/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });
}

async function loadingSelectCategory() {
  const response = await fetch(`${URLBase}/categories`);
  const data = await response.json();

  data.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.id;
    option.textContent = category.name;
    selectCategory.appendChild(option);
  });
}
