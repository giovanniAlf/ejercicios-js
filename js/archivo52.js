let tipoEmpleado = 'planta';  
let horasTrabajadas = 40;  
let pago = tipoEmpleado === 'planta' ? 20_000 : 10_000;

console.log("Pago total:", horasTrabajadas * pago);
