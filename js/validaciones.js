<<<<<<< HEAD
export function valida(boxes) {
  const tipoDeInput = boxes.dataset.tipo;

  if (boxes.validity.valid) {
    boxes.parentElement.classList.remove("input-container--invalid");
    boxes.parentElement.querySelector(".input-mensaje-error").innerHTML = "";
  } else {
    boxes.parentElement.classList.add("input-container--invalid");
    boxes.parentElement.querySelector(".input-mensaje-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, boxes);
=======
export function valida(input) {
  const tipoDeInput = input.dataset.tipo;

  // console.log(tipoDeInput);
  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
>>>>>>> 561b125166689ddde8ae19745961927f9a5cc5a3
  }
}

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensajesDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío",
  },
<<<<<<< HEAD
  // email: {
  //   valueMissing: "El campo correo no puede estar vacío",
  //   typeMismatch: "El correo no es válido",
  // },
  // password: {
  //   valueMissing: "El campo contraseña no puede estar vacío",
  //   patternMismatch:
  //     "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
  // },
  mensaje: {
    valueMissing: "Este campo no puede estar vacío",
  },
  
};

function mostrarMensajeDeError(tipoDeInput, boxes) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (boxes.validity[error]) {
      console.log(tipoDeInput, error);
      console.log(boxes.validity[error]);
=======
  email: {
    valueMissing: "El campo correo no puede estar vacío",
    typeMismatch: "El correo no es válido",
  },
  password: {
    valueMissing: "El campo contraseña no puede estar vacío",
    patternMismatch: "Mínimo ocho caracteres, al menos una letra y un número.",
  },

  mensaje: {
    valueMissing: "Este campo mensaje no puede estar vacío",
    patternMismatch: "Elmensaje debe contener hasta 120 caracteres.",
  },
};

function mostrarMensajeDeError(tipoDeInput, input, textarea) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      console.log(tipoDeInput, error);
      console.log(input.validity[error]);
>>>>>>> 561b125166689ddde8ae19745961927f9a5cc5a3
      console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}
<<<<<<< HEAD

=======
>>>>>>> 561b125166689ddde8ae19745961927f9a5cc5a3
