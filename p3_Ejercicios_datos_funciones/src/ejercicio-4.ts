/**
 * ### EJERCICIO 4:
 * #### ¿En qué consiste?
 * Pasas al programa dos patrones de nombrar variables tipo : SnakeCase y CamelCase (`hola_mundo` y `holaMundo`), respectivamente y puede pasar de un tipo de patrón al otro con dos funciones **fromSnakeToCamelCase** y **fromCamelToSnakeCase**
 * #### FUNCIÓN `fromSnakeToCamelCase`
 * @param cadenasnake Consiste en la cadena que cumple con las reglas de patrón de **SnakeCase**
 * @return cadenacamel la cadena correspondiente pero con el patrón **CamelCase**
 * #### FUNCIÓN `fromCamelToSnakeCase`
 * @param cadenacamel Consiste en la cadena que cumple con las reglas de patrón de **CamelCase**
 * @return cadenasnake la cadena correspondiente pero con el patrón **SnakeCase**
 * 
 */

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

/**
 * ```typescript
 * 
 * cadena_snake = "sample_string";
 * @return `sampleString`
 * 
 * cadenaCamel = "sampleString";
 * @return `sample_string`
 * ```
 */
let cadena_snake = "sample_string";
console.log(`Cadena: ${cadena_snake}\n`);
console.log(`fromSnakeToCamelCase: ${fromSnakeToCamelCase(cadena_snake)}\n`);
console.log(`###################################################\n`);

let cadenaCamel = "sampleString";
console.log(`Cadena: ${cadenaCamel}\n`);
console.log(`fromCamelToSnakeCase:  ${fromCamelToSnakeCase(cadenaCamel)}`);
