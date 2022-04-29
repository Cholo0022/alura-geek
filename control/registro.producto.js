const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const img = document.getElementById("img").value;
  const nombre = document.getElementById("nombre").value;
  const precio = document.getElementById("precio").value;
  const descripcion = document.getElementById("descripcion").value;
  const tipoProducto = document.getElementById("tipo").value;
  console.log(
    img,
    " - ",
    nombre,
    " - ",
    precio,
    " - ",
    descripcion,
    " - ",
    tipoProducto
  );
});
