let productos = [1000, 2000, 3000, 4000, 5000];
let total = 0;
for (let i = 0; i < productos.length; i++) {
    let descuento = (i < 2 ? 0.05 : i > 2 ? 0.02 : 0);
    let precioFinal = productos[i] - (productos[i] * descuento);
    alert(`Producto ${i + 1}: $${precioFinal}`);
    total += precioFinal;
}

alert(`Total a pagar: ${precioFinal}`);
