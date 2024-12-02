// Escribir un programa que pida al usuario un número entero y muestre por pantalla si es par
// o impar.


let numero = parseInt(prompt("ingrese un numero entero"));

if (numero % 2 === 0) {
  alert(`${numero} es par.`);
} else {
  alert(`${numero} es impar.`);
}


