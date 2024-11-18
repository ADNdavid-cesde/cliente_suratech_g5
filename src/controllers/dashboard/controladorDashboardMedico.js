let medicos = [
    {
        "id": 1,
        "nombre": "Dr. Juan Pérez",
        "matriculaProfesional": "123456",
        "especialidad": "Cardiología",
        "salario": 8000000,
        "ips": "Clínica Santa María",
        "correo": "juan.perez@clinicasantamaria.com",
        "telefono": "+57 301 234 5678",
        "direccionConsultorio": "Calle 45 No. 10-45, Bogotá",
        "finDeSemanaDisponible": true
      },
      {
        "id": 2,
        "nombre": "Dra. Laura Gómez",
        "matriculaProfesional": "654321",
        "especialidad": "Pediatría",
        "salario": 6000000,
        "ips": "Hospital Infantil Los Pinos",
        "correo": "laura.gomez@hospitalpinos.com",
        "telefono": "+57 312 345 6789",
        "direccionConsultorio": "Avenida 12 No. 56-32, Medellín",
        "finDeSemanaDisponible": false
      },
      {
        "id": 3,
        "nombre": "Dr. Andrés Rodríguez",
        "matriculaProfesional": "789012",
        "especialidad": "Ortopedia",
        "salario": 7500000,
        "ips": "Clínica del Valle",
        "correo": "andres.rodriguez@clinicadelvalle.com",
        "telefono": "+57 317 890 1234",
        "direccionConsultorio": "Calle 78 No. 22-11, Cali",
        "finDeSemanaDisponible": true
      },
      {
        "id": 4,
        "nombre": "Dra. Carmen Martínez",
        "matriculaProfesional": "345678",
        "especialidad": "Dermatología",
        "salario": 7000000,
        "ips": "Centro Dermatológico El Sol",
        "correo": "carmen.martinez@dermatologiasol.com",
        "telefono": "+57 318 123 4567",
        "direccionConsultorio": "Carrera 13 No. 34-56, Barranquilla",
        "finDeSemanaDisponible": true
      },
      {
        "id": 5,
        "nombre": "Dr. Luis García",
        "matriculaProfesional": "234567",
        "especialidad": "Endocrinología",
        "salario": 8500000,
        "ips": "Clínica Médica Integral",
        "correo": "luis.garcia@clinicamediintegral.com",
        "telefono": "+57 320 456 7890",
        "direccionConsultorio": "Calle 92 No. 19-23, Cartagena",
        "finDeSemanaDisponible": false
      }
];


 //2. crear una referencia a una etiqueta html donde vamos a renderizar
 let fila = document.getElementById("fila");
  
 //3. se recorren los datos del arreglo para obtenerlos de forma separada
 medicos.forEach((medico) => {
   console.log(medicos);
   //4. Se crean columnas
   let columna = document.createElement("div");
   columna.classList.add("col");
 
   //5. Se crea tarjetas
   let tarjeta = document.createElement("div");
   tarjeta.classList.add("card", "p-5", "h-100", "shadow");
 
   
   let nombre = document.createElement("h2");
   nombre.textContent = medico.nombre;
 

   tarjeta.appendChild(nombre);
   columna.appendChild(tarjeta);
   fila.appendChild(columna);
 });