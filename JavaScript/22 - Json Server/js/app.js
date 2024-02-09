// selectores
const URLBase = "http://localhost:3000";
const nameUser = document.querySelector("#user-name");
const ageUser = document.querySelector("#user-age");
const idUser = document.querySelector("#user-id");
const form = document.querySelector("#form");
const tbody = document.querySelector("#tbody");
const users = getUsers();
let cache;
// eventos
document.addEventListener("DOMContentLoaded", () => {
  getUsers();
});

tbody.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("delete")) {
    const index = event.target.getAttribute("data-id");
    eliminar(index);
  }
  if (event.target.classList.contains("edit")) {
    const id = event.target.getAttribute("data-id");
    editar(id);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (cache === undefined) {
    createUser();
  } else {
    updateUser(cache);
  }
});

async function createUser() {
  //VERBOS HTTP
  //GET -> OBTENER
  //POST -> CREAR
  //PUT -> ACTUALIZAR
  //DELETE -> ELIMINAR
  //PATCH -> ACTUALIZAR PARCIAL

  const user = {
    name: nameUser.value,
    age: ageUser.value,
    id: Date.now(),
  };
  const response = await fetch(`${URLBase}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  getUsers();
}
async function getUsers() {
  //fetch trae por defecto GET
  const response = await fetch(`${URLBase}/users`);
  const data = await response.json();

  renderUser(data);
  return data;
}

function renderUser(users) {
  cleanTbody();
  users.forEach((user) => {
    const tr = document.createElement("tr");
    tr.innerHTML += `<td>${user.id}</td>
    <th>${user.name}</th>
    <th>${user.age}</th>
    <td><button class="edit btn btn-primary" data-id="${user.id}">Editar</button></td>
    <td><button class="delete btn btn-danger" data-id="${user.id}">Eliminar</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function cleanTbody() {
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
}

async function editar(id) {
  const data = await getUsers();
  const u = data.find((user) => user.id === id);
  nameUser.value = u.name;
  ageUser.value = u.age;
  cache = id;
}

async function updateUser(id) {
  // const data = await getUsers();
  // const u = data.find((user) => user.id === id);
  const user = {
    name: nameUser.value,
    age: ageUser.value,
  };
  await fetch(`${URLBase}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  cache = undefined;
}
put;
async function eliminar(id) {
  await fetch(`${URLBase}/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
