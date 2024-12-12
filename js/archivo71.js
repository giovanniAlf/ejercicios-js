function esPrimo() {
    const numero = parseInt(prompt("Ingrese un número entero:"));
    const esPrimo = numero > 1 && Array.from({ length: numero - 2 }, (_, i) => i + 2).every(n => numero % n !== 0);
    console.log(esPrimo ? "Es primo" : "No es primo");
}
