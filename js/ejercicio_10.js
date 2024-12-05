
const esVegetariana = prompt("¿Quieres una pizza vegetariana? (sí/no):").toLowerCase();


const ingredientesVegetarianos = ["Pimiento", "Tofu"];
const ingredientesNoVegetarianos = ["Pepperoni", "Jamón", "Salmón"];

const ingredientesBase = ["Mozzarella", "Tomate"];

let ingredientesDisponibles;
let tipoPizza;

if (esVegetariana === "sí") {
    tipoPizza = "Vegetariana";
    ingredientesDisponibles = ingredientesVegetarianos;
} else if (esVegetariana === "no") {
    tipoPizza = "No Vegetariana";
    ingredientesDisponibles = ingredientesNoVegetarianos;
} else {
    console.log("Opción no válida. Por favor, recarga la página e inténtalo de nuevo.");
}

if (ingredientesDisponibles) {

    const ingredienteElegido = prompt(
        `Elige un ingrediente para tu pizza (${ingredientesDisponibles.join(", ")}):`
    );

    if (ingredientesDisponibles.includes(ingredienteElegido)) {

        console.log(`Has elegido una pizza ${tipoPizza}.`);
        console.log(`Ingredientes: ${ingredientesBase.join(", ")}, ${ingredienteElegido}.`);
    } else {
        console.log("Has elegido un ingrediente no válido.");
    }
}
