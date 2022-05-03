const listaProductos = () => fetch("http://localhost:3000/producto").then((response) => response.json());

const crearProducto = (url, nombre, precio, descripcion, tipo) => {
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({url, nombre, precio, descripcion, tipo, id:uuid.v4() }),
    });
};

const eliminarProducto = (id) =>{
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "DELETE",
    });
};

export const productoServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
}