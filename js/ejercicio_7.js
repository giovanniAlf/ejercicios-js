
const renta = parseFloat(prompt("Introduce tu renta anual:"));


let tipoImpositivo;

if (renta >= 10000 && renta < 20000) {
    tipoImpositivo = "5%";
} else if (renta >= 20000 && renta < 35000) {
    tipoImpositivo = "10%";
} else if (renta >= 35000 && renta < 60000) {
    tipoImpositivo = "20%";
} else if (renta >= 60000) {
    tipoImpositivo = "45%";
} else {
    tipoImpositivo = "0% (No se aplica impuesto)";
}


console.log(`Tu tipo impositivo es: ${tipoImpositivo}`);
