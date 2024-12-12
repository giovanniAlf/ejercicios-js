function trianguloInvertido() {
    const altura = parseInt(prompt("Ingrese la altura del triángulo:"));
    console.log(Array.from({ length: altura }, (_, i) => "*".repeat(altura - i)).join("\n"));
}