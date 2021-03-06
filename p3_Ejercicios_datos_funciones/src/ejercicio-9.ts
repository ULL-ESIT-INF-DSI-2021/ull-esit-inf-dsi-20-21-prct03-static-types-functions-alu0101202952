//POKEMON uwu
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