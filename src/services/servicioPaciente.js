//Pasos para consumir API con JS

export async function traerPacientes() {
  //1. Se configura la url del servicio que se desea consumir
  const URL = "http://localhost:8080/api/paciente";

  //2. Se configura la petición del servicio a consumir
  let peticionGET = {
    method: "GET",
  };

  //3. Se configura la respuesta del servicio a consumir
  let respuestaServidor = await fetch(URL, peticionGET);
  let pacientes = await respuestaServidor.json();
  return pacientes;
}

export async function guardarPaciente(nuevoPaciente) {
  //1. Se configura la url del servicio que se desea consumir
  const URL = "http://localhost:8080/api/paciente";

  //2. Se configura la petición del servicio a consumir
  let peticionPOST = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevoPaciente),
  };

  //3. Se configura la respuesta del servicio a consumir
  let respuestaServidor = await fetch(URL, peticionPOST);
  let paciente = await respuestaServidor.json();
  return paciente;
}
