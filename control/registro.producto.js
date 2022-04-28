const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const img = document.getElementById("img").;
    const nombre = document.getElementById("nombre");
    const precio = document.getElementById("precio");
    const descripcion = document.getElementById("descripcion");
    console.log(img ," - ", nombre, " - ", precio, " - ", descripcion)
})