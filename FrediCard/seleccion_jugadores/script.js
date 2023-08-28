var jugadorActual = 1;
var jugadores = [];
var ninas = [];

document.getElementById('siguiente-btn').addEventListener('click', function() {
  var nombreJugador = document.getElementById('nombre-input').value;
  
  if (nombreJugador !== '') {
    jugadores.push(nombreJugador);

    // Verificar si el nombre termina en punto '.'
    if (nombreJugador.endsWith('.')) {
      ninas.push(nombreJugador);
    }
    
    jugadorActual++;
    if (jugadorActual <= 12) {
      document.getElementById('jugador-titulo').textContent = 'Jugador ' + jugadorActual;
      document.getElementById('nombre-input').value = '';
    }
    
    if (jugadorActual > 1) {
      document.getElementById('empezar-btn').classList.remove('d-none');
    }
  } else {
    alert('Por favor, introduce el nombre del jugador.');
  }
});

document.getElementById('empezar-btn').addEventListener('click', function() {
  // Almacenar el array de jugadores en el almacenamiento local
  localStorage.setItem('jugadores', JSON.stringify(jugadores));

  // Almacenar el array de niñas en el almacenamiento local
  localStorage.setItem('ninas', JSON.stringify(ninas));
  
  // Redirigir a otra página (por ejemplo, pagina-de-juego.html)
  window.location.href = '../juego/index.html';
});
