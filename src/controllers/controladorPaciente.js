//Objetivo: Capturar los datos de un formulario
/*
//1. por cada input, select, texarea del formulario se crea una avariable;
//2. Por cada variable debo utilizar el DOM para asociar el html con js;
let nombrePaciente = document.getElementById("nombrepaciente");
let nacimietoPaciente = document.getElementById("nacimientopaciente");
let ciudadPaciente = document.getElementById("ciudadpaciente");
let correoPaciente = document.getElementById("correopaciente");
let telefonoPaciente = document.getElementById("telefonopaciente");
let ipsPaciente = document.getElementById("ipspaciente");
let grupoIngresosPaciente = document.getElementById("grupoingresospaciente");
let afiliacionPaciente = document.getElementById("afiiacionpaciente");
let polizaPaciente = document.getElementById("polizapaciente");

//3. Crear una variable para asociarla al id del boton que tengo en html
let botonRegistroPaciente=document.getElementById("botonregistropaciente")

//4. Detectamos acciones o eventos en el boton
botonRegistroPaciente.addEventListener("click",function(evento){
    evento.preventDefault()

    //5. Se crea un JSON
    //que capture todos los datos 
    //del formulario
    let datosFormularioPaciente={
        nombres:nombrePaciente.value,
        fechaNacimiento: fechaNacimientoPaciente.value,
        ciudad:ciudadPaciente.value,
        correo: correoPaciente.value,
        telefono: telefonoPaciente.value,
        ips: ipsPaciente.value,
        grupoIngresos: grupoIngresoPaciente.value,
        tienePoliza: polizaPaciente.value,
        fechaAfiliacion: fechaAfiliacionPaciente.value
        
    }

    //6. se envian los datos al back
    console.log(datosFormularioPaciente)

    Swal.fire({
        title: "Registro Exitoso!",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
    });
});
*/

//OBJETIVO:Recibir datos del BACK y hacerles render (render=PINTARLOS)
//1. QUEMAR O SIMULAR LOS DATOS
let pacientes = [
  {
    id: 890,
    nombres: "Brad Alexis Gallego",
    fechaNacimiento: "1989-06-23",
    ciudad: "Medellin",
    correo: "bebeshito69@hotmail.com",
    telefono: "3225962363",
    ips: "Mayorca sede norte",
    tienePoliza: true,
    grupoIngresos: "C",
    fechaAfiliacion: "2005-10-20",
  },
  {
    id: 891,
    nombres: "Sofía Valentina Pérez",
    fechaNacimiento: "1992-03-15",
    ciudad: "Bogotá",
    correo: "sofia.perez@example.com",
    telefono: "3104567890",
    ips: "Clínica Santa María",
    tienePoliza: true,
    grupoIngresos: "B",
    fechaAfiliacion: "2010-05-30",
  },
  {
    id: 892,
    nombres: "Diego Alejandro Ruiz",
    fechaNacimiento: "1985-11-08",
    ciudad: "Cali",
    correo: "diego.ruiz@example.com",
    telefono: "3159876543",
    ips: "Hospital Universitario del Valle",
    tienePoliza: false,
    grupoIngresos: "A",
    fechaAfiliacion: "2012-01-12",
  },
  {
    id: 893,
    nombres: "Camila Isabel Torres",
    fechaNacimiento: "1995-07-30",
    ciudad: "Barranquilla",
    correo: "camila.torres@example.com",
    telefono: "3001234567",
    ips: "Clínica del Caribe",
    tienePoliza: true,
    grupoIngresos: "C",
    fechaAfiliacion: "2015-09-18",
  },
];

//2. crear una referencia a una etiqueta html donde vamos a renderizar
let fila = document.getElementById("fila");

//3. Se recorren los datos para obtenerlos de forma separada
pacientes.forEach(function (paciente) {
  console.log(paciente);
  //4 Se crean columnas
  let columna = document.createElement("div");
  columna.classList.add("col");

  //5 Se crean tarjetas
  let tarjeta = document.createElement("div");
  tarjeta.classList.add("card", "p-5", "h-100", "shadow");

  //6 Se crea una etiqueta para poner el nombre
  let nombre = document.createElement("h2");
  nombre.textContent = paciente.nombres;

  //PASO FINAL (ORDENANDO LAS CARTAS)
  tarjeta.appendChild(nombre);
  columna.appendChild(tarjeta);
  fila.appendChild(columna);
});
