import {
  eliminarPaciente,
  traerPacientes,
  traerPaciente,
  actualizarPaciente,
} from "../../services/servicioPaciente.js"; //importa funciones de otro archivo JS

//Objetivo: recibir datos de back y renderizarlos en el Front

//1-A. quemar o simular los datos
/* let pacientes = [
    {
      id: 1,
      nombre: "Homero Simpson",
      anioNacimiento: "1996-01-18",
      ciudad: "Medellín",
      correo: "homerJSimpson@gmail.com",
      telefono: "3014562318",
      ips: "coopsana centro",
      poliza: true,
      grupoIngresos: "C",
      fechaAfiliacion: "2021-11-23",
    },
    {
      id: 2,
      nombre: "Marge Simpson",
      anioNacimiento: "1996-02-20",
      ciudad: "Medellín",
      correo: "margeSimpson@gmail.com",
      telefono: "3014569874",
      ips: "saludmed centro",
      poliza: true,
      grupoIngresos: "C",
      fechaAfiliacion: "2021-12-01",
    },
    {
      id: 3,
      nombre: "Bart Simpson",
      anioNacimiento: "1999-04-01",
      ciudad: "Medellín",
      correo: "bartSimpson@gmail.com",
      telefono: "3014562345",
      ips: "coopsana sur",
      poliza: false,
      grupoIngresos: "D",
      fechaAfiliacion: "2022-01-15",
    },
    {
      id: 4,
      nombre: "Lisa Simpson",
      anioNacimiento: "2002-05-09",
      ciudad: "Medellín",
      correo: "lisaSimpson@gmail.com",
      telefono: "3014567890",
      ips: "saludmed norte",
      poliza: true,
      grupoIngresos: "B",
      fechaAfiliacion: "2022-03-10",
    },
  ]; */

function mostrarPacientes() {
  //2. crear una referencia a una etiqueta html donde vamos a renderizar
  let fila = document.getElementById("fila");
  fila.innerHTML = "";

  //1-B Llamar el API
  traerPacientes()
    .then((pacientes) => {
      let contadorPacientesRegistrados =
        document.querySelector("#cantidadRegistros");
      contadorPacientesRegistrados.innerHTML = pacientes.length;
      //3. se recorren los datos del arreglo para obtenerlos de forma separada
      pacientes.forEach((paciente) => {
        console.log(paciente);
        //4. Se crean columnas
        let columna = document.createElement("div");
        columna.classList.add("col", "position-relative");

        //5. Se crea tarjetas
        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card", "p-5", "h-100", "shadow");

        let nombre = document.createElement("h2");
        nombre.textContent = paciente.nombre;

        let ciudadPaciente = document.createElement("p");
        ciudadPaciente.textContent = "🏙 " + paciente.ciudad;
        ciudadPaciente.classList.add("text-warning");

        let telefonoPaciente = document.createElement("p");
        telefonoPaciente.textContent = "📞 " + paciente.telefono;

        let ipsPaciente = document.createElement("p");
        ipsPaciente.textContent = "🏥  " + paciente.ips;

        let acciones = document.createElement("p");
        acciones.innerHTML = `
              <span title="Editar" id="Ed-${paciente.id}" data-bs-toggle="modal" data-bs-target="#exampleModal">📝</span> 
              <span title="Eliminar" id="El-${paciente.id}">🗑</span>`;
        acciones.classList.add(
          "align-self-end",
          "position-absolute",
          "top-0",
          "end-0",
          "mt-2",
          "me-2"
        );

        tarjeta.appendChild(nombre);
        tarjeta.appendChild(ciudadPaciente);
        tarjeta.appendChild(telefonoPaciente);
        tarjeta.appendChild(ipsPaciente);
        tarjeta.appendChild(acciones);
        columna.appendChild(tarjeta);
        fila.appendChild(columna);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

let card = document.querySelector("#fila");
card.addEventListener("click", (event) => {
  if (event.target.title == "Eliminar") {
    eliminar(event.target.id.slice(3));
  }
  if (event.target.title == "Editar") {
    actualizar(event.target.id.slice(3));
  }
});

function eliminar(id) {
  Swal.fire({
    title: "¿Deseas eliminar el registro?",
    text: "No podrás deshacer esta acción",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminar!",
  }).then((result) => {
    if (result.isConfirmed) {
      eliminarPaciente(id)
        .then(() => {
          Swal.fire({
            title: "Eliminado!",
            text: "El registro ha sido eliminado",
            icon: "success",
            toast: true,
            position: "top-end",
            timer: 1500,
            showConfirmButton: false,
          });
          mostrarPacientes();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarPacientes();
});

function actualizar(id) {
  let nombrePaciente = document.getElementById("nombrepaciente");
  let nacimietoPaciente = document.getElementById("nacimientopaciente");
  let ciudadPaciente = document.getElementById("ciudadpaciente");
  let correoPaciente = document.getElementById("correopaciente");
  let telefonoPaciente = document.getElementById("telefonopaciente");
  let ipsPaciente = document.getElementById("ipspaciente");
  let grupoIngresosPaciente = document.getElementById("grupoingresospaciente");
  let afiliacionPaciente = document.getElementById("afiiacionpaciente");
  let polizaPaciente = document.getElementById("polizapaciente");

  traerPaciente(id)
    .then((paciente) => {
      console.log(paciente);
      nombrePaciente.value = paciente.nombre;
      nacimietoPaciente.value = paciente.anioNacimiento;
      ciudadPaciente.value = paciente.ciudad;
      correoPaciente.value = paciente.correo;
      telefonoPaciente.value = paciente.telefono;
      ipsPaciente.value = paciente.ips;
      grupoIngresosPaciente.value = paciente.grupoIngresos;
      afiliacionPaciente.value = paciente.fechaAfiliacion;
      polizaPaciente.checked = paciente.poliza;
      console.log(nombrePaciente);
    })
    .catch((error) => {
      console.log(error);
    });

  let botonGuardar = document.querySelector("#botonguardarpaciente");

  botonGuardar.addEventListener("click", () => {
    let pacienteActualizado = {
      nombre: nombrePaciente.value,
      anioNacimiento: nacimietoPaciente.value,
      ciudad: ciudadPaciente.value,
      correo: correoPaciente.value,
      telefono: telefonoPaciente.value,
      ips: ipsPaciente.value,
      poliza: polizaPaciente.checked,
      grupoIngresos: grupoIngresosPaciente.value,
      fechaAfiliacion: afiliacionPaciente.value,
    };

    console.log(pacienteActualizado);

    Swal.fire({
      title: "¿Deseas actualizar el registro?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, actualizar!",
    }).then((result) => {
      if (result.isConfirmed) {
        actualizarPaciente(pacienteActualizado, id)
          .then(() => {
            let ventanaModal =
              bootstrap.Modal.getOrCreateInstance("#exampleModal");
            ventanaModal.hide();
            Swal.fire({
              title: "Actualizado!",
              text: "El registro ha sido modificado",
              icon: "success",
              toast: true,
              position: "top-end",
              timer: 1500,
              showConfirmButton: false,
            });
            mostrarPacientes();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  });
}
