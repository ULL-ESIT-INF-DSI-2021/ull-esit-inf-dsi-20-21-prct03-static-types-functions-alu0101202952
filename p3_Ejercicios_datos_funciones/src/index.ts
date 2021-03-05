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


//EJERCICIO 6
/*
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

var ISBN = "3-598-21508-7";
console.log(`ISBN: ${ISBN}`);
console.log(`${isValidISBN(ISBN)}`);
*/


//#########################################################
//EJERCICIO 7
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

var cifrain = 12;
console.log(`${changeDigit(12)}`);
*/



//######################################################################
//EJERCICIO 9
/*
function calcularDaño(ataque: number, efectividad: number){
  var daño:number;
  var defensa:number = 204;
  daño = 50 * (ataque/defensa)*efectividad;
  return daño;
}

function efectividadPokemon(tipo1: string, tipo2: string, ataque1: number, ataque2: number){
  var efectividad1: number = 1;
  var efectividad2: number = 1;
  if(tipo1 == "fuego"){
    switch(tipo2){
      case "agua":
        efectividad1 = efectividad1*0.5;
        efectividad2 = efectividad2*2;
        break;
      case "hierba":
        efectividad1 = efectividad1*2;
        efectividad2 = efectividad2*0.5;
        break;
       case "eléctrico":
        efectividad1 = efectividad1*1;
        efectividad2 = efectividad2*1; 
        break;
      default:
        efectividad1 = efectividad1*0.5;
        break;
    }
   } else if(tipo1 == "agua"){
      switch(tipo2){
        case "fuego":
          efectividad1 = efectividad1*2;
          efectividad2 = efectividad2*0.5;
          break;
        case "hierba":
          efectividad1 = efectividad1*0.5;
          efectividad2 = efectividad2*2;
          break;
         case "eléctrico":
          efectividad1 = efectividad1*0.5;
          efectividad2 = efectividad2*2; 
          break;
        default:
          efectividad1 = efectividad1*0.5;
          break;
      }
    } else if(tipo1 == "hierba"){
      switch(tipo2){
        case "fuego":
          efectividad1 = efectividad1*0.5;
          efectividad2 = efectividad2*2;
          break;
        case "agua":
          efectividad1 = efectividad1*2;
          efectividad2 = efectividad2*0.5;
          break;
         case "eléctrico":
          efectividad1 = efectividad1*1;
          efectividad2 = efectividad2*1; 
          break;
        default:
          efectividad1 = efectividad1*0.5;
          break;
      }
    } else if(tipo1 == "eléctrico"){
      switch(tipo2){
        case "fuego":
          efectividad1 = efectividad1*1;
          efectividad2 = efectividad2*1;
          break;
        case "agua":
          efectividad1 = efectividad1*2;
          efectividad2 = efectividad2*0.5;
          break;
         case "hierba":
          efectividad1 = efectividad1*1;
          efectividad2 = efectividad2*1; 
          break;
        default:
          efectividad1 = efectividad1*0.5;
          break;
      }
    } else {
    console.log(`Tipos no reconocidos`)
  }
  var dañoPoke1= calcularDaño(ataque1, efectividad1);
  dañoPoke1 = Math.round(dañoPoke1);
  console.log(`Daño que causa tu equipo Pokemon: ${dañoPoke1}`);

  var dañoPoke2= calcularDaño(ataque2, efectividad2);
  dañoPoke2 = Math.round(dañoPoke2);
  console.log(`Daño que realiza el equipo rival: ${dañoPoke2}`);
  
}

let pokemon1 = "eléctrico";
let pokemon2 = "agua";
let capacidad_ataque1 = 100;
let capacidad_ataque2 = 160;
console.log(`Tipo de tu pokemon:  ${pokemon1},  Ataque = ${capacidad_ataque1}`);
console.log(`Tipo del pokemon rival:  ${pokemon2},  Ataque = ${capacidad_ataque2}\n`);
console.log(`┌───────────────────── ∘°❉°∘ ─────────────────────┐\n`);
console.log(`\t\t       FIGHT\n`);
console.log(`└───────────────────── °∘❉∘° ─────────────────────┘\n`);
console.log(`...\n`);
console.log(efectividadPokemon(pokemon1,pokemon2,capacidad_ataque1,capacidad_ataque2));
*/