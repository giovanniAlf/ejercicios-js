const PI = 3.1416;
let figura = 'T';  
if (figura === 'T') {
    let base = 10, altura = 5; 
    console.log("Área del triángulo:", (base * altura) / 2);
} else if (figura === 'C') {
    let radio = 7;  
    console.log("Área del círculo:", PI * radio * radio);
}
