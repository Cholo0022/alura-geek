import { productoServices } from "../js/productos.service.js";

const form = document.querySelector("[data-form]");

const obtenerInformacion = () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const nombre = document.getElementById("nombre");
  const precio = document.getElementById("precio");
  const descripcion = document.getElementById("descripcion");
  const tipo = document.getElementById("tipo");

  productoServices.detalleProducto(id).then((producto) => {
    nombre.value = producto.nombre;
    precio.value = producto.precio;
    descripcion.value = producto.descripcion;
    tipo.value = producto.tipo;
  });
};

obtenerInformacion();

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  nombre.value = producto.nombre;
  precio.value = producto.precio;
  descripcion.value = producto.descripcion;
  tipo.value = producto.tipo;
  productoServices.actualizarProducto(
    img,
    nombre,
    precio,
    descripcion,
    tipo,
    id
  );
});
