function anosCumplidos() {
    const edad = parseInt(prompt("Ingrese su edad:"));
    console.log(Array.from({ length: edad }, (_, i) => i + 1).join(", "));
}