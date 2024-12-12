function contarLetras() {
    const frase = prompt("Ingrese una frase:");
    const letra = prompt("Ingrese una letra:");
    const count = frase.split("").filter(c => c === letra).length;
    console.log(`La letra "${letra}" aparece ${count} veces.`);
}