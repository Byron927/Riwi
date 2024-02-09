function main() {
  let flag = true;
  do {
    const opcion = menu();
    switch (opcion) {
      case "1":
        agregarProducto();
        break;
      case "2":
        eliminarProducto();
        break;
      case "3":
        modificarProducto();
        break;
      case "6":
        mostrarReporte();
        break;
      case "7":
        mostrarAlerta("Saliendo del sistema");
        flag = false;
        break;
      default:
        mostrarAlerta();
    }
  } while (flag);
}

function modificarProducto() {
  const listaString = mostrarReporte(false);
  const idModificar = prompt(
    listaString +
      `\n\nIngrese el identificador del producto que desea actualizar`
  );
  if (!listaDeProductos.some((producto) => producto.id == idModificar)) {
    mostrarAlerta("No existen productos con este identificador");
    return;
  }
  const objModificar = listaDeProductos.find(
    (producto) => producto.id == idModificar
  );
  const datos = obtenerDatos(objModificar);
  // Object.keys(objModificar).map((key) => (objModificar[key] = datos[key]));
  // la linea anterior comentada es lo mismo de abajo pero en una linea
  objModificar.nombre = datos.nombre;
  objModificar.categoria = datos.categoria;
  objModificar.cantidad = datos.cantidad;
  objModificar.precio = datos.precio;
  mostrarAlerta(`El producto se modifico correctamente`);
}
function obtenerDatos(
  obj = {
    nombre: "",
    categoria: "",
    cantidad: "",
    precio: "",
  }
) {
  nombre = prompt("Ingrese el nombre del producto", obj.nombre);
  categoria = prompt("Ingrese la categoria del producto", obj.categoria);
  cantidad = Number(prompt("Ingrese la cantidad del producto", obj.cantidad));
  precio = Number(prompt("Ingrese el precio del producto", obj.precio));

  //Validacion de numeros
  if (isNaN(cantidad) || isNaN(precio)) {
    mostrarAlerta("Cantidad y precio deben ser numericos");
    return;
  }
  return { nombre, categoria, cantidad, precio };
}

function agregarProducto() {
  const objNuevo = obtenerDatos();
  const id = Date.now();
  // cuando la key es igual a la variable nueva que se quiere agregar se deja como esta abajo
  const nuevoProducto = { id, ...objNuevo };
  listaDeProductos.unshift(nuevoProducto);
}
function eliminarProducto() {
  mostrarReporte();
  const nombreEliminar = prompt("Ingresa el nombre del producto a Eliminar");
  if (
    !listaDeProductos.some(
      (producto) =>
        producto.nombre.toLowerCase() == nombreEliminar.toLowerCase()
    )
  ) {
    mostrarAlerta(`No existe productos con el nombre ${nombreEliminar}`);
    return;
  }

  listaDeProductos = listaDeProductos.filter(
    (producto) => producto.nombre.toLowerCase() != nombreEliminar.toLowerCase()
  );
  mostrarAlerta(
    `Los productos con el nombre ${nombreEliminar} fueron eliminados exitosamente`
  );
}

function mostrarAlerta(mensaje = "Opcion no valida") {
  alert(mensaje);
}
function menu() {
  const opcion = prompt(`
  MENU DE OPCIONES
  1. Agregar producto
  2. Eliminar producto
  3. Modificar producto
  4. Buscar por nombre
  5. Filtrar por rango de precios
  6. Crear reporte de inventario ordenado
  7. Salir

  Ingrese una opcion:
  `);
  return opcion;
}
function mostrarReporte(imprimir = true) {
  if (listaDeProductos.length < 0) {
    mostrarAlerta("No hay productos para reportar");
    return;
  }
  // ordena (muta) la listaDeProductos
  listaDeProductos.sort((a, b) => a.categoria.localeCompare(b.categoria));

  const fechaHoy = new Date().toDateString();
  let listaString = `Lista de productos ${fechaHoy}`;

  listaDeProductos.forEach((producto, index) => {
    const { id, nombre, categoria, cantidad, precio } = producto;
    listaString += `\n${
      index + 1
    }. id: ${id}, Nombre: ${nombre}, Categoria: ${categoria}, Cantidad: ${cantidad}, Precio: ${precio}\n`;
  });
  if (imprimir) {
    mostrarAlerta(listaString);
    return;
  }
  return listaString;
}
main();
