// Escribir un programa que sume, resta, multiplique y divida dos números.

let num1;
let num2;
let suma;
let resta;
let division;
let multiplicacion;

num1 = parseInt(prompt('Ingrese el primer numero'));
num2 = parseInt(prompt('Ingrese el segundo numero'));

suma = num1 + num2;

alert(`el resultado de la suma es: ${suma}`)

resta = num1 - num2;

alert(`el resultado de la resta es: ${resta}`)

division = num1 / num2;

alert(`el resultado de la division es: ${division}`)

multiplicacion = num1 * num2;
alert(`el resultado de la multiplicacion es: ${multiplicacion}`)