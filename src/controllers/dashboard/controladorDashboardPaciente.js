import { traerPacientes } from "../../services/servicioPaciente.js"; //importa funciones de otro archivo JS

//Objetivo: recibir datos de back y renderizarlos en el Front

//1-A. quemar o simular los datos
/* let pacientes = [
    {
      id: 1,
      nombre: "Homero Simpson",
      anioNacimiento: "1996-01-18",
      ciudad: "Medellín",
      correo: "homerJSimpson@gmail.com",
      telefono: "3014562318",
      ips: "coopsana centro",
      poliza: true,
      grupoIngresos: "C",
      fechaAfiliacion: "2021-11-23",
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
      fechaAfiliacion: "2021-12-01",
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
      fechaAfiliacion: "2022-01-15",
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
      fechaAfiliacion: "2022-03-10",
    },
  ]; */

//1-B Llamar el API
traerPacientes()
  .then((pacientes) => {
    //RespuestaBack
    console.log(pacientes);

    //2. crear una referencia a una etiqueta html donde vamos a renderizar
    let fila = document.getElementById("fila");

    //3. se recorren los datos del arreglo para obtenerlos de forma separada
    pacientes.forEach((paciente) => {
      console.log(paciente);
      //4. Se crean columnas
      let columna = document.createElement("div");
      columna.classList.add("col");

      //5. Se crea tarjetas
      let tarjeta = document.createElement("div");
      tarjeta.classList.add("card", "p-5", "h-100", "shadow");

      //6. Se crean etiqueta para mostrar el nombre del paciente
      let nombre = document.createElement("h2");
      nombre.textContent = paciente.nombre;

      let ips = document.createElement("p");
      ips.textContent = paciente.ips;

      let ciudad = document.createElement("p");
      ciudad.textContent = paciente.ciudad;

      //7. Ordenando las tarjetas
      tarjeta.appendChild(nombre);
      tarjeta.appendChild(ips);
      tarjeta.appendChild(ciudad);
      columna.appendChild(tarjeta);
      fila.appendChild(columna);
    });
  })
  .catch((error) => {
    console.log(error);
  });
