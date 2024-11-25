//Pasos para consumir API con JS

export async function traerPacientes() {
    //1. Se configura la url del servicio que se desea consumir
const URL = "localhost:8080/api/paciente";

//2. Se configura la peticion del servicio a consumir
let peticioneGET ={
    method: "GET",
}

//3. Se configura la respuesta del servicio a consumir
let respuestaServidor = await fetch(URL, peticioneGET);
let pacientes = await respuestaServidor.json();
return pacientes;

}