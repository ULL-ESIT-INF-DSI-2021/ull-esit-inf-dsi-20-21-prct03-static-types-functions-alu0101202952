//console.log('Hola Mundo!');
/**
 * ### Adds two numbers
 * @param year Consists of the **first** operand of the addition
 * 
 */

 //###############################################################################
 //EJERCICIO 2
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
}*/


    // funcion adicional que coja el máximo de los factoriales
  /*function maxfactorial(ndecimal: number){
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


 //###############################################################################
//EJERCICIO 3
/*
function isValid(cadena: string){
  var valoresAceptados = /^[0-9]+$/;
  var letrasAceptadas =  /^[a-z]+$/;
  var letras='abcdefghijklmnopqrstuvwxyz';
  for(var i = 0; i < cadena.length; i++){
    var character = cadena.charAt(i); //cojo cada caracter de la cadena
    if(character.indexOf(cadena) && character.match(valoresAceptados)){  //si el caracter que cojo es un número 
      var pos= i+(parseInt(character,i)); //sumar a la posición actual tantos caracteres como el número inicial
      var posletra = pos.toString(); //convierto a string
      if(posletra.indexOf(letras)){ //sabemos si hasta ese punto es una letra
        pos = pos+1;  //4hola, a<- pos[4]
        posletra = pos.toString();
        var aux = cadena.charAt(pos);
        if(posletra.indexOf(letras)){
          if(aux.match(letrasAceptadas)){
            return false;
          } else if(aux.match(valoresAceptados)){
            return false;
          } else 
          return true;
        } 
      }
    }
  }
}

let result1 = isValid("2hi");
console.log(`Muestreo1: ${result1}`);

let result2 = isValid("5hello");
console.log(`Muestreo2: ${result2}`);

let result3 = isValid("2hi3");
console.log(`Muestreo3: ${result3}`);

let result4 = isValid("2hiii");
console.log(`Muestreo4: ${result4}`);
*/


//

//EJERCICIO 5
/*var cadena = "Beard Jeans Hairbrush Knuckleduster Sand";
var reemplazo1 = /a/g;
var reemplazo2 = /e/g;

function onePunch(cadena: string){
  var resultado = cadena.replace(reemplazo1, '');
  resultado = resultado.replace(reemplazo2,'');
  return resultado;
}

console.log(`${cadena} => ${onePunch(cadena)}`);
*/