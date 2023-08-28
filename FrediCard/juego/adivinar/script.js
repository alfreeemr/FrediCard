var personajes = [
    "Rafa Nadal",
    "Cristiano Ronaldo",
    "El Pino",
    "Rubiales",
    "Pedrerol",
    "Comandante Lara",
    "Jack Sparrow",
    "Dobby",
    "Ancelotti",
    "El Puya",
    "El Dandi",
    "Mariano Rajoy",
    "Ferxxo",
    "Arcángel",
    "Anuel",
    "Llados Fitness",
    "Migue el Máquina",
    "El Faliyo",
    "Florentino Pérez",
    "Saul Goodman"
  ];
  
  var personajeActual = Math.floor(Math.random() * personajes.length);
  
  document.addEventListener('DOMContentLoaded', function() {
    mostrarPregunta();
    
    document.getElementById('siguiente-btn').addEventListener('click', function() {
        // Redirigir a la selección de minijuegos
        window.location.href = '../index.html';
    });
  });
  
  function mostrarPregunta() {
    document.getElementById('titulo-texto').textContent = "Quien adivine reparte 1 trago";
    document.getElementById('pregunta-texto').textContent = personajes[personajeActual];
  }  