import { productoServices } from "../js/productos.service.js";

const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const img = document.getElementById("img");
    const nombre = document.getElementById("nombre");
    const precio = document.getElementById("precio");
    const descripcion = document.getElementById("descripcion");
    const tipo = document.getElementById("tipo");

    // console.log(img, nombre, precio, descripcion, tipo)

    productoServices.detalleProducto(id).then(producto => {
        img.value = producto.url;
        nombre.value = producto.nombre;
        precio.value = producto.precio;
        descripcion.value = producto.descripcion;
        tipo.value = producto.tipo;
    });

}

obtenerInformacion();