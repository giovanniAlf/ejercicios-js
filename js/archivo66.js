function calcularInversion() {
    const cantidad = parseFloat(prompt("Ingrese la cantidad a invertir:"));
    const interes = parseFloat(prompt("Ingrese el interés anual:")) / 100;
    const anos = parseInt(prompt("Ingrese el número de años:"));
    Array.from({ length: anos }, (_, i) => cantidad * Math.pow(1 + interes, i + 1)).forEach((capital, i) => {
        console.log(`Año ${i + 1}: ${capital.toFixed(2)}`);
    });
}