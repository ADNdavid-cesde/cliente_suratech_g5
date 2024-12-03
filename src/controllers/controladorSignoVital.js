import { guardarSignoVital } from "../services/servicioSignoVital.js";

let fechaToma = document.getElementById("fechatoma");
let descripcion = document.getElementById("descripcion");
let signoVital = document.getElementById("signovital");

let botonRegistrarSignovital = document.getElementById(
  "botonregistrosignovital"
);

botonRegistrarSignovital.addEventListener("click", (evento) => {
  evento.preventDefault();

  let tomaSignoVital = {
    nombre: signoVital.value,
    valor: descripcion.value,
    fechaMedida: fechaToma.value,
  };

  console.log(tomaSignoVital);
  guardarSignoVital(tomaSignoVital)
    .then((respuesta) => {
      Swal.fire({
        title: "Registro exitoso",
        text: "Se ha registrado signo vital con éxito",
        icon: "success",
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
