/**
 * ### EJERCICIO 7:
 * #### ¿En qué consiste?
 * El programa recibe como parámetro un entero positivo y devuelve el siguiente número mayor que pueda ser formado al reposicionar sus dígitos.
 * @param cifra Consiste en el número con mínimo dos dígitos para poder reposicionar dichos dígitos entre sí
 * @return `resultado` El número siguiente mayor que puede ser formado al reposicionar los dígitos de `cifra`.
 *
 */
/*
function changeDigit(cifra: number){
  var change= cifra.toString(); //trabajamos con strings
  var auxstr = [];
  var valoresAceptados = /^[0-9]+$/;
  var valminimo = [0];
  for(var i = 0; i < change.length; i++){
    var character = change.charAt(i);
    var auxnumber = parseInt(character);
    auxstr.push(character);
    console.log(auxstr);
    if(auxstr[i] < auxstr[i+1]){

    }
  }
}

/**
 * ```typescript
 * cifrain = 12;
 * @return `21`
 * ```
 */ /*
var cifrain = 12;
console.log(`${changeDigit(12)}`);*/
