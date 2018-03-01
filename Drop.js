/**
* Son las gotas que caen
**/
function Drop() {
  this.x = random(width); // Genera las pocisiones horizontales de las gotas
  this.y = random(-500, -50); // Geneta las pocisiones horizontales de las gotas
  this.z = random(0, 20); // Constante aleatoria
  this.len = map(this.z, 0, 20, 10, 20); // Asigna la longitud de las gotas 
  this.yspeed = map(this.z, 0, 20, 1, 20); // Deter mina la velocidad de las gotas
  
  
  this.fall = function() {
    this.y = this.y + this.yspeed; // Asigna la velocidad de caida
    var grav = map(this.z, 0, 20, 0, 0.2); // Asigna un efecto retradado adicional
    this.yspeed = this.yspeed + grav; // Añade la gravedad a la caida
	
	
	/* Cuando las gotas han caido, las sube otra vez */
    if (this.y > height) {
      this.y = random(-200, -100); // Asigna un nuevo punta de caída
      this.yspeed = map(this.z, 0, 20, 4, 10); // Asigna una nueva velocidad de caída
    }
  }
  
  this.show = function() {
    var thick = map(this.z, 0, 20, 1, 3); // Cambia el tamaño de las gotas para dar efecto de profundidad
    strokeWeight(thick); // Asigna el tamaño a las gotas
    stroke('#9DA0D6'); // Pinta las gotas
    line(this.x, this.y, this.x, this.y+this.len); // Crea las gotas
  }
}
