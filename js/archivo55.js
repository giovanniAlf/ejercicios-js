let tipoMembresia = 'B';  // Ejemplo
let precio = 50_000;  // Ejemplo
let descuento = tipoMembresia === 'A' ? 0.10 : tipoMembresia === 'B' ? 0.15 : 0.20;

console.log("Total con descuento:", precio - (precio * descuento));
