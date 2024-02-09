// selectores
const tbody = document.querySelector("#tbody");
const alerta = document.querySelector("#alerta");
const tituloDrawer = document.querySelector("#offcanvasNavbarLabel");
const btnPrincipalAgregar = document.querySelector("#btnOpenDrawerInsert");

//selectores de inputs (entradas)
const nombreProducto = document.querySelector("#nombre_producto");
const cantidadProducto = document.querySelector("#cantidad_producto");
const precioProducto = document.querySelector("#precio_producto");
const imagenProducto = document.querySelector("#imagen_producto");
const categoriaProducto = document.querySelector("#categoria_producto");

let productCache;
//Botones
const btnAgregar = document.querySelector("#btn_agregar");
btnPrincipalAgregar.addEventListener("click", function (event) {
  tituloDrawer.innerHTML = "<i class='bx bx-cart-download'></i>Nuevo Producto";
  btnAgregar.textContent = "Agregar";
  document.querySelector("#form_productos").reset();
});
//Eventos
//cuando el usuario haga click dentro del boton btnAgregar se ejecutara una funcion
btnAgregar.addEventListener("click", function (event) {
  //quito los eventos por defecto
  event.preventDefault();
  //si el usuario dio click se ejecuta esta funcion
  agregarProducto();
});
//escuchar cuando el usuario de click en el cuerpo de la tabla
tbody.addEventListener("click", (event) => {
  //si a la etiqueta en la que se ejecuto el evento contiene la clase delete-product entonces
  if (event.target.classList.contains("delete-product")) {
    //obtener el id del producto
    const id = event.target.getAttribute("data-id");
    if (id) eliminarProducto(id);
    mostrarProductos();
    return;
  }
  //si la etiqueta contiene la clase edit-product queire decir que estamos editando
  if (event.target.classList.contains("edit-product")) {
    //obtener el id del producto
    const id = event.target.getAttribute("data-id");
    if (id) cargarInformacion(id);
  }
});
function eliminarProducto(id) {
  //filtro todos los productos
  listaProductos = listaProductos.filter((producto) => producto.id != id);
}

// esta informacion se encarga de mostrar los valores en el drawer
function cargarInformacion(id) {
  //busco el producto que contenga ese id
  productCache = listaProductos.find((producto) => producto.id == id);
  //asignar el valor a cada input
  nombreProducto.value = productCache.nombre;
  precioProducto.value = productCache.precio;
  cantidadProducto.value = productCache.cantidad;
  categoriaProducto.value = productCache.categoria;
  imagenProducto.value = productCache.imagen;
  //selecciono el boton de editar desde el HTML
  const drawer = document.querySelector("#btnOpenDrawerEdit");

  drawer.click();
  //para agregar sea desde div e imagenes
  tituloDrawer.innerHTML = "<i class='bx bx-edit-alt'></i> Actualizar Producto";
  btnAgregar.textContent = "Actualizar Producto";
}

//esta funcion se encarga de agregar y modificar un producto
function agregarProducto() {
  // le adicionamos clases a nuestra alerta de none para que no sea visible
  alerta.classList = "alert alert-danger d-none";
  //validar
  if (
    [
      nombreProducto.value,
      cantidadProducto.value,
      categoriaProducto.value,
      precioProducto.value,
    ].includes("")
  ) {
    alerta.textContent = "Todos los campos son obligatorios";
    alerta.classList.remove("d-none");
    return;
  }
  if (!productCache) {
    const nuevoProducto = {
      nombre: nombreProducto.value,
      cantidad: cantidadProducto.value,
      precio: precioProducto.value,
      imagen: imagenProducto.value,
      categoria: categoriaProducto.value,
      id: Date.now(),
    };
    listaProductos.push(nuevoProducto);
    alerta.textContent = `Se agrego correctamente ${nuevoProducto.nombre}`;
  } else {
    productCache.nombre = nombreProducto.value;
    productCache.precio = precioProducto.value;
    productCache.cantidad = cantidadProducto.value;
    productCache.categoria = categoriaProducto.value;
    productCache.imagen = imagenProducto.value;

    productCache = undefined;

    alerta.textContent = "Se actualizó correctamente el producto";
  }
  //mostrar alerta de exito
  alerta.classList = "alert alert-success";
  //escondo la alerta despues de 3 segundos
  setTimeout(() => {
    alerta.classList.add("d-none");
  }, 3000);

  //reseteamos el formulario
  document.querySelector("#form_productos").reset();
  //mostramos de nuevo los productos
  mostrarProductos();
}

//lista de productos
let listaProductos = [
  {
    id: Date.now(),
    nombre: "Pastas",
    precio: 5.0,
    cantidad: 10,
    imagen:
      "https://www.helios.es/wp-content/uploads/2023/01/helios_blog_sq-tipospasta-1200x700.jpg",
    categoria: "Carbohidrato",
  },
];

function mostrarProductos() {
  //limpiar tabla
  tbody.innerHTML = "";
  //recorro mi lista de objetos con foreach
  //donde producto es el item que se esta recorriendo en el momento
  //index es el indice correspondiente al item del momento
  listaProductos.forEach(function (producto, indice) {
    //desestructuramos el objeto (producto)
    const { cantidad, categoria, id, imagen, nombre, precio } = producto;
    const precioFormat = Number(precio).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    const imgDefault =
      "https://cdn.icon-icons.com/icons2/1368/PNG/512/-meal_89750.png";

    tbody.innerHTML += `
    <tr>
      <td class="indice">${indice + 1}</td>
      <td>
        <img 
        src="${imagen || imgDefault}" 
        alt="img producto" 
        class="rounded-circle"
        width="50px" 
        height="50px"
        />
      </td>
      <td>${nombre}</td>
      <td>${precioFormat}</td>
      <td>${categoria}</td>
      <td>${cantidad}</td>
      <td>
        <button class="btn btn-primary edit-product" data-id="${id}">Editar</button>
        <button class="btn btn-danger delete-product" data-id="${id}">Eliminar</button>
      </td>
    </tr>
    `;
  });
}

mostrarProductos();
