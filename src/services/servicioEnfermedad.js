const URL = "http://localhost:8080/api/enfermedad";

export async function traerEnfermedades() {
  let peticionGET = {
    method: "GET",
  };

  let respuestaServidor = await fetch(URL, peticionGET);
  let enfermedades = await respuestaServidor.json();
  return enfermedades;
}

export async function guardarEnfermedad(nuevaEnfermedad) {
  let peticionPOST = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevaEnfermedad),
  };

  let respuestaServidor = await fetch(URL, peticionPOST);
  let enfermedad = await respuestaServidor.json();
  return enfermedad;
}

export async function actualizarEnfermedad(enfermedad, id) {
  let peticionPUT = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(enfermedad),
  };

  let respuestaServidor = await fetch(URL + "/" + id, peticionPUT);
  let enfermedad = await respuestaServidor.json();
  return enfermedad;
}

export async function eliminarEnfermedad() {
  let peticionDELETE = {
    method: "DELETE",
  };

  let respuestaServidor = await fetch(URL + "/" + id, peticionDELETE);
  let respuesta = await respuestaServidor.json();
  return respuesta;
}
