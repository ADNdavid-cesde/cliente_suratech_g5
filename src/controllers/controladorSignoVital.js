let fechaToma = document.getElementById("fechatoma");
let descripcion = document.getElementById("descripcion");
let signoVital = document.getElementById("signovital");

let botonRegistrarSignovital = document.getElementById("botonregistrosignovital");

botonRegistrarSignovital.addEventListener("click", (evento) => {
    evento.preventDefault();
    
    let tomaSignoVital = {
        nombre: fechaToma.value,
        valor: descripcion.value,
        fechaMedida: signoVital.value
    }

    console.log(tomaSignoVital);

    Swal.fire({
        title: "Registro exitoso",
        text: "Se ha regitrado signo vital con exito",
        icon: "success"
      });
});