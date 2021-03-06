const listaProductos = () =>
  fetch("https://app-alura-geek.herokuapp.com/producto").then((response) =>
    response.json()
  );

const crearProducto = (url, nombre, precio, descripcion, tipo) => {
  return fetch("https://app-alura-geek.herokuapp.com/producto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url,
      nombre,
      precio,
      descripcion,
      tipo,
      id: uuid.v4(),
    }),
  });
};

const eliminarProducto = (id) => {
  return fetch(`https://app-alura-geek.herokuapp.com/producto/${id}`, {
    method: "DELETE",
  });
};

const detalleProducto = (id) => {
  return fetch(`https://app-alura-geek.herokuapp.com/producto/${id}`).then(
    (respuesta) => respuesta.json()
  );
};

const actualizarProducto = (url, nombre, precio, descripcion, tipo, id) => {
  return fetch(`https://app-alura-geek.herokuapp.com/producto/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url, nombre, precio, descripcion, tipo }),
  })
    .then((respuesta) => console.log(respuesta))
    .catch((err) => console.log(err));
};

export const productoServices = {
  listaProductos,
  crearProducto,
  eliminarProducto,
  detalleProducto,
  actualizarProducto,
};
