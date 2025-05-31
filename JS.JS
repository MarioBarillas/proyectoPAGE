function actualizarReloj() {
  const ahora = new Date();
  const horas = ahora.getHours().toString().padStart(2, '0');
  const minutos = ahora.getMinutes().toString().padStart(2, '0');
  const segundos = ahora.getSeconds().toString().padStart(2, '0');

  const horaFormateada = `${horas}:${minutos}:${segundos}`;
  const relojElemento = document.getElementById('reloj');

  if (relojElemento) {
    relojElemento.textContent = horaFormateada;
  }
}

actualizarReloj();

setInterval(actualizarReloj, 1000);
