const crearNuevaLinea = (url, nombre, precio, tipo)=>{
    const linea = document.createElement("div");
    const contenido = `
    <div class="linea_productos" data-consola>
          <div class="producto">
            <img src="${url}" alt="Imagen de consola" class="producto__imagen" />
            <p class="producto__nombre">${nombre}</p>
            <p class="producto__precio">${precio}</p>
            <a href="#">Ver Producto</a>
    </div>`;
    linea.innerHTML = contenido;
    return linea;
}

const starWars = document.querySelector("[data-starWars]");
const consola = document.querySelector("[data-consolas]");
const diverso = document.querySelector("[data-diversos]")

const http = new XMLHttpRequest();

http.open("GET", "http://localhost:3000/producto");

http.send();

http.onload = ()=>{
    const data = JSON.parse(http.response);
    console.log(data);
    data.forEach(producto => {
        if (producto.tipo === "consola"){
            const nuevaLinea = crearNuevaLinea(producto.url, producto.nombre, producto.precio);
            consola.appendChild(nuevaLinea);
        }
        if (producto.tipo === "Star-Wars"){
            const nuevaLinea = crearNuevaLinea(producto.url, producto.nombre, producto.precio);
            starWars.appendChild(nuevaLinea);
        }
        if (producto.tipo === "Diverso"){
            const nuevaLinea = crearNuevaLinea(producto.url, producto.nombre, producto.precio);
            diverso.appendChild(nuevaLinea);
        }
    });
}