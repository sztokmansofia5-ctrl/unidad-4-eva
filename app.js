const boton = document.getElementById("btnAccion");
const boton2 = document.getElementById("btnAccion2");

const mensaje = document.getElementById("mensaje");
const previewNombre = document.getElementById("previewNombre");

const contenedortexto = document.getElementById("campoNombre");

boton.addEventListener("click", function () {
  mensaje.textContent = "¡Gracias por hacer clic! La página está respondiendo a tu acción 😊";
});

boton2.addEventListener("click", function () {
  previewNombre.textContent = contenedortexto.value;
});
