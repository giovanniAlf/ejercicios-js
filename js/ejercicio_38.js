// . Tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año.
// Martín toma 2/3 del total, Jairo un cuarto del total, y Lorena se queda con el resto. ¿Qué
// parte le corresponde a Lorena?


let martin = 2/3;
let jairo = 1/4;
let combinado = martin + jairo;


alert(`${combinado} del total.`);

let lorena = 1 - combinado;


alert(`A Lorena le corresponde ${lorena} del total.`);