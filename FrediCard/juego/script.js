function redirectToJuego(url) {
  window.location.href = url;
}

document.addEventListener("DOMContentLoaded", function () {
  var jugadores = JSON.parse(localStorage.getItem("jugadores"));

  if (jugadores && jugadores.length > 0) {
    // Seleccionar un jugador aleatorio
    var indiceAleatorio = Math.floor(Math.random() * jugadores.length);
    var jugadorElegido = jugadores[indiceAleatorio];

    // guardo el jugador elegido para recuperarlo posteriormente
    localStorage.setItem('elegido', JSON.stringify(jugadorElegido));

    // Mostrar el jugador elegido
    document.getElementById("jugador-eleccion").textContent =
      jugadorElegido + ", elige un minijuego:";
  }
});