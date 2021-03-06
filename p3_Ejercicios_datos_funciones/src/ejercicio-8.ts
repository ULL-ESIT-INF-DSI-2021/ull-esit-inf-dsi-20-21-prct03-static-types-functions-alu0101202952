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