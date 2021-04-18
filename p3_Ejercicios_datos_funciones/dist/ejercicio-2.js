/**
 * ### EJERCICIO 2:
 * #### ¿En qué consiste?
 * Dos funciones, una te convierte el decimal en notación factorial y la otra el factorial en notación decimal
 * ##### FUNCIÓN `decimalToFactorial`
 * @param ndecimal Consiste en el decimal que pasaremos a la función para convertirlo en su notación factorial
 * @return `factorial` correspondiente
 * ##### FUNCIÓN `maxfactorial`
 * @param ndecimal Consiste en el decimal que pasaremos a la función para encontrar el máximo factorial por el que se puede dividir
 * @return `factorialrecursive` el factorial correspondiente de llamar a la función recursiva que calcula los factoriales
 * ##### FUNCIÓN `factorialrecursive`
 * @param nfactorial Consiste en el factorial que pasaremos a la función para encontrar su resultado
 * @return `nfactorial * factorialrecursive (nfactorial-1)` el factorial correspondiente
 */
/*
function decimalToFactorial(ndecimal : number): any{
  do{
    for(var i = 0; ;i++){
      var maxfact = maxfactorial(i);
      var cociente;
      var resto;
      var result;
      cociente = ndecimal / maxfact;
      resto= ndecimal % maxfact;
      result += decimalToFactorial(resto);
      console.log(`${cociente} x  ${maxfactorial(i)}`);
    }
  } while(maxfactorial)
}

/*
function maxfactorial(ndecimal: number){
  do {
    for(var i = 0; ;i++){
      var fact = factorialrecursive(i);
      if(ndecimal >= fact){  //Buscar hasta que el decimal sea mayor o igual que el factorial
        i++;
      } else{
        return factorialrecursive(i-1);
      }
    }
  } while(factorialrecursive)//recorremos cada factorial
  /** @return maxfactorial de usar la factorial recursivo */
/*}
*/
/*
//Funcion calcular el factorial funciona
function factorialrecursive(nfactorial: number): any {
  if (nfactorial == 0){
    return 1;
  }
  return nfactorial * factorialrecursive (nfactorial-1);
}*/
/**
 * ```typescript
 * resultado = decimalToFactorial(463)
 * @return 341010
 * ```
 */
/*
let resultado = decimalToFactorial(463);
console.log(`El número factorial es: ${resultado}` );*/
