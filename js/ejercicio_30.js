let password = "Abc12345";
let esFuerte = /^[A-Za-z\d]{8,12}$/.test(password) && 
               /[A-Z]/.test(password) && 
               /[a-z]/.test(password) && 
               /\d/.test(password);
console.log("Contraseña fuerte:", esFuerte);
