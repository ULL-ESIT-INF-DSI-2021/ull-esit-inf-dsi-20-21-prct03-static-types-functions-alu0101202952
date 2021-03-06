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