
const obtenerVidaActual = gameObject => {
  const { stats } = gameObject;
  const { carisma, belleza, inteligencia, fuerza } = stats;
  const vidaActual = carisma + belleza + inteligencia + fuerza;
  return vidaActual;
};

const megastofeles = gameObject => {
  console.log("Megastofoles");
  const { stats, items } = gameObject;
  const escudo = obtenerEscudo(gameObject).espejo;

  if (!escudo) {
    console.log("Megastofoles hace daño !!!!");
    stats.carisma -= 10;
    stats.fuerza -= 10;
    stats.belleza -= 10;
    stats.inteligencia -= 10;
    console.log();
  } else {
    items.espejo = false;
    console.log("Heroína esquiva a Megastofeles usando el espejo");
  }

  if (obtenerVidaActual(gameObject) <= 0) {
    console.log("Game Over!!!");
  } else {
    console.log(gameObject);
    return gameObject;
  }
  /*
    - Recibe un objeto con la información del juego (estadísticas de vida e inventario)
    - Megastofeles SIEMPRE ataca
    - El daño de su ataque puede ser esquivado si la heroina posee un espejo
    - Si el ataque es esquivado, el valor de los atributos quedan intactos
    - Si no se tiene el espejo, todos los atributos se reducen en -10
    - Solo se puede tener un espejo activado (espejo: true). El escudo no es acumulativo
    - El espejo al ser usado, se desactiva (espejo: false)
    - La condicion para que chequear la muerte es que la vida sea menor a 0.
    Imprimir cada accion en la consola:
    - Nombre del boss
    - Si Megastofeles hace daño: un mensaje de ataque
    - Si la heroina usa el espejo: un mensaje de contra ataque

    La función retorna un game object actualizado (stats e inventario)
  */
};


function obtenerEscudo(gameObject) {
  if (obtenerVidaActual(gameObject) <= 10) {
    let probabilidad = Math.random();
    if (probabilidad <= 0.8) {
      gameObject.items.espejo = true;
      console.log("se activo el espejo");
    } else {
      console.log("el cofre estaba vacio");
    }
  } else if (obtenerVidaActual(gameObject) > 10) {
    let probabilidad = Math.random();
    if (probabilidad <= 0.2) {
      gameObject.items.espejo = true;
      console.log("se activo el espejo");
    } else {
      console.log("el cofre estaba vacio");
    }
  }
  return gameObject;
  /*
    - Este item se obtiene sobre una relacion del valor de la vida total.
    - La vida total se calcula sumando los 4 atributos de la heroina
    - Si el valor de la vida es menor o igual 10:
      80% probabilidad de otorgar el escudo, 20% de no obtener nada.
    - La condicion es inversa si el total de la vida es mayor a 10
    - De activar el escudo, actualizar el inventario con la propiedad booleana que corresponda
    - Imprimir en consola si el item fue agregado, o si el cofre no tenia nada.

     La función retorna un game object actualizado (stats e inventario)
  */
}