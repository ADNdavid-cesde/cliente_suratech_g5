let nombreMedico = document.getElementById("nombremedico");
let matriculaMedico = document.getElementById("matriculamedico");
let especialidadMedico = document.getElementById("especialidadmedico");
let salarioMedico = document.getElementById("salariomedico");
let correoMedico = document.getElementById("correomedico");
let ipsMedico = document.getElementById("ipsmedico");
let direccionMedico = document.getElementById("direccionmedico");
let disponibilidadMedico = document.getElementById("disponibilidadmedico");
let telefonoMedico = document.getElementById("telefonomedico");

let botonRegistrarMedico = document.getElementById("botonregistromedico");

botonRegistrarMedico.addEventListener("click", (evento) => {
    evento.preventDefault();

    let medico ={
        nombre: nombreMedico.value,
        matriculaProfesional: matriculaMedico.value,
        especialidad: especialidadMedico.value,
        salario: salarioMedico.value,
        ips: ipsMedico.value,
        correo: correoMedico.value,
        telefono: telefonoMedico.value,
        direccionConsultorio: direccionMedico.value,
        finDeSemanaDisponible: disponibilidadMedico.value
    }

    console.log(medico);

    Swal.fire({
        title: "Registro exitoso",
        text: "Se ha ingresado  el medico con exito",
        icon: "success"
      });
});