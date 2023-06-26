function enviarSaludo() {
  let nombre = document.getElementById("nombre");
  let apellido = document.getElementById("apellido");
  let saludo = document.querySelector("#saludo");
  let mensaje = `Hola ${nombre.value} ${apellido.value}, muchas gracias por tu mensaje.`;
  saludo.innerHTML = mensaje;
}
