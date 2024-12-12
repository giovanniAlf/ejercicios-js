function numeroAleatorioParImpar() {
    const numero = Math.floor(Math.random() * 10) + 1;
    console.log(`El número es ${numero}, y es ${numero % 2 === 0 ? "Par" : "Impar"}`);
}
