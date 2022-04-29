import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
    // console.log(input.target);
  });
});

const textarea = document.querySelector("#mensaje");

textarea.addEventListener("blur", (textarea) => {
  valida(textarea.target);
  // console.log(textarea.target);
});
