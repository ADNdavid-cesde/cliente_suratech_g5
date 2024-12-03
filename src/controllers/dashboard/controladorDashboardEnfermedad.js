import {
  eliminarEnfermedad,
  traerEnfermedad,
  traerEnfermedades,
  actualizarEnfermedad,
} from "../../services/servicioEnfermedad.js";

/* let enfermedades = [
    {
        "id": 1,
        "nombre": "Enfermedad Cardiovascular",
        "sintomas": ["Dolor en el pecho", "Dificultad para respirar", "Fatiga", "Mareos"],
        "clasificacion": "Enfermedades del corazón",
        "grado": "Crónica",
        "probabilidadVida": "Moderada"
      },
      {
        "id": 2,
        "nombre": "Diabetes Tipo 2",
        "sintomas": ["Aumento de la sed", "Micción frecuente", "Visión borrosa", "Fatiga", "Pérdida de peso"],
        "clasificacion": "Enfermedades metabólicas",
        "grado": "Crónica",
        "probabilidadVida": "Alta con tratamiento adecuado"
      },
      {
        "id": 3,
        "nombre": "Cáncer de Pulmón",
        "sintomas": ["Tos persistente", "Dificultad para respirar", "Dolor en el pecho", "Pérdida de peso inexplicada"],
        "clasificacion": "Neoplasias",
        "grado": "Severa",
        "probabilidadVida": "Baja sin tratamiento temprano"
      },
      {
        "id": 4,
        "nombre": "Hipertensión Arterial",
        "sintomas": ["Dolores de cabeza", "Mareos", "Fatiga", "Visión borrosa", "Dolor en el pecho"],
        "clasificacion": "Enfermedades cardiovasculares",
        "grado": "Crónica",
        "probabilidadVida": "Alta con tratamiento adecuado"
      },
      {
        "id": 5,
        "nombre": "Enfermedad de Alzheimer",
        "sintomas": ["Pérdida de memoria", "Confusión", "Dificultad para comunicarse", "Cambios en el comportamiento"],
        "clasificacion": "Enfermedades neurodegenerativas",
        "grado": "Progresiva",
        "probabilidadVida": "Variable, dependiendo de la etapa y el cuidado"
      }
]; */

function mostrarEnfermedades() {
  //2. crear una referencia a una etiqueta html donde vamos a renderizar
  let fila = document.getElementById("fila");
  fila.innerHTML = "";

  traerEnfermedades()
    .then((enfermedades) => {
      let contadorEnfermedadesRegistradas =
        document.querySelector("#cantidadRegistros");
      contadorEnfermedadesRegistradas.innerHTML = enfermedades.length;
      //3. se recorren los datos del arreglo para obtenerlos de forma separada
      enfermedades.forEach((enfermedad) => {
        console.log(enfermedad);
        //4. Se crean columnas
        let columna = document.createElement("div");
        columna.classList.add("col", "position-relative");

        //5. Se crea tarjetas
        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card", "p-5", "h-100", "shadow");

        let nombre = document.createElement("h2");
        nombre.textContent = enfermedad.nombre;

        let sintomas = document.createElement("p");
        sintomas.textContent = "🤒 " + enfermedad.sintomas;
        sintomas.classList.add("text-warning");

        let clasificacion = document.createElement("p");
        clasificacion.textContent = "📑 " + enfermedad.clasificacion;

        let grado = document.createElement("p");
        grado.textContent = "📈  " + enfermedad.grado;

        let acciones = document.createElement("p");
        acciones.innerHTML = `
              <span title="Editar" id="Ed-${enfermedad.id}" data-bs-toggle="modal" data-bs-target="#exampleModal">📝</span> 
              <span title="Eliminar" id="El-${enfermedad.id}">🗑</span>`;
        acciones.classList.add(
          "align-self-end",
          "position-absolute",
          "top-0",
          "end-0",
          "mt-2",
          "me-2"
        );

        tarjeta.appendChild(nombre);
        tarjeta.appendChild(sintomas);
        tarjeta.appendChild(clasificacion);
        tarjeta.appendChild(grado);
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
      eliminarEnfermedad(id)
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
          mostrarEnfermedades();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarEnfermedades();
});

function actualizar(id) {
  let nombreEnfermedad = document.getElementById("nombreenfermedad");
  let sintomas = document.getElementById("sintomasenfermedad");
  let clasificacion = document.getElementById("casificacionenfermedad");
  let grado = document.getElementById("gradoenfermedad");
  let probVida = document.getElementById("probabilidadvidaenfermedad");

  traerEnfermedad(id)
    .then((enfermedad) => {
      console.log(enfermedad);
      nombreEnfermedad.value = enfermedad.nombre;
      sintomas.value = enfermedad.sintomas;
      clasificacion.value = enfermedad.clasificacion;
      grado.value = enfermedad.grado;
      probVida.value = enfermedad.probabilidadVida;
      console.log(nombreEnfermedad);
    })
    .catch((error) => {
      console.log(error);
    });

  let botonGuardar = document.querySelector("#botonguardarenfermedad");
  console.log(botonGuardar);
  botonGuardar.addEventListener("click", () => {
    let enfermedadActualizada = {
      nombre: nombreEnfermedad.value,
      sintomas: sintomas.value,
      clasificacion: clasificacion.value,
      grado: grado.value,
      probabilidadVida: probVida.value,
    };

    Swal.fire({
      title: "¿Deseas actualizar el registro?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, actualizar!",
    }).then((result) => {
      if (result.isConfirmed) {
        actualizarEnfermedad(enfermedadActualizada, id)
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
            mostrarEnfermedades();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  });
}
