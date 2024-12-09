// Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada
// uno por $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000.
// Después de pagar le sobran $91000. ¿Cuánto dinero tenía?

let llaves = 1;
let valor_llaves = 11500;
let bomba = 1;
let valor_bomba = 1168000 ;
let cajaspernos = 1;
let valor_cajas = 87000;
let sobrante = 91000;

total_llaves = llaves + valor_llaves * 5;

// alert(`el total de las llaves fueron ${total_llaves}`)

total_pernos = cajaspernos + valor_cajas * 3;
// alert(`el total de los pernos fueron ${total_pernos}`)

totali = total_llaves + total_pernos + valor_bomba;
alert(` el valor de todas los elementos es de: ${totali}`)

sobro= totali - 91000;
alert(` le sobra: ${sobro}`)


