let minutos = 10; 
let costoMinuto = 355;
let iva = 0.20;
let pagoSinIVA = minutos * costoMinuto;
let pagoConIVA = pagoSinIVA + (pagoSinIVA * iva);
console.log("Pago total:", pagoConIVA);
