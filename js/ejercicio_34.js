// 34. Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
// depósito.
// a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
// b. Volumen = PI *(radio^2)* H (altura del depósito).
// El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el tiempo
// en segundos.



let tiempo = prompt("introduzca el tiempo");
let radio = prompt("introduzca el radio")
let H = prompt("introduzca la altura")



let volumen=  Math.PI *(radio^2)* H; 
let caudal = volumen / tiempo;


alert(`el volumen es ${volumen}`)
alert(`el caudal es: ${caudal}`)