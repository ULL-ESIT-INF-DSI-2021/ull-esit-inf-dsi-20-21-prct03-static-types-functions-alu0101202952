/**
 * ### EJERCICIO 10:
 * #### ¿En qué consiste?
 * Programa que comprueba la validez de un nombre de usuario según unos criterios
 * @param usuario Consiste en el nombre de usuario que le pasamos para validar
 * @return `true` Si es válido
 * @return `false` Si  **NO** es válido
 *
 */
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
  
/**
 * ```typescript
 * user_in = "hola";
 * @return `false`
 * ```
 */
/*
  let user_in = "hola";
  console.log(isValidUsername(user_in));
  */ 
