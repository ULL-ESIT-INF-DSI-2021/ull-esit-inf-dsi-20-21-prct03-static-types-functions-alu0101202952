//EJERCICIO 2
/*function decimalToFactorial(ndecimal : number): any{
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


    // funcion adicional que coja el máximo de los factoriales
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
  // @return maxfactorial de usar la factorial recursivo
  }
  //Funcion calcular el factorial funciona
function factorialrecursive(nfactorial: number): any {
  if (nfactorial == 0){
    return 1;
  }
  return nfactorial * factorialrecursive (nfactorial-1);
}

let resultado = decimalToFactorial(463);
console.log(`El número factorial es: ${resultado}` );
*/ 
