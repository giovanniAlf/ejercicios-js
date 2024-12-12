function tablasMultiplicar() {
    for (let i = 1; i <= 10; i++) {
        console.log(`Tabla del ${i}:\n${Array.from({ length: 10 }, (_, j) => `${i} x ${j + 1} = ${i * (j + 1)}`).join("\n")}\n`);
    }
}
