
const puntuacion = parseFloat(prompt("Introduce tu puntuación (0.0, 0.4, 0.6 o más):"));


let nivel;
let dinero;


if (puntuacion === 0.0) {
    nivel = "Inaceptable";
} else if (puntuacion === 0.4) {
    nivel = "Aceptable";
} else if (puntuacion >= 0.6) {
    nivel = "Meritorio";
} else {
    nivel = "Puntuación no válida";
}


if (nivel !== "Puntuación no válida") {
    dinero = 2400 * puntuacion;
    console.log(`Nivel de rendimiento: ${nivel}`);
    console.log(`Cantidad de dinero obtenida: ${dinero.toFixed(2)}€`);
} else {
    console.log("Has introducido una puntuación no válida.");
}
