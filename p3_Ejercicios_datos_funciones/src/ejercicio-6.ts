/**
 * ### EJERCICIO 6:
 * #### ¿En qué consiste?
 * Programa basado en el [Proceso de verificación ISBN-10](https://en.wikipedia.org/wiki/International_Standard_Book_Number) se usa para validar la identificación de números. Normalmente contienen guiones y siguen un patrón como: 3-598-21508-8.
 * @param cadena Consiste en la cadena correspondiente al código ISBN que se le pasa para validar la identificación de los números
 * @return `true` Si el ISBN cumple las reglas, es decir, es válido 
 * @return `false` Si el ISBN **NO** cumple las reglas, es decir, es válido
 * 
 */

function isValidISBN(cadena: string){
  var cadenalen: number = 10;
  var valoresAceptados = /^[0-9]+$/;
  var resultado = cadena.replace('x', '10');
  var re2:number = 0;
  var re1:number = 0;
  for(var i = 0; i<cadena.length;i++){
    var character =cadena.charAt(i);
    var charint = parseInt(character);
    if(character.match(valoresAceptados) && cadenalen > 0){
      re1 = (charint * cadenalen);
      re2 = re2 + re1;
      cadenalen--;
    }
    if(character == 'x'){
      resultado;
      return console.log(true);
    }
  }
  if(re2 % 11==0){
    return console.log(true);
  } else{
    return console.log(false);
  }
}

/**
 * ```typescript
 * ISBN = "3-598-21508-7";
 * @return `false`
 * ```
 */
var ISBN = "3-598-21508-7";
console.log(`ISBN: ${ISBN}`);
console.log(`${isValidISBN(ISBN)}`);

