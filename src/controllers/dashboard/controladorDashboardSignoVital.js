let signosVitales = [
    {
        "id": 1,
        "nombre": "Frecuencia Cardiaca",
        "valor": 72,
        "fechaMedida": "2024-11-17T08:30:00"
      },
      {
        "id": 2,
        "nombre": "Presión Arterial",
        "valor": "120/80",
        "fechaMedida": "2024-11-17T08:32:00"
      },
      {
        "id": 3,
        "nombre": "Temperatura Corporal",
        "valor": 36.7,
        "fechaMedida": "2024-11-17T08:35:00"
      },
      {
        "id": 4,
        "nombre": "Frecuencia Respiratoria",
        "valor": 18,
        "fechaMedida": "2024-11-17T08:40:00"
      },
      {
        "id": 5,
        "nombre": "Saturación de Oxígeno",
        "valor": 98,
        "fechaMedida": "2024-11-17T08:42:00"
      }
];


 //2. crear una referencia a una etiqueta html donde vamos a renderizar
 let fila = document.getElementById("fila");
  
 //3. se recorren los datos del arreglo para obtenerlos de forma separada
 signosVitales.forEach((signoVital) => {
   console.log(signoVital);
   //4. Se crean columnas
   let columna = document.createElement("div");
   columna.classList.add("col");
 
   //5. Se crea tarjetas
   let tarjeta = document.createElement("div");
   tarjeta.classList.add("card", "p-5", "h-100", "shadow"); 
   
   let nombre = document.createElement("h2");
   nombre.textContent = signoVital.nombre; 

   let valor = document.createElement("h2");
   valor.textContent = signoVital.valor; 

   let fechaMedida = document.createElement("h2");
   fechaMedida.textContent = signoVital.fechaMedida; 

   tarjeta.appendChild(nombre);
   tarjeta.appendChild(valor);
   tarjeta.appendChild(fechaMedida);
   columna.appendChild(tarjeta);
   fila.appendChild(columna);
 });