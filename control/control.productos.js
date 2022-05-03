import { productoServices } from "../js/productos.service.js";

const crearNuevaLinea = (url, nombre, precio, tipo) => {
  const linea = document.createElement("div");
  const contenido = `
        <div class="producto">
            <img src="${url}" alt="Imagen de consola" class="producto__imagen" />
            <p class="producto__nombre">${nombre}</p>
            <p class="producto__precio">${precio}</p>
            <a class="verProducto" href="">Ver Producto</a><br />
            <a class="modificar" href="">Modificar</a>
            <a class="eliminar" href="">Eliminar</a>
        </div>`;
  linea.innerHTML = contenido;
  return linea;
};

const starWars = document.querySelector("[data-starWars]");
const consolas = document.querySelector("[data-consolas]");
const diversos = document.querySelector("[data-diversos]");

let contadorConsolas = 0;
let contadorStarWars = 0;
let contadorDiversos = 0;

productoServices
  .listaProductos()
  .then((data) => {
    data.forEach((producto) => {
      if (producto.tipo === "starWars" && contadorStarWars < 6) {
        contadorStarWars = +1;
        const nuevaLinea = crearNuevaLinea(
          producto.url,
          producto.nombre,
          producto.precio
        );
        starWars.appendChild(nuevaLinea);
      }
      if (producto.tipo === "consolas" && contadorConsolas < 6) {
        contadorConsolas = +1;
        const nuevaLinea = crearNuevaLinea(
          producto.url,
          producto.nombre,
          producto.precio
        );
        consolas.appendChild(nuevaLinea);
      }
      if (producto.tipo === "diversos" && contadorDiversos < 6) {
        contadorDiversos += 1;
        const nuevaLinea = crearNuevaLinea(
          producto.url,
          producto.nombre,
          producto.precio
        );
        diversos.appendChild(nuevaLinea);
      }
    });
  })
  .catch((error) => console.log("Ocurrió un error"));

const verTodosProductos = document.querySelector("[data-verTodos]");
productoServices
  .listaProductos()
  .then((data) => {
    data.forEach((producto) => {
      const nuevaLinea = crearNuevaLinea(
        producto.url,
        producto.nombre,
        producto.precio
      );
      verTodosProductos.appendChild(nuevaLinea);
    });
  })
  .catch((error) => console.log("Ocurrió un error"));
