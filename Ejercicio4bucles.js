'use strict';
const diametro = prompt("Indique el diámetro de la rueda");
const grosor = prompt("Indique el grosor de la rueda");

if (diametro>= 1.4){
    alert ("La rueda es para un vehículo grande")
} else if (diametro <= 1.4 && diametro > 0.8){
    alert( "La rueda es para un vehículo mediano")
} else {
    alert ("La rueda es para un vehículo pequeño")
};

if ((diametro>1.4 && grosor<0.4) || (diametro<= 1.4  && diametro >0.8 && grosor <0.25)){
    alert("EL grosor para esta rueda es inferior al recomendado")
}