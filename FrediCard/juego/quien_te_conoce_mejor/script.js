var preguntas = [
    "¿Cuál es mi película favorita?",
    "¿Quién es mi cantante favorito?",
    "¿Quién me gusta más de las personas presentes?",
    "¿Soy activo o pasivo?",
    "¿Cuál es mi estación del año favorita?",
    "¿Prefiero ligar por redes sociales o en persona?",
    "¿Cuál es mi serie favorita?",
    "¿He follado drogado alguna vez?",
    "¿He follado con algun/a ex?",
    "¿He tragado semen alguna vez?",
    "¿Soy capaz de follar durante 30 minutos seguidos?",
    "¿Le he escupido a alguien en la cara follando?",
    "¿Tengo fotos eróticas de algún ex en mi móvil?",
    "¿Tendría sexo con algún familiar?"
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