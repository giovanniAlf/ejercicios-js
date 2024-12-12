function trianguloRectangulo() {
    const altura = parseInt(prompt("Ingrese la altura del triángulo:"));
    console.log(Array.from({ length: altura }, (_, i) => "*".repeat(i + 1)).join("\n"));
}