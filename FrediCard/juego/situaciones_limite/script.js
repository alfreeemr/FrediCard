var preguntas = [
    "Señala al jugador con mejor culo",
    "Señala a la persona más inteligente",
    "Señala la persona que necesita una operación de cara urgente",
    "¿A que persona del grupo te follas, con cual te casas y a quien matarías?",
    "Señala la persona que peor viste",
    "Di 3 cosas buenas del jugador de tu izquierda",
    "Señala al jugador con mejor cuerpo",
    "Mentira piadosa o verdad dolorosa",
    "Señala a la persona con menos futuro profesional",
    "Señala a la persona más infiel",
    "Liarte con el jugador de la izquierda o el de la derecha",
    "Señala la persona con peor forma física",
  ];
  
  var preguntaActual = Math.floor(Math.random() * preguntas.length);
  
  document.addEventListener('DOMContentLoaded', function() {
    mostrarPregunta();
    
    document.getElementById('siguiente-btn').addEventListener('click', function() {
        // Redirigir a la selección de minijuegos
        window.location.href = '../index.html';
    });
  });
  
  function mostrarPregunta() {
    document.getElementById('pregunta-texto').textContent = preguntas[preguntaActual];
  }  