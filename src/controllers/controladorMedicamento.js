let nombreMedicamento = document.getElementById("nombremedicamento");
let presentacion = document.getElementById("presentacionmedicamento");
let dosis = document.getElementById("dosismedicamento");
let laboratorio = document.getElementById("laboratoriomedicamento");
let fechaCaducidad = document.getElementById("caducidadmedicamanto");
let contraindicaciones = document.getElementById("contraindicacionesmedicamento");
let regInvima = document.getElementById("invimamedicamento");
let copago = document.getElementById("copagomedicamento");

let botonRegistrarMedicamento = document.getElementById("botonregistromedicamento");

botonRegistrarMedicamento.addEventListener("click", (evento) => {
    evento.preventDefault();

    let medicamento = {
        nombre: nombreMedicamento.value,
        presentacion: presentacion.value,
        dosis: dosis.value,
        laboratorio: laboratorio.value,
        fechaCaducidad: fechaCaducidad.value,
        contraIndicaciones: contraindicaciones.value,
        registroInvima: regInvima.value,
        copago: copago.value
    }

    console.log(medicamento);

    Swal.fire({
        title: "Registro exitoso",
        text: "Se ha registrado  el medicamento con éxito",
        icon: "success"
      });
});