var preguntas = [
    "Quién es más probable que se ría en un momento inadecuado",
    "Quién es más probable que se haga influencer",
    "Quién es más probable que se case primero",
    "Quién es más probable que gane más dinero dentro de 10 años",
    "Quién es más probable que se olvide donde dejó las llaves",
    "Quién es el más espontáneo",
    "Quién es más probable que gane un concurso de talentos",
    "Quién es más probable que se convierta en atleta profesional",
    "Quién es más probable que se vaya a vivir más lejos",
    "Quién es más probable que se eche novio/a antes",
    "Quién es más probable que se eche novio/a más tarde",
    "Quién es más probable que se quede mosoduro",
    "Quién es más probable que llore viendo una película",
    "Quién es más probable que hable con una persona que no conoce de nada",
    "Quién es el mejor consejero",
    "Quién es el mayor experto en tecnologías",
    "Quién es el mejor organizador"
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
    document.getElementById('titulo-texto').textContent = "El jugador con más votos bebe 1 trago";
    document.getElementById('pregunta-texto').textContent = preguntas[preguntaActual];
  }  