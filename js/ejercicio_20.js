let coefA = 1, coefB = -3, coefC = 2;
let discriminante = coefB ** 2 - 4 * coefA * coefC;

if (discriminante >= 0) {
    let raiz1 = (-coefB + Math.sqrt(discriminante)) / (2 * coefA);
    let raiz2 = (-coefB - Math.sqrt(discriminante)) / (2 * coefA);
    console.log("Raíces reales:", raiz1, raiz2);
} else {
    console.log("No tiene raíces reales.");
}
