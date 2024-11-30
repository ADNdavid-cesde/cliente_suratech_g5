const URL = "http://localhost:8080/api/medicamento";

export async function traerMedicamentos() {
  let peticionGET = {
    method: "GET",
  };

  let respuestaServidor = await fetch(URL, peticionGET);
  let medicamentos = await respuestaServidor.json();
  return medicamentos;
}

export async function guardarMedicamento(nuevoMedicamento) {
  let peticionPOST = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevoMedicamento),
  };

  let respuestaServidor = await fetch(URL, peticionPOST);
  let medicamento = await respuestaServidor.json();
  return medicamento;
}

export async function actualizarMedicamento(medicamento, id) {
  let peticionPUT = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(medicamento),
  };

  let respuestaServidor = await fetch(URL + "/" + id, peticionPUT);
  let medicamento = await respuestaServidor.json();
  return medicamento;
}

export async function eliminarMedicamento() {
  let peticionDELETE = {
    method: "DELETE",
  };

  let respuestaServidor = await fetch(URL + "/" + id, peticionDELETE);
  let respuesta = await respuestaServidor.json();
  return respuesta;
}