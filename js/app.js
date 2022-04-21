import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");
<<<<<<< HEAD
const textarea = document.querySelector("#mensaje")

textarea.addEventListener("blur", (textarea)=>{
  valida(textarea.target);
  console.log(textarea.target)
})

=======
>>>>>>> 561b125166689ddde8ae19745961927f9a5cc5a3

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
<<<<<<< HEAD
  });
});
=======
    console.log(input.target);
  });
});

const textarea = document.getElementById("mensaje");


valida(textarea);
>>>>>>> 561b125166689ddde8ae19745961927f9a5cc5a3
