function mostrarAutos(autos) {
  limpiarHTML();
  autos.forEach((auto) => {
    contenedor.innerHTML += `
        <div class="card">
          <img
            src="${auto.imagen}"
            alt=""
          />
          <div class="description-card">
            <p>${auto.marca} - ${auto.modelo} - ${auto.year}</p>
            <p>Transmision: ${auto.transmision}</p>
            <p>Puertas: ${auto.puertas}</p>
            <p>Color: ${auto.color}</p>
            <p>Precio: $${auto.precio.toString().toLocaleString("en-US", {
              currency: "USD",
              style: "currency",
            })}</p>
          </div>
        </div>`;
  });
}

function limpiarHTML() {
  while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
  }
}

function filtrarAutos() {
  const resultado = autos
    .filter(filtrarPorMarca)
    .filter(filtrarPorYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor);

  mostrarAutos(resultado);
}

function filtrarPorMarca(auto) {
  if (datosBusqueda.marca) {
    return datosBusqueda.marca === auto.marca;
  }
  return auto;
}

function filtrarPorYear(auto) {
  if (datosBusqueda.year) {
    return datosBusqueda.year == auto.year;
  }
  return auto;
}

function filtrarMinimo(auto) {
  if (datosBusqueda.minimo) {
    return Number(datosBusqueda.minimo) <= auto.precio;
  }
  return auto;
}

function filtrarMaximo(auto) {
  if (datosBusqueda.maximo) {
    return Number(datosBusqueda.maximo) >= auto.precio;
  }
  return auto;
}

function filtrarPuertas(auto) {
  if (datosBusqueda.puertas) {
    return datosBusqueda.puertas == auto.puertas;
  }
  return auto;
}
  
function filtrarTransmision(auto) {
  if (datosBusqueda.transmision) {
    return datosBusqueda.transmision == auto.transmision;
  }
  return auto;
}

function filtrarColor(auto) {
  if (datosBusqueda.color) {
    return datosBusqueda.color == auto.color;
  }
  return auto;
}
