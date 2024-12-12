let consumo = 150_000;  
let descuento = consumo > 130_000 ? 0.15 : 0;
let total = consumo - (consumo * descuento);

console.log("Total a pagar:", total);
