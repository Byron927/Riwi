main();

let listaProductos = [];

const tbody = document.querySelector("#carrito tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");
const totalC = document.querySelector("#carrito tfoot");

const contenedorProductos = document.querySelector("#lista-productos");

const pantalonesBoton = document.querySelector(".pantalones");
const camisasBoton = document.querySelector(".camisas");
const descuantosBoton = document.querySelector(".descuentos");
const allProducts = document.querySelector(".all-products");

const cambiarTema = document.querySelector("#theme");

document.addEventListener("DOMContentLoaded", () => {
  let listaCache = localStorage.getItem("lp");
  if (listaCache) {
    listaProductos = JSON.parse(listaCache);
    mostrarProductos();
  }
});

vaciarCarrito.addEventListener("click", function (event) {
  event.preventDefault(); //evita que se recargue la pagina al hacer click en el boton
  listaProductos = [];
  tbody.innerHTML = "";
  totalC.innerHTML = "";
  localStorage.removeItem("lp");
  // localStorage.clear();
  // el .clear borra todo
  // mejor usar .removeItem y especificar que ls borrar
});

tbody.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("borrar-producto")) {
    const id = event.target.getAttribute("data-id");
    eliminarProducto(id);
    sumaTotal();
  }
});

contenedorProductos.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList.contains("agregar-carrito")) {
    const id = event.target.getAttribute("data-id");
    const card = event.target.parentElement.parentElement;
    agregarProducto(id, card);
    sumaTotal();
  }
});

pantalonesBoton.addEventListener("click", () =>
  mostrar("categoria", "pantalon")
);
camisasBoton.addEventListener("click", () => mostrar("categoria", "camisa"));
descuantosBoton.addEventListener("click", () => mostrar("descuento", true));
allProducts.addEventListener("click", main);

// cambiarTema.addEventListener("click", (event) => {
//   boddy.classList.
// } )
