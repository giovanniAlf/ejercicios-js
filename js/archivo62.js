function repetirPalabra() {
    const palabra = prompt("Ingrese una palabra:");
    console.log(palabra.repeat(10).split(palabra).join("\n"));
}