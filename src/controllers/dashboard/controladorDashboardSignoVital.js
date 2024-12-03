import {
  eliminarSignoVital,
  traerSignosVitales,
  traerSignoVital,
  actualizarSignoVital,
} from "../../services/servicioSignoVital.js";

/*let signosVitales = [
    {
        "id": 1,
        "nombre": "Frecuencia Cardiaca",
        "valor": 72,
        "fechaMedida": "2024-11-17T08:30:00"
      },
      {
        "id": 2,
        "nombre": "Presión Arterial",
        "valor": "120/80",
        "fechaMedida": "2024-11-17T08:32:00"
      },
      {
        "id": 3,
        "nombre": "Temperatura Corporal",
        "valor": 36.7,
        "fechaMedida": "2024-11-17T08:35:00"
      },
      {
        "id": 4,
        "nombre": "Frecuencia Respiratoria",
        "valor": 18,
        "fechaMedida": "2024-11-17T08:40:00"
      },
      {
        "id": 5,
        "nombre": "Saturación de Oxígeno",
        "valor": 98,
        "fechaMedida": "2024-11-17T08:42:00"
      }
];*/

function mostrarSignosVitales() {
  //2. crear una referencia a una etiqueta html donde vamos a renderizar
  let fila = document.getElementById("fila");
  fila.innerHTML = "";

  traerSignosVitales()
    .then((signosVitales) => {
      let contadorSignosVitalesRegistrados =
        document.querySelector("#cantidadRegistros");
      contadorSignosVitalesRegistrados.innerHTML = signosVitales.length;
      //3. se recorren los datos del arreglo para obtenerlos de forma separada
      signosVitales.forEach((signoVital) => {
        console.log(signoVital);
        //4. Se crean columnas
        let columna = document.createElement("div");
        columna.classList.add("col", "position-relative");

        //5. Se crea tarjetas
        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card", "p-5", "h-100", "shadow");

        let nombre = document.createElement("h2");
        nombre.textContent = signoVital.nombre;

        let valor = document.createElement("p");
        valor.textContent = "🔬 " + signoVital.valor;
        valor.classList.add("text-warning");

        let fechaMedida = document.createElement("p");
        fechaMedida.textContent = "📅 " + signoVital.fechaMedida;

        let acciones = document.createElement("p");
        acciones.innerHTML = `
              <span title="Editar" id="Ed-${signoVital.id}" data-bs-toggle="modal" data-bs-target="#exampleModal">📝</span> 
              <span title="Eliminar" id="El-${signoVital.id}">🗑</span>`;
        acciones.classList.add(
          "align-self-end",
          "position-absolute",
          "top-0",
          "end-0",
          "mt-2",
          "me-2"
        );

        tarjeta.appendChild(nombre);
        tarjeta.appendChild(valor);
        tarjeta.appendChild(fechaMedida);
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
      eliminarSignoVital(id)
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
          mostrarSignosVitales();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarSignosVitales();
});

function actualizar(id) {
  let fechaToma = document.getElementById("fechatoma");
  let descripcion = document.getElementById("descripcion");
  let nombreSignoVital = document.getElementById("signovital");

  traerSignoVital(id)
    .then((signoVital) => {
      console.log(signoVital);
      nombreSignoVital.value = signoVital.nombre;
      descripcion.value = signoVital.valor;
      fechaToma.value = signoVital.fechaMedida;
      console.log(signoVital);
    })
    .catch((error) => {
      console.log(error);
    });

  let botonGuardar = document.querySelector("#botonguardarsignoVital");

  botonGuardar.addEventListener("click", () => {
    let signoVitalActualizado = {
      nombre: nombreSignoVital.value,
      valor: descripcion.value,
      fechaMedida: fechaToma.value,
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
        actualizarSignoVital(signoVitalActualizado, id)
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
            mostrarSignosVitales();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  });
}
