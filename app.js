const boton = document.getElementById("btnAccion");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  mensaje.textContent = "¡Gracias por hacer clic! La página está respondiendo a tu acción 😊";
});
