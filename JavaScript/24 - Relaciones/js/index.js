//selectores

const URLBase = "http://localhost:3000";
const form = document.getElementById("formAuthor");
const formBooks = document.getElementById("formBooks");
const selectAuthor = document.getElementById("idAuthor");

const listBooks = document.getElementById("listBooks");

//Events

document.addEventListener("DOMContentLoaded", () => {
  loadingSelectAuthor();
  getBooks();
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  console.log("object");
  const author = {};
  for (const [key, value] of formData) {
    author[key] = value;
  }
  NewAuthor(author);
});

formBooks.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formBooks);
  console.log("object");
  const book = {};
  for (const [key, value] of formData) {
    book[key] = value;
  }
  createBook(book);
});

//functions
async function getBooks() {
  const response = await fetch(`${URLBase}/books?_embed=author`);
  const data = await response.json();

  data.forEach((books) => {
    listBooks.innerHTML += `<li>Nombre: ${books.name} - Autor: ${books.author.name} </li>`;
  });
}

async function loadingSelectAuthor() {
  const response = await fetch(`${URLBase}/authors`);
  const data = await response.json();

  data.forEach((author) => {
    const option = document.createElement("option");
    option.value = author.id;
    option.textContent = author.name;
    selectAuthor.appendChild(option);
  });
}

async function NewAuthor(author) {
  //VERBOS HTTP
  //GET -> OBTENER
  //POST -> CREAR
  //PUT -> ACTUALIZAR
  //DELETE -> ELIMINAR
  //PATCH -> ACTUALIZAR PARCIAL
  await fetch(`${URLBase}/authors`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(author),
  });
}

async function createBook(book) {
  //VERBOS HTTP
  //GET -> OBTENER
  //POST -> CREAR
  //PUT -> ACTUALIZAR
  //DELETE -> ELIMINAR
  //PATCH -> ACTUALIZAR PARCIAL
  await fetch(`${URLBase}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
}
//http://localhost:3000/books?_embed=author
//tener en cuenta que para traer la relacion, debo usar "?_embed="
// &_embed= para agregar mas vinculos
