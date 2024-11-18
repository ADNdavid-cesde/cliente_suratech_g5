let enfermedades = [
    {
        "id": 1,
        "nombre": "Enfermedad Cardiovascular",
        "sintomas": ["Dolor en el pecho", "Dificultad para respirar", "Fatiga", "Mareos"],
        "clasificacion": "Enfermedades del corazón",
        "grado": "Crónica",
        "probabilidadVida": "Moderada"
      },
      {
        "id": 2,
        "nombre": "Diabetes Tipo 2",
        "sintomas": ["Aumento de la sed", "Micción frecuente", "Visión borrosa", "Fatiga", "Pérdida de peso"],
        "clasificacion": "Enfermedades metabólicas",
        "grado": "Crónica",
        "probabilidadVida": "Alta con tratamiento adecuado"
      },
      {
        "id": 3,
        "nombre": "Cáncer de Pulmón",
        "sintomas": ["Tos persistente", "Dificultad para respirar", "Dolor en el pecho", "Pérdida de peso inexplicada"],
        "clasificacion": "Neoplasias",
        "grado": "Severa",
        "probabilidadVida": "Baja sin tratamiento temprano"
      },
      {
        "id": 4,
        "nombre": "Hipertensión Arterial",
        "sintomas": ["Dolores de cabeza", "Mareos", "Fatiga", "Visión borrosa", "Dolor en el pecho"],
        "clasificacion": "Enfermedades cardiovasculares",
        "grado": "Crónica",
        "probabilidadVida": "Alta con tratamiento adecuado"
      },
      {
        "id": 5,
        "nombre": "Enfermedad de Alzheimer",
        "sintomas": ["Pérdida de memoria", "Confusión", "Dificultad para comunicarse", "Cambios en el comportamiento"],
        "clasificacion": "Enfermedades neurodegenerativas",
        "grado": "Progresiva",
        "probabilidadVida": "Variable, dependiendo de la etapa y el cuidado"
      }
];


 //2. crear una referencia a una etiqueta html donde vamos a renderizar
 let fila = document.getElementById("fila");
  
 //3. se recorren los datos del arreglo para obtenerlos de forma separada
 enfermedades.forEach((enfermedad) => {
   console.log(enfermedad);
   //4. Se crean columnas
   let columna = document.createElement("div");
   columna.classList.add("col");
 
   //5. Se crea tarjetas
   let tarjeta = document.createElement("div");
   tarjeta.classList.add("card", "p-5", "h-100", "shadow");
 
   
   let nombre = document.createElement("h2");
   nombre.textContent = enfermedad.nombre;
 

   tarjeta.appendChild(nombre);
   columna.appendChild(tarjeta);
   fila.appendChild(columna);
 });