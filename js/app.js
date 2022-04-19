import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");
const textareas = document.querySelector("#mensaje");

console.log(text);

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});
