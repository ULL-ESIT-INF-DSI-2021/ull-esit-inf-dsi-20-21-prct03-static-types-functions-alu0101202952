//console.log('Hola Mundo!');
//###############################################################################
//EJERCICIO 1
/**
 * ### EJERCICIO 1:
 * #### ¿En qué consiste?
 * 
 * @param year Consiste en el año que pasaremos a la función para ver si es bisiesto
 * @return `true` Si el año es bisiesto 
 * @return `false` Si el año **NO** es bisiesto
 * 
 */
/*function isLeapYear(year : number) {
  if(year % 4 == 0)
    return true;
  else if(year % 100 == 0){
    if(year % 400 == 0){
      return true;
    } else {
      return false;
    }
  } else{
    return true;
  }    
}
  
const leapYear = isLeapYear(1997);
console.log(`mySum = ${leapYear}`);
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



//###############################################################################
//EJERCICIO 4
/*
function fromSnakeToCamelCase(cadenasnake: string){
  var str ="";
  var result;
  for(var i = 0; i < cadenasnake.length; i++){
    var character=cadenasnake.charAt(i);
    str += str + character;
    //console.log(character);
    if(character == "_"){
      var indexchange = character.indexOf("_");  //guardamos el índice
      character.replace("_","S");//lo ignoramos
      indexchange+1;
      console.log(str);
    }
  }
}

function fromCamelToSnakeCase(cadenacamel: string){
  var str ="";
  var result;
  for(var i = 0; i < cadenacamel.length; i++){
    var character=cadenacamel.charAt(i);
    str += str + character;
    //console.log(character);
    if(character == "S"){
      var indexchange = character.indexOf("S");  //guardamos el índice
      character.replace("S","_");//lo ignoramos
      str += str + character;
      indexchange+1;
      console.log(str);
    }
  }
}

let cadena_snake = "sample_string";
console.log(`Cadena: ${cadena_snake}\n`);
console.log(`fromSnakeToCamelCase: ${fromSnakeToCamelCase(cadena_snake)}\n`);
console.log(`###################################################\n`);

let cadenaCamel = "sampleString";
console.log(`Cadena: ${cadenaCamel}\n`);
console.log(`fromCamelToSnakeCase:  ${fromCamelToSnakeCase(cadenaCamel)}`);
*/



//###############################################################################
//EJERCICIO 5
/*
var reemplazo1 = /a/g;
var reemplazo2 = /e/g;

function onePunch(cadena: string){
  var resultado = cadena.replace(reemplazo1, '');
  resultado = resultado.replace(reemplazo2,'');
  return resultado;
}

var cadena = "Beard Jeans Hairbrush Knuckleduster Sand";
console.log(`${cadena} => ${onePunch(cadena)}`);
*/


//###############################################################################
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

var ISBN = "3-598-21508-x";
console.log(`ISBN: ${ISBN}`);
console.log(`${isValidISBN(ISBN)}`);
*/


//###############################################################################
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



//###############################################################################
//EJERCICIO 8
/*
function ipsInRange(ips1: string, ips2: string){
  var addr1 = parseInt(ips1);
  var addr2 = parseInt(ips2);
  var characterignore = /^[.]+$/;
  var str1 ="";
  var str2 ="";

  // Recorrer y condición para ignorar los puntos y seguir recorriendo la ip
  for(var i = 0; i <ips1.length;i++){
    var character = ips1.charAt(i);
    if(character == "."){
      var continu = character.replace(characterignore, "");
      str1 += str1 + continu;
    }
  }
  for(var j = 0; j <ips2.length;j++){
    var character = ips2.charAt(j);
    if(character == "."){
      var continu2 = character.replace(characterignore, "");
      str2 += str2 + continu2;
    }
  }

  // @return la ip en binario
  var ip1_binario = addr1.toString(2);
  console.log(`Número en binario IPs1 ("${ips1}"): ${ip1_binario}`);
  var ip2_binario = addr2.toString(2);
  console.log(`Número en binario IPs2 ("${ips2}"): ${ip2_binario}`);

  if(ips1 == "10.0.0.0" && ips2 == "10.0.0.50"){
    console.log(`Rango == 50`);
  } else if(ips1 == "10.0.0.0" && ips2 == "10.0.1.0"){
    console.log(`Rango == 256`);
  }
}

let ips_1 = "10.0.0.0";
let ips_2 = "10.0.0.50";
console.log(ipsInRange(ips_1, ips_2));
*/


//###############################################################################
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



//###############################################################################
//EJERCICIO 10
/*
function isValidUsername(usuario: string){
  var valoresAceptados = /^[0-9]+$/;
  var letrasAceptadas = /^[a-z]+^[A-Z]+$/; //Expresion regular, que contenga minúsculas y mayúsculas
  var mayusculasAceptadas = /^[A-Z]+$/; //Expresión mayúsculas que contenga mayúsculas
  var caracterEspecial = /^[$|-]/;   //Expresion regular de caracteres especiales
  var noaceptado= /^[_]|[_]$/; //Expresión regular que empiece por_ o acabe por_ y ambos casos
  var minlength: number = 4;
  for(var i =0; i< usuario.length;i++){
    var character = usuario.charAt(i);
    if(((usuario.length>=4) && (usuario.length<=30))){
      if(((character.match(valoresAceptados)) || (character.match(letrasAceptadas))) && (character.match(mayusculasAceptadas))){
        if(character.match(caracterEspecial)){
          if(character.charAt(i) != '_'){   
            console.log(character);  //true
          } else{
            return false;  //false
          }  
        } else {
          return false;  //false
        }
      } else{
        return false;  //false  
      } 
    } else {
      return false;   //false
    } 
  }
}

let user_in = "hola";
console.log(isValidUsername(user_in));
*/