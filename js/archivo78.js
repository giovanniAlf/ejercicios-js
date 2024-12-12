function contarSilabas(palabra) {
    const silabas = palabra.match(/[aeiouáéíóúü]+/gi)?.length || 0;
    console.log(`La palabra "${palabra}" tiene ${silabas} sílabas.`);
}
