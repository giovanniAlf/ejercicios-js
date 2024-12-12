const DOLAR = 4000;  
const EURO = 4500;  

let pesos = 100_000;  

let dolares = pesos / DOLAR;
let euros = pesos / EURO;

console.log("Dólares:", dolares.toFixed(2));
console.log("Euros:", euros.toFixed(2));
