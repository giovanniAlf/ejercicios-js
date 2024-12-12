function verificarContrasena() {
    const contrasena = "password123";
    let intento;
    do {
        intento = prompt("Ingrese la contraseña:");
    } while (intento !== contrasena);
    console.log("Contraseña correcta.");
}