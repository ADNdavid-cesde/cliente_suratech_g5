//Objetivo: Capturar los datos de un formulario

//1. por cada input, select, texarea del formulario se crea una avariable;
//2. Por cada variable debo utilizar el DOM para asociar el html con js;
/*
let nombrePaciente = document.getElementById("nombrepaciente");
let nacimietoPaciente = document.getElementById("nacimientopaciente");
let ciudadPaciente = document.getElementById("ciudadpaciente");
let correoPaciente = document.getElementById("correopaciente");
let telefonoPaciente = document.getElementById("telefonopaciente");
let ipsPaciente = document.getElementById("ipspaciente");
let grupoIngresosPaciente = document.getElementById("grupoingresospaciente");
let afiliacionPaciente = document.getElementById("afiiacionpaciente");
let polizaPaciente = document.getElementById("polizapaciente");


//3. Crear una variable para asociarla al id del boton que se tiene en el html
let botonRegistrarPaciente = document.getElementById("botonregistropaciente");

//4. Detectamos acciones o eventos en el boton
botonRegistrarPaciente.addEventListener("click", (evento)=>{
    evento.preventDefault();//Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.

    //5.Se crea un JSON que capture datos del formulario
    let paciente = {
        nombre : nombrePaciente.value, //El orden de las llaves no importa, sim embargo el nombre debe coincidir con el del backEnd
        anioNacimiento : nacimietoPaciente.value,
        ciudad : ciudadPaciente.value,
        correo : correoPaciente.value,
        telefono : telefonoPaciente.value,
        ips : ipsPaciente.value,
        poliza : polizaPaciente.value,
        grupoIngresos : grupoIngresosPaciente.value,
        fechaAfiliacion : afiliacionPaciente.value 
    }

    //6.  Se envia el JSON a la API(se envia datos al back)
    console.dir(paciente);
    console.log(paciente);
        


    Swal.fire({
        title: "Registro exitoso",
        text: "Ya eres parte de nuestra gran familia",
        icon: "success"
      });
});

*/
//Objetivo: recibir datos de back y renderizarlos en el Front

//1. quemar o simular los datos
let pacientes = [
    {
        id:1,
        nombre: "Homero Simpson",
        anioNacimiento: "1996-01-18",
        ciudad: "Medellín",
        correo: "homerJSimpson@gmail.com",
        telefono: "3014562318",
        ips: "coopsana centro",
        poliza: true,
        grupoIngresos: "C",
        fechaAfiliacion: "2021-11-23"  
    },
    {
        id: 2,
        nombre: "Marge Simpson",
        anioNacimiento: "1996-02-20",
        ciudad: "Medellín",
        correo: "margeSimpson@gmail.com",
        telefono: "3014569874",
        ips: "saludmed centro",
        poliza: true,
        grupoIngresos: "C",
        fechaAfiliacion: "2021-12-01"
    },
    {
        id: 3,
        nombre: "Bart Simpson",
        anioNacimiento: "1999-04-01",
        ciudad: "Medellín",
        correo: "bartSimpson@gmail.com",
        telefono: "3014562345",
        ips: "coopsana sur",
        poliza: false,
        grupoIngresos: "D",
        fechaAfiliacion: "2022-01-15"
    },
    {
        id: 4,
        nombre: "Lisa Simpson",
        anioNacimiento: "2002-05-09",
        ciudad: "Medellín",
        correo: "lisaSimpson@gmail.com",
        telefono: "3014567890",
        ips: "saludmed norte",
        poliza: true,
        grupoIngresos: "B",
        fechaAfiliacion: "2022-03-10"
    }
];

//2. crear una referencia a una etiqueta html donde vamos a renderizar
let fila = document.getElementById("fila");

//3. se recorren los datos del arreglo para obtenerlos de forma separada
pacientes.forEach( (paciente) => {
    console.log(paciente);
    //4. Se crean columnas
    let columna = document.createElement("div");
    columna.classList.add("col");

    //5. Se crea tarjetas
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card","p-5", "h-100", "shadow");

    //6. Se crean etiqueta para mostrar el nombre del paciente
    let nombre = document.createElement("h2");
    nombre.textContent = paciente.nombre;

    //7. Ordenando las tarjetas
    tarjeta.appendChild(nombre);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
})