'use strict';

const notas= [6,7,2,9,3,4,5,8,2];
// += es como decir x=x+y = x+=y
let suma = 0 ;
for (let i=0; i<9; i++) {
    console.log(notas[i]);
    suma += notas[i]
};

console.log(suma);

// for (const note of notas){
//     console.log(note);
// };