function burlon(gameObject) {
  /*
    - burlon puede ser eliminado si se usa una linterna en su contra.
    - Se obtiene +5 en carisma si burlon es eliminado.
    - Si se usa una linterna, recuerda actualizar el inventario.
​
    - Si no se tiene una linterna, burlon atacara, lo cual disminuira la carisma en -10
    - Si burlon ataca y la carisma es igual o menor a 0, restar -2 en todos los atributos restantes

​
    - Al final del encuentro, chequear si la heroina sigue viva
    - La condicion para que chequear la muerte es que la vida sea menor a 0.
    - La vida es la sumatoria de los 4 atributos
​

    Imprimir cada accion en la consola:
    - Si burlon ataca.
    - Si burlon fue eliminado usando una linterna.
    - Cantidad de linternas restantes

     La función retorna un game object actualizado (stats e inventario)
  */
 let newGameObject = gameObject;
 if(gameObject.items.linterna > 0) {
   newGameObject.stats.carisma += 5;
   newGameObject.items.linterna -= 1;
   console.log('Burlón eliminado con linterna');
   console.log('Linternas restantes: ', newGameObject.items.linterna);
  }
  else {
    if(gameObject.stats.carisma <= 0){
      newGameObject.stats.fuerza -= 2;
      newGameObject.stats.belleza -= 2;
      newGameObject.stats.inteligencia -= 2;
    }
    else{
      newGameObject.stats.carisma -= 10;
    }
    console.log('Burlón ataca');
    console.log('Linternas restantes: ', newGameObject.items.linterna);
  }

  const {carisma, fuerza, belleza, inteligencia} = gameObject.stats;
  if(carisma + fuerza + belleza + inteligencia < 0){
    console.log('Estado Heroina: ' + vida)
  }
  return newGameObject;
}
function obtenerLinterna(gameObject) {
  /*
    - Este item se obtiene sobre una relacion del valor de carisma.
    - Si el valor de carisma de la heroina es menor o igual 5:
      80% probabilidad de sumar 1 linterna, 20% de no obtener nada.
    - La condicion es inversa si carisma es mayor a 5
    - De obtener un item, actualizar el inventario en el gameObject
    - Imprimir en consola si el item fue agregado, o si el cofre no tenia nada.

    La función retorna un game object actualizado (stats e inventario)
  */
 const {carisma} = gameObject.stats;
  let newGameObject = gameObject;
  if(carisma <= 5){
    let probaLinterna = Math.random();

    if(probaLinterna >= 0.8){
      newGameObject.items.linterna += 1;
      console.log('Se agregó linterna');
    }
    else{
      console.log('Cofre vacío');
    }
  }
  else{
    let probaLinterna = Math.random();

    if(probaLinterna <= 0.2){
      newGameObject.items.linterna += 1;
      console.log('Se agregó linterna');
    }
    else{
      console.log('Cofre vacío');
    }
  }

  return newGameObject;
}