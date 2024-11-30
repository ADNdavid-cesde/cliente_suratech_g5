const URL = "http://localhost:8080/api/medico";

export async function traerMedicos() {
  let peticionGET = {
    method: "GET",
  };

  let respuestaServidor = await fetch(URL, peticionGET);
  let medicos = await respuestaServidor.json();
  return medicos;
}

export async function guardarMedico(nuevoMedico) {
  let peticionPOST = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevoMedico),
  };

  let respuestaServidor = await fetch(URL, peticionPOST);
  let medico = await respuestaServidor.json();
  return medico;
}

export async function actualizarMedico(datosMedico, id) {
  let peticionPUT = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datosMedico),
  };

  let respuestaServidor = await fetch(URL + "/" + id, peticionPUT);
  let medico = await respuestaServidor.json();
  return medico;
}

export async function eliminarMedico() {
  let peticionDELETE = {
    method: "DELETE",
  };

  let respuestaServidor = await fetch(URL + "/" + id, peticionDELETE);
  let respuesta = await respuestaServidor.json();
  return respuesta;
}