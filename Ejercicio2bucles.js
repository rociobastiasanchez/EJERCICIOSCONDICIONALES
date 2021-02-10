'use strict';

const arrayDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

const usuario = prompt("Indique su DNI");
let letraDNI = usuario % 23;
console.log(letraDNI);
if (usuario < 0 || usuario >99999999 ) {
    alert("El número indicado no es válido")
} else {
    alert(arrayDNI[letraDNI])
};