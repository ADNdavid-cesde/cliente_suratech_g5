import { eliminarMedico } from "../../services/servicioMedico.js";

let medicos = [
  {
    id: 1,
    nombre: "Dr. Juan Pérez",
    matriculaProfesional: "123456",
    especialidad: "Cardiología",
    salario: 8000000,
    ips: "Clínica Santa María",
    correo: "juan.perez@clinicasantamaria.com",
    telefono: "+57 301 234 5678",
    direccionConsultorio: "Calle 45 No. 10-45, Bogotá",
    finDeSemanaDisponible: true,
  },
  {
    id: 2,
    nombre: "Dra. Laura Gómez",
    matriculaProfesional: "654321",
    especialidad: "Pediatría",
    salario: 6000000,
    ips: "Hospital Infantil Los Pinos",
    correo: "laura.gomez@hospitalpinos.com",
    telefono: "+57 312 345 6789",
    direccionConsultorio: "Avenida 12 No. 56-32, Medellín",
    finDeSemanaDisponible: false,
  },
  {
    id: 3,
    nombre: "Dr. Andrés Rodríguez",
    matriculaProfesional: "789012",
    especialidad: "Ortopedia",
    salario: 7500000,
    ips: "Clínica del Valle",
    correo: "andres.rodriguez@clinicadelvalle.com",
    telefono: "+57 317 890 1234",
    direccionConsultorio: "Calle 78 No. 22-11, Cali",
    finDeSemanaDisponible: true,
  },
  {
    id: 4,
    nombre: "Dra. Carmen Martínez",
    matriculaProfesional: "345678",
    especialidad: "Dermatología",
    salario: 7000000,
    ips: "Centro Dermatológico El Sol",
    correo: "carmen.martinez@dermatologiasol.com",
    telefono: "+57 318 123 4567",
    direccionConsultorio: "Carrera 13 No. 34-56, Barranquilla",
    finDeSemanaDisponible: true,
  },
  {
    id: 5,
    nombre: "Dr. Luis García",
    matriculaProfesional: "234567",
    especialidad: "Endocrinología",
    salario: 8500000,
    ips: "Clínica Médica Integral",
    correo: "luis.garcia@clinicamediintegral.com",
    telefono: "+57 320 456 7890",
    direccionConsultorio: "Calle 92 No. 19-23, Cartagena",
    finDeSemanaDisponible: false,
  },
];

function mostrarMedicos() {
  //2. crear una referencia a una etiqueta html donde vamos a renderizar
  let fila = document.getElementById("fila");
  fila.innerHTML = "";

  //3. se recorren los datos del arreglo para obtenerlos de forma separada
  medicos.forEach((medico) => {
    console.log(medicos);
    //4. Se crean columnas
    let columna = document.createElement("div");
    columna.classList.add("col", "position-relative");

    //5. Se crea tarjetas
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "p-5", "h-100", "shadow");

    let nombre = document.createElement("h2");
    nombre.textContent = medico.nombre;

    let especialidad = document.createElement("p");
    especialidad.textContent = "🩺 " + medico.especialidad;
    especialidad.classList.add("text-warning");

    let matricula = document.createElement("p");
    matricula.textContent = "💳 " + medico.matriculaProfesional;

    let ips = document.createElement("p");
    ips.textContent = "🏥  " + medico.ips;

    let acciones = document.createElement("p");
    acciones.innerHTML = `<span title="Editar">📝</span> <span title="Eliminar" alt="${medico.id}")>🗑</span>`;
    acciones.classList.add(
      "align-self-end",
      "position-absolute",
      "top-0",
      "end-0",
      "mt-2",
      "me-2"
    );

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(especialidad);
    tarjeta.appendChild(ips);
    tarjeta.appendChild(matricula);
    tarjeta.appendChild(acciones);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
  });
}

let card = document.querySelector("#fila");
card.addEventListener("click", (event)=>{
  if (event.target.title == 'Eliminar') {
    eliminar(event.target.alt)
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
      eliminarMedico(id)
        .then(() => {
          mostrarMedicos();
          Swal.fire({
            title: "Eliminado!",
            text: "El registro ha sido eliminado",
            icon: "success",
            toast: true,
            position: "top-end",
            timer: 1500,
            showConfirmButton: false,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarMedicos();
}); 