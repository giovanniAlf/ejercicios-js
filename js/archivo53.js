let precios = [10_000, 20_000, 15_000, 25_000, 30_000];  
let subtotal = precios.reduce((sum, precio) => sum + precio, 0);
let iva = subtotal * 0.19;
let totalCompra = subtotal + iva;

console.log("Subtotal:", subtotal);
console.log("IVA:", iva);
console.log("Total:", totalCompra);
