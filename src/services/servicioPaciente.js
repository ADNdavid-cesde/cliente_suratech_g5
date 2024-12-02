//Pasos para consumir API con JS

  //1. Se configura la url del servicio que se desea consumir
  const URL = "http://localhost:8080/api/paciente";

export async function traerPacientes() {
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

export async function actualizarPaciente(paciente, id) {
  //2. Se configura la petición del servicio a consumir
  let peticionPUT = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(paciente),
  };

  //3. Se configura la respuesta del servicio a consumir
  let respuestaServidor = await fetch(URL+'/'+id, peticionPUT);
  let pacienteActualizado = await respuestaServidor.json();
  return pacienteActualizado;
}

export async function eliminarPaciente() { 
  //2. Se configura la petición del servicio a consumir
  let peticionDELETE = {
    method: "DELETE",
  };

  //3. Se configura la respuesta del servicio a consumir
  let respuestaServidor = await fetch(URL +'/'+id, peticionDELETE);
  let respuesta = await respuestaServidor.json();
  return respuesta;
}