import { guardarEnfermedad } from "../services/servicioEnfermedad.js";

let nombreEnfermedad = document.getElementById("nombreenfermedad");
let sintomas = document.getElementById("sintomasenfermedad");
let clasificacion = document.getElementById("casificacionenfermedad");
let grado = document.getElementById("gradoenfermedad");
let probVida = document.getElementById("probabilidadvidaenfermedad");

let botonRegistrarEnfermedad = document.getElementById(
  "botonregistroefermedad"
);

botonRegistrarEnfermedad.addEventListener("click", (evento) => {
  evento.preventDefault();

  let enfermedad = {
    nombre: nombreEnfermedad.value,
    sintomas: sintomas.value,
    clasificacion: clasificacion.value,
    grado: grado.value,
    probabilidadVida: probVida.value,
  };

  console.log(enfermedad);
  guardarEnfermedad(enfermedad)
    .then((respuesta) => {
      Swal.fire({
        title: "Registro exitoso",
        text: "Se ha ingresado enfermedad",
        icon: "success",
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
