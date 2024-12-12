// Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura
// Considere que se cobra por m2 y realice el código que representen el algoritmo que le
// permita ir generando presupuestos para cada cliente


function calcularPresupuesto() {

    let nombreCliente = prompt("Ingrese el nombre del cliente:");
    let metrosCuadrados = parseFloat(prompt("Ingrese los metros cuadrados a pintar:"));
    let precioPorMetro = parseFloat(prompt("Ingrese el precio por metro cuadrado:"));


    if (metrosCuadrados > 0 && precioPorMetro > 0) {
     
        let costoTotal = metrosCuadrados * precioPorMetro;

    
        console.log(`Presupuesto para ${nombreCliente}`);
        console.log(`Metros cuadrados: ${metrosCuadrados}`);
        console.log(`Precio por m²: $${precioPorMetro.toFixed(2)}`);
        console.log(`Costo total: $${costoTotal.toFixed(2)}`);
    } else {
        console.log("Por favor, ingrese valores válidos.");
    }
}


calcularPresupuesto();
