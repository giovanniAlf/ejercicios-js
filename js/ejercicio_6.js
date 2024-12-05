
const alumnos = [
    { nombre: "Ana", sexo: "F" },
    { nombre: "Carlos", sexo: "M" },
    { nombre: "Luis", sexo: "M" },
    { nombre: "María", sexo: "F" },
    { nombre: "Pedro", sexo: "M" },
    { nombre: "Sofía", sexo: "F" }
];

function asignarGrupos(alumnos) {
    const grupos = {
        grupoA: [],
        grupoB: []
    };

    alumnos.forEach(({ nombre, sexo }) => {
        const primeraLetra = nombre[0].toUpperCase();
        const esFemenino = sexo === "F";
        const esMasculino = sexo === "M";

        if ((esFemenino && primeraLetra < "M") || (esMasculino && primeraLetra > "N")) {
            grupos.grupoA.push({ nombre, sexo });
        } else {
            grupos.grupoB.push({ nombre, sexo });
        }
    });

    return grupos;
}


const gruposAsignados = asignarGrupos(alumnos);

console.log("Grupo A:", gruposAsignados.grupoA);
console.log("Grupo B:", gruposAsignados.grupoB);