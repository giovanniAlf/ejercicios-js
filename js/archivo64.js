function numerosImpares() {
    const numero = parseInt(prompt("Ingrese un número entero positivo:"));
    console.log(Array.from({ length: numero }, (_, i) => i + 1).filter(n => n % 2 !== 0).join(", "));
}