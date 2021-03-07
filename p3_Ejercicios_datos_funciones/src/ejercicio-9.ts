/**
 * ### EJERCICIO 9:
 * #### ¿En qué consiste?
 * Pasas al programa el tipo de tu pokemon, el tipo del pokemon rival, la capacidad de ataque de tu pokemon y la capacidad de ataque del pokemon rival y te saca cuanto daño haces tu y cuanto daño te hace el rival con la fórmula del daño de la función adicional `calcularDaño`
 * #### FUNCIÓN **efectividadPokemon**
 * @param tipo1 Consiste en el tipo de tu pokemon (fuego|agua|hierba|eléctrico)
 * @param tipo2 Consiste en el tipo del pokemon rival (fuego|agua|hierba|eléctrico)
 * @param ataque1 Consiste en la capacidad de ataque de tu pokemon
 * @param ataque2 Consiste en la capacidad de ataque del pokemon rival
 * @return `efectividad1` y `efectividad2` Consiste en las efectividades del tipo del pokemon tuyo y el pokemon rival, respectivamente
 * #### FUNCIÓN **calcularDaño**
 * @param ataque Recibe el ataque del tipo
 * @param efectividad Recibe la efectividad
 * @return `daño` con la fórmula, teniendo la defensa predefinida a _204_, como estándar, el ataque y la efectividad se calcula el daño que hace el pokemon.
 * 
 */

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
  
/**
 * ```typescript
 * pokemon1 = "eléctrico";
 * pokemon2 = "agua";
 * capacidad_ataque1 = 100;
 * capacidad_ataque2 = 160;
 * @return `Daño que causa tu equipo Pokemon: ${dañoPoke1}`
 * @return `Daño que realiza el equipo rival: ${dañoPoke2}`
 * ```
 */
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
 