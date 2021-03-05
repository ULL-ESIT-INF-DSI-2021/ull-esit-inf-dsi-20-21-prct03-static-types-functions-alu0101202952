/*function isValidISBN(cadena: string){
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
