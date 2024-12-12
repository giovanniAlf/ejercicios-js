let saldo = 120_000;  // Ejemplo
let interes = saldo < 100_000 ? 0.03 : 0.04;
let totalSaldo = saldo + (saldo * interes);

console.log("Interés:", saldo * interes);
console.log("Saldo final:", totalSaldo);
