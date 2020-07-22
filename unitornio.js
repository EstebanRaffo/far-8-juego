function unitornio(gameObject) {
  if (gameObject.items.globo) {
    console.log('Unitornio eliminado');
    gameObject.items.globo -= 1;
    gameObject.stats.inteligencia += 5;
  } else {
    console.log('Ataque de Unitornio');
    if(gameObject.stats.inteligencia > 0) {
      gameObject.stats.inteligencia -= 10;
    } else {
      gameObject.stats.carisma -=2;
      gameObject.stats.fuerza -=2;
      gameObject.stats.belleza -=2;
    }
  }
  console.log('Globos restantes: ', gameObject.items.globo);
  return gameObject;
  /*
    - unitornio puede ser eliminado si se usa un globo en su contra.
    - Se obtiene +5 en inteligencia si unitornio es eliminado.
    - Si se usa un globo, recuerda actualizar el inventario.
    - Si no se tiene un globo, unitornio atacara, lo cual disminuira la inteligencia en -10
    - Si unitornio ataca y la inteligencia es igual o menor a 0, restar -2 en todos los atributos restantes
    - Al final del encuentro, chequear si la heroina sigue viva
    - La condicion para que chequear la muerte es que la vida sea menor a 0.
    - La vida es la sumatoria de todos los atributos
    Imprimir cada accion en la consola:
    - Si unitornio ataca.
    - Si unitornio fue eliminado usando un globo.
    - Cantidad de globos restantes

     La función retorna un game object actualizado (stats e inventario)
  */
}
function obtenerGlobo(gameObject) {
  const cofre=Math.random();
  if (gameObject.stats.inteligencia <= 5) {
    if (cofre<=0.8) {
      console.log('Se obtuvo un Globo');
      gameObject.items.globo += 1;
    } else {
      console.log('No se obtuvo nada');
    }
  }  else {
    if (cofre>0.8) {
      console.log('Se obtuvo un Globo');
      gameObject.items.globo += 1;
    } else {
      console.log('No se obtuvo nada');
    }
  }
  return gameObject;
  /*
    - Este item se obtiene sobre una relacion del valor de inteligencia.
    - Si el valor de inteligencia de la heroina es menor o igual 5:
      80% probabilidad de sumar 1 globo, 20% de no obtener nada.
    - La condicion es inversa si inteligencia es mayor a 5
    - De obtener un item, actualizar el inventario en el gameObject
    - Imprimir en consola si el item fue agregado, o si el cofre no tenia nada.

    La función retorna un game object actualizado (stats e inventario)
  */
}
