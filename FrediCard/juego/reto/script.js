var preguntas = [
  "Que todo el mundo haga una ronda de la botella",
  "Habla durante 5 minutos en inglés, si no lo haces bebe 1 trago",
  "Habla durante 5 minutos con acento francés, si no lo haces bebe 1 trago",
  "Habla durante 5 minutos con acento portugués, si no lo haces bebe 1 trago",
  "Háblale a una persona random, el grupo eligirá la persona y el mensaje",
  "Besa al jugador que tengas 2 posiciones a tu derecha",
  "No se puede llamar a nadie por su nombre, si fallas bebes 1 trago",
  "Todos los jugadores te deberán hacer una pregunta incómoda",
  "Haz una casar, matar o follar entre 3 jugadores presentes que eligiréis entre todos",
  "Intercambia posición con la niña más pequeña de altura",
  "Besa en el cuello al jugador de tu izquierda",
  "El jugador de en frente tuya se deberá sentar encima tuya una ronda entera",
  "Si adivinas la edad del jugador de tu derecha le tienes que besar",
  "El jugador de 2 posiciones a tu derecha debe darte un beso o una torta"
];

// recupero el jugador que ha elegido el minijuego y el array de niñas
var elegido = JSON.parse(localStorage.getItem("elegido"));
var ninas = JSON.parse(localStorage.getItem("ninas"));

// Seleccionar una niña aleatoria
var indiceAleatorio = Math.floor(Math.random() * ninas.length);
var ninaElegida = ninas[indiceAleatorio];

// preguntas solo para Alfredo
var preguntasAlfredo = [
  "Dale un piquito a " + ninaElegida,
  "Besa a " + ninaElegida + " en la zona que ella quiera",
  "Toca una zona íntima de " + ninaElegida + ", la que ella elija",
  "Agarra el culo de " + ninaElegida
];

// num aleatorio para ver si a Alfredo le toca pregunta normal o suya
if(elegido == 'Alfredo') {
  if(Math.floor(Math.random() * 5) == 1) {
    var preguntaActual = Math.floor(Math.random() * preguntasAlfredo.length);
    var hot = 1;
  } else {
    var preguntaActual = Math.floor(Math.random() * preguntas.length);
    var hot = 0;
  }
} else {
  var preguntaActual = Math.floor(Math.random() * preguntas.length);
  var hot = 0;
}

document.addEventListener("DOMContentLoaded", function () {
  mostrarPregunta();

  document
    .getElementById("siguiente-btn")
    .addEventListener("click", function () {
      // Redirigir a la selección de minijuegos
      window.location.href = "../index.html";
    });
});

function mostrarPregunta() {
  if(hot == 1) {
    document.getElementById("pregunta-texto").textContent =
    preguntasAlfredo[preguntaActual];

    // Elimina el reto seleccionado del array de retos
    preguntasAlfredo.splice(preguntaActual, 1);
  } else {
    document.getElementById("pregunta-texto").textContent =
    preguntas[preguntaActual];
  }
}
