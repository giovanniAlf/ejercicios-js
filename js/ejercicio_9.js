
const edad = parseInt(prompt("Introduce tu edad:"));


let precio;

if (edad < 4) {
    precio = "gratis";
} else if (edad >= 4 && edad <= 18) {
    precio = "5€";
} else if (edad > 18) {
    precio = "10€";
} else {
    precio = "Edad no válida";
}


if (precio === "Edad no válida") {
    alert("Has introducido una edad no válida.");
} else {
    alert(`El precio de tu entrada es: ${precio}`);
}
