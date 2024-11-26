import { guardarPaciente } from "../services/servicioPaciente.js"; //importa funciones de otro archivo JS

//Objetivo: Capturar los datos de un formulario

//1. por cada input, select, texarea del formulario se crea una avariable;
//2. Por cada variable debo utilizar el DOM para asociar el html con js;

let nombrePaciente = document.getElementById("nombrepaciente");
let nacimietoPaciente = document.getElementById("nacimientopaciente");
let ciudadPaciente = document.getElementById("ciudadpaciente");
let correoPaciente = document.getElementById("correopaciente");
let telefonoPaciente = document.getElementById("telefonopaciente");
let ipsPaciente = document.getElementById("ipspaciente");
let grupoIngresosPaciente = document.getElementById("grupoingresospaciente");
let afiliacionPaciente = document.getElementById("afiiacionpaciente");
let polizaPaciente = document.getElementById("polizapaciente");

//3. Crear una variable para asociarla al id del boton que se tiene en el html
let botonRegistrarPaciente = document.getElementById("botonregistropaciente");

//4. Detectamos acciones o eventos en el boton
botonRegistrarPaciente.addEventListener("click", (evento) => {
  evento.preventDefault(); //Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.

  //5.Se crea un JSON que capture datos del formulario
  let paciente = {
    nombre: nombrePaciente.value, //El orden de las llaves no importa, sim embargo el nombre debe coincidir con el del backEnd
    anioNacimiento: nacimietoPaciente.value,
    ciudad: ciudadPaciente.value,
    correo: correoPaciente.value,
    telefono: telefonoPaciente.value,
    ips: ipsPaciente.value,
    poliza: polizaPaciente.value == "on" ? true : false,
    grupoIngresos: grupoIngresosPaciente.value,
    fechaAfiliacion: afiliacionPaciente.value,
  };

  //6.  Se envia el JSON a la API(se envia datos al back)
  console.dir(paciente);
  //console.log(paciente);
  guardarPaciente(paciente)
    .then((respuesta) => {
      console.log(respuesta);
      Swal.fire({
        title: "Registro exitoso",
        text: "Ya eres parte de nuestra gran familia",
        icon: "success",
      });
    })
    .catch((error) => {
      console.log(error);
    });

});
