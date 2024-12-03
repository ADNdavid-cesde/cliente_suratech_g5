import {
  eliminarMedicamento,
  traerMedicamentos,
  traerMedicamento,
  actualizarMedicamento,
} from "../../services/servicioMedicamento.js";

function mostrarMedicamentos() {
  //2. crear una referencia a una etiqueta html donde vamos a renderizar
  let fila = document.getElementById("fila");
  fila.innerHTML = "";

  traerMedicamentos()
    .then((medicamentos) => {
      let contadorMedicamentosRegistrados =
        document.querySelector("#cantidadRegistros");
      contadorMedicamentosRegistrados.innerHTML = medicamentos.length;
      //3. se recorren los datos del arreglo para obtenerlos de forma separada
      medicamentos.forEach((medicamento) => {
        console.log(medicamento);
        //4. Se crean columnas
        let columna = document.createElement("div");
        columna.classList.add("col", "position-relative");

        //5. Se crea tarjetas
        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card", "p-5", "h-100", "shadow");

        let nombre = document.createElement("h2");
        nombre.textContent = medicamento.nombre;

        let presentacion = document.createElement("p");
        presentacion.textContent = "💊 " + medicamento.presentacion;
        presentacion.classList.add("text-warning");

        let laboratorio = document.createElement("p");
        laboratorio.textContent = "🧬 " + medicamento.laboratorio;

        let registroInvima = document.createElement("p");
        registroInvima.textContent = "🔍  " + medicamento.registroInvima;

        let acciones = document.createElement("p");
        acciones.innerHTML = `
              <span title="Editar" id="Ed-${medicamento.id}" data-bs-toggle="modal" data-bs-target="#exampleModal">📝</span> 
              <span title="Eliminar" id="El-${medicamento.id}">🗑</span>`;
        acciones.classList.add(
          "align-self-end",
          "position-absolute",
          "top-0",
          "end-0",
          "mt-2",
          "me-2"
        );

        tarjeta.appendChild(nombre);
        tarjeta.appendChild(presentacion);
        tarjeta.appendChild(laboratorio);
        tarjeta.appendChild(registroInvima);
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
      eliminarMedicamento(id)
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
          mostrarMedicamentos();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarMedicamentos();
});

function actualizar(id) {
  let nombreMedicamento = document.getElementById("nombremedicamento");
  let presentacion = document.getElementById("presentacionmedicamento");
  let dosis = document.getElementById("dosismedicamento");
  let laboratorio = document.getElementById("laboratoriomedicamento");
  let fechaCaducidad = document.getElementById("caducidadmedicamanto");
  let contraindicaciones = document.getElementById(
    "contraindicacionesmedicamento"
  );
  let regInvima = document.getElementById("invimamedicamento");
  let copago = document.getElementById("copagomedicamento");

  traerMedicamento(id)
    .then((medicamento) => {
      console.log(medicamento);
      nombreMedicamento.value = medicamento.nombre;
      presentacion.value = medicamento.presentacion;
      dosis.value = medicamento.dosis;
      laboratorio.value = medicamento.laboratorio;
      fechaCaducidad.value = medicamento.fechaCaducidad;
      contraindicaciones.value = medicamento.contraIndicaciones;
      regInvima.value = medicamento.registroInvima;
      copago.checked = medicamento.copago;
      console.log(nombreMedicamento);
    })
    .catch((error) => {
      console.log(error);
    });

  let botonGuardar = document.querySelector("#botonguardarmedicamento");

  botonGuardar.addEventListener("click", () => {
    let medicamentoActualizado = {
      nombre: nombreMedicamento.value,
      presentacion: presentacion.value,
      dosis: dosis.value,
      laboratorio: laboratorio.value,
      fechaCaducidad: fechaCaducidad.value,
      contraIndicaciones: contraindicaciones.value,
      registroInvima: regInvima.value,
      copago: copago.checked,
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
        actualizarMedicamento(medicamentoActualizado, id)
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
            mostrarMedicamentos();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  });
}
