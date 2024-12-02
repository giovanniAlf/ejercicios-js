// escribir un programa que almacene la cadena de caracteres contraseña de una variable,
// pregunte al usuario por la contraseña e imprima por pantalla si la contraseña introducida
// por el usuario coincide con la guardada en la variable sin tener en cuenta mayúsculas y
// minúsculas, se debe validar que solo se pueda ingresar valores alfanuméricos.

export let key = "contraseña";

let password = prompt("Introduce la contraseña:");

if (key.toLowerCase() === password.toLowerCase()) {
  alert("La contraseña coincide");
} else {
  alert("La contraseña no coincide");
}





