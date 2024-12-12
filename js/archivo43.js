let regex = /"(?:[^"\\]|\\.)*"/g;
let ejemplo = '"Esto es una cadena con \"comillas\" escapadas"';
console.log(ejemplo.match(regex));
