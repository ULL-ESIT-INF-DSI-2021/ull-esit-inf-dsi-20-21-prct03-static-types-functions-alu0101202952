//Ejercicio 3
/*function isValid(cadena: string){
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