function eco() {
    let entrada;
    do {
        entrada = prompt("Escriba algo (o 'salir' para terminar):");
        if (entrada !== "salir") console.log(entrada);
    } while (entrada !== "salir");
}