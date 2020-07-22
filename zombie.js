
// afecta fuerza
function zombie(gameObject) {
  if (gameObject.items.estaca > 0) {
    gameObject.stats.fuerza += 5;
    gameObject.items.estaca -= +1;
    console.log("Se ataca al Zommbie ", gameObject);
  } else {
    gameObject.stats.fuerza -= 10;
    if (gameObject.stats.fuerza <= 0) {
      gameObject.stats.carisma -= 2;
      gameObject.stats.fuerza -= 2;
      gameObject.stats.belleza -= 2;
      gameObject.stats.inteligencia -= 2;
      console.log("El Zommbie ataca", gameObject);
    }
  }

  /*
    - zombie puede ser eliminado si se usa una estaca en su contra.
    - Se obtiene +5 en fuerza si zombie es eliminado.
    - Si se usa una estaca, recuerda actualizar el inventario.
    - Si no se tiene una estaca, zombie atacara, lo cual disminuira la fuerza en -10
    - Si zombie ataca y la fuerza es igual o menor a 0, restar -2 en todos los atributos restantes
    Imprimir cada accion en la consola:
    - Si zombie ataca.
    - Si zombie fue eliminado usando una estaca.
    - Cantidad de estacas restantes

     La función retorna un game object actualizado (stats e inventario)
  */
  return gameObject;
}

function obtenerEstaca(gameObject) {
  /*
    - Este item se obtiene sobre una relacion del valor de fuerza.
    - Si el valor de fuerza de la heroina es menor o igual 5:
      80% probabilidad de sumar 1 estaca, 20% de no obtener nada.
    - La condicion es inversa si fuerza es mayor a 5
    - De obtener un item, actualizar el inventario en el gameObject
    - Imprimir en consola si el item fue agregado, o si el cofre no tenia nada.

    La función retorna un game object actualizado (stats e inventario)
  */

  if (gameObject.stats.fuerza <= 5) {
    gameObject.items.estaca += 1;
  } else {
    return gameObject;
  }
  return gameObject;
}
