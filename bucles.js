'use strict';

const helado= prompt("Indique que topping quiere");
const usuario= helado;
// const sintopping = 1.90;
// const oreo = 1;
// const kitkat = 1.50;
// const brownie = 0.75;
// const lacasitos = 0.95;

if ( helado == "sintopping"){
    alert("El helado cuesta 1,90€")
} else if ( helado == "oreo"){
    alert("El helado cuesta 1€")
} else if ( helado =="kitkat"){
    alert("El helado cuesta 1.50€")
} else if ( helado =="brownie"){
    alert("El helado cuesta 0.75€")
} else if ( helado =="lacasitos"){
    alert("El helado cuesta 0.95€")
} else if ( (helado !== "oreo") || (helado !== "kitkat") || (helado !=="brownie") || (helado !== "lacasitos") || (helado!=="sintopping")) {
    alert("No tenemos este topping, lo sentimos");
    alert ("El helado sin topping cuesta 1,90€");
};