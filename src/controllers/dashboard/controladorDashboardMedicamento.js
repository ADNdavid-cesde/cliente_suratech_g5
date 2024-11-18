let medicamentos = [
    {
        "id": 1,
        "nombre": "Ibuprofeno",
        "presentacion": "Tabletas 400 mg",
        "dosis": "1 tableta cada 8 horas",
        "laboratorio": "Laboratorios ABC",
        "fechaCaducidad": "2026-12-31",
        "contraIndicaciones": ["Úlceras gástricas", "Problemas renales", "Alergia a antiinflamatorios no esteroides (AINEs)"],
        "registroInvima": "2019M-032576-R1",
        "copago": "20%"
      },
      {
        "id": 2,
        "nombre": "Paracetamol",
        "presentacion": "Tabletas 500 mg",
        "dosis": "1 tableta cada 4-6 horas, no exceder 4 dosis al día",
        "laboratorio": "Farmacéutica XYZ",
        "fechaCaducidad": "2025-08-15",
        "contraIndicaciones": ["Enfermedades hepáticas graves", "Alcoholismo crónico", "Alergia a paracetamol"],
        "registroInvima": "2020M-041233-R1",
        "copago": "15%"
      },
      {
        "id": 3,
        "nombre": "Amoxicilina",
        "presentacion": "Cápsulas 500 mg",
        "dosis": "1 cápsula cada 8 horas durante 7-10 días",
        "laboratorio": "Farmacéuticos Unidos",
        "fechaCaducidad": "2027-05-20",
        "contraIndicaciones": ["Alergia a penicilinas", "Insuficiencia renal grave"],
        "registroInvima": "2021M-058923-R1",
        "copago": "25%"
      },
      {
        "id": 4,
        "nombre": "Loratadina",
        "presentacion": "Tabletas 10 mg",
        "dosis": "1 tableta diaria",
        "laboratorio": "Laboratorios Sigma",
        "fechaCaducidad": "2024-11-30",
        "contraIndicaciones": ["Alergia a loratadina", "Insuficiencia hepática severa"],
        "registroInvima": "2018M-027874-R1",
        "copago": "10%"
      },
      {
        "id": 5,
        "nombre": "Omeprazol",
        "presentacion": "Cápsulas 20 mg",
        "dosis": "1 cápsula en la mañana, antes del desayuno",
        "laboratorio": "Farmacia Internacional",
        "fechaCaducidad": "2026-03-22",
        "contraIndicaciones": ["Problemas hepáticos graves", "Alergia a omeprazol", "Embarazo en el primer trimestre"],
        "registroInvima": "2022M-071624-R1",
        "copago": "30%"
      }
];


 //2. crear una referencia a una etiqueta html donde vamos a renderizar
 let fila = document.getElementById("fila");
  
 //3. se recorren los datos del arreglo para obtenerlos de forma separada
 medicamentos.forEach((medicamento) => {
   console.log(medicamento);
   //4. Se crean columnas
   let columna = document.createElement("div");
   columna.classList.add("col");
 
   //5. Se crea tarjetas
   let tarjeta = document.createElement("div");
   tarjeta.classList.add("card", "p-5", "h-100", "shadow"); 
   
   let nombre = document.createElement("h2");
   nombre.textContent = medicamento.nombre;

   let presentacion = document.createElement("p");
  presentacion.textContent = medicamento.presentacion;

  let dosis = document.createElement("p");
  dosis.textContent = medicamento.dosis;

   tarjeta.appendChild(nombre);
   tarjeta.appendChild(presentacion);
   tarjeta.appendChild(dosis);
   columna.appendChild(tarjeta);
   fila.appendChild(columna);
 });