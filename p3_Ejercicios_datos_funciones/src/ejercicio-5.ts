/**
 * ### EJERCICIO 5:
 * #### ¿En qué consiste?
 * Pasas al programa una cadena a la cual se le eliminan las 'a' y 'e', para ello hacemos uso de expresiones regulares
 * @param cadena Consiste en la cadena a la cual se eliminarán las a'es y la e's.
 * @return `resultado` la cadena que ya tiene dichas vocales eliminadas.
 * 
 */

/**
 * @param reemplazo1 Es una expresión regular a la cual se le han eliminado las a's, con el flag `g` conseguimos que se repita en toda la cadena que se lee
 */
var reemplazo1 = /a/g;
/**
 * @param reemplazo2 Es una expresión regular a la cual se le han eliminado las e's, con el flag `g` conseguimos que se repita en toda la cadena que se lee
 */
var reemplazo2 = /e/g;

function onePunch(cadena: string){
  var resultado = cadena.replace(reemplazo1, '');
  resultado = resultado.replace(reemplazo2,'');
  return resultado;
}

/**
 * ```typescript
 * cadena = "Beard Jeans Hairbrush Knuckleduster Sand"
 * @return `=> Brd Hirbrush Jns Knuckldustr Snd`
 * ```
 */
var cadena = "Beard Jeans Hairbrush Knuckleduster Sand";
console.log(`${cadena} => ${onePunch(cadena)}`);