function notasAlumnos() {
    const notas = prompt("Ingrese las notas separadas por coma:").split(",").map(Number);
    const notaAlta = Math.max(...notas);
    const notaBaja = Math.min(...notas);
    const max100 = notas.filter(n => n === 100).length;
    const a = notas.filter(n => n < 100 && n >= 90).length;
    const b = notas.filter(n => n < 90 && n >= 80).length;
    const c = notas.filter(n => n < 80 && n >= 70).length;
    const d = notas.filter(n => n < 70 && n >= 60).length;
    console.log(`Nota alta: ${notaAlta}, Nota baja: ${notaBaja}, Máximas: ${max100}, A: ${a}, B: ${b}, C: ${c}, D: ${d}`);
}
