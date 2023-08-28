var preguntas = [
    "Liarte con el jugador de tu derecha o el de tu izquierda",
    "Poder volar o ser invisible",
    "Ser famoso con un dinero normal o ser ultrafamoso con mucho dinero (1M)",
    "No usar nunca más un teléfono móvil o nunca más tener sexo",
    "Leer mentes o predecir el futuro",
    "Vivir en un mundo sin películas o sin música",
    "No tener que dormir nunca o no tener que comer nunca",
    "Volver al pasado y conocer a tus antepasados o ir al futuro y conocer a tus descendientes",
    "Vivir solo en tu pueblo o con tu pareja en Australia",
    "Tener un hijo el año que viene o no tenerlo nunca",
    "Tener 5 hijos o no tener ninguno",
    "Ser guapo y tonto o feo e inteligente",
    "Ser Cristiano Ronaldo ganando una champions o Bad Bunny en el mayor concierto de su vida",
    "Besar al jugador de tu izquierda o quitarte 4 prendas",
    "Volver con tu ex o tener un hijo en 1 año",
    "Besar o abrazar a tu pareja",
    "Ganar 2 céntimos por cada paso que das o ganar 1 céntimo por cada palabra que dices",
    "Follar con una persona que sea un 9 cada mes o tener de pareja a una persona que sea un 7",
    "Erradicar la pobreza mundial o que tú seas millonario",
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