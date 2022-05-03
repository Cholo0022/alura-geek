const emailUsuario = "andres@gmail.com";
const passwordUsuario = "As123456";


const btnLogin = document.getElementById("btnLogin");


// producto-agregar.html

btnLogin.addEventListener("submit", () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    console.log(email.value, " - ", password.value);
})
