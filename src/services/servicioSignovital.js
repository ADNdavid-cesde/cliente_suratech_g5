const URL = "http://localhost:8080/api/signoVital";

export async function traerSignosVitales() {
  let peticionGET = {
    method: "GET",
  };

  let respuestaServidor = await fetch(URL, peticionGET);
  let signosVitales = await respuestaServidor.json();
  return signosVitales;
}

export async function guardarSignoVital(nuevoSignoVital) {
  let peticionPOST = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevoSignoVital),
  };

  let respuestaServidor = await fetch(URL, peticionPOST);
  let signoVital = await respuestaServidor.json();
  return signoVital;
}

export async function actualizarSignoVital(signoVital, id) {
  let peticionPUT = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signoVital),
  };

  let respuestaServidor = await fetch(URL + "/" + id, peticionPUT);
  let signoVital = await respuestaServidor.json();
  return signoVital;
}

export async function eliminarSignoVital() {
  let peticionDELETE = {
    method: "DELETE",
  };

  let respuestaServidor = await fetch(URL + "/" + id, peticionDELETE);
  let respuesta = await respuestaServidor.json();
  return respuesta;
}