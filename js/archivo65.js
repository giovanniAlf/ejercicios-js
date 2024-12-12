function cuentaAtras() {
    const numero = parseInt(prompt("Ingrese un número entero positivo:"));
    console.log(Array.from({ length: numero + 1 }, (_, i) => numero - i).join(", "));
}