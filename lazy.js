function lazy(gameObject) {

  let { carisma, fuerza, belleza, inteligencia } = gameObject.stats;


  if (gameObject.items.tijera > 0) {
    console.log("Lazy fue eliminada usando una tijera");
    gameObject.stats.belleza += 5;
    gameObject.items.tijera--;
  } else {
    console.log("Lazy ataca");
    gameObject.stats.belleza -= 10;
    if (gameObject.stats.belleza <= 0) {
      gameObject.stats.carisma -= 2;
      gameObject.stats.fuerza -= 2;
      gameObject.stats.inteligencia -= 2;
    }
  }

  const propiedad = 1;

  const obj = {
    propiedad
  }

  console.log(`Quedan ${gameObject.items.tijera} tijera(s)`);


  return gameObject;
}

/*
    - Este item se obtiene sobre una relacion del valor de belleza.
    - Si el valor de belleza de la heroina es menor o igual 5:
      80% probabilidad de sumar 1 tijera, 20% de no obtener nada.
    - La condicion es inversa si belleza es mayor a 5
    - De obtener un item, actualizar el inventario en el gameObject
    - Imprimir en consola si el item fue agregado, o si el cofre no tenia nada.

    La función retorna un game object actualizado (stats e inventario)
  */
function obtenerTijera(gameObj) {
  let randomNumber = Math.random() * 100;
  console.log(randomNumber);
  if (gameObj.stats.belleza <= 5) {
    if (randomNumber <= 80) {
      gameObj.items.tijera++;
      console.log("Se encontro una tijera");
    } else {
      console.log("El cofre esta vacio");
    }
  } else {
    if (randomNumber <= 20) {
      gameObj.items.tijera++;
      console.log("Se encontro una tijera");
    } else {
      console.log("El cofre esta vacio");
    }
  }

  return gameObj;
}