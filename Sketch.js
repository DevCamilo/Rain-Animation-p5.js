var drops = [];

/**
* Configura la pantalla
**/
function setup() {
   canvas = createCanvas(displayWidth, displayHeight); // Da el tamaño completo de la página
   
   /* Asigna el número de gotas que caeran y las guarda en un array */
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop(); // Crea una nueva gota
  }
}

/**
* Dibuja las gotas en pantalla
**/
function draw() {
  background('#000346'); // Asigna el color del fondo
  
  /* Recorre todo el arreglo de gotas */
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall(); // Ejecuta la funcion de caída
    drops[i].show(); // Ejecuta la funcion de mostrar
  }
}
