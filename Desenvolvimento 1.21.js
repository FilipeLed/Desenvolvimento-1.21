function buscaLinear(array, valor) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === valor) {
        return i; // Retorna o índice onde o valor foi encontrado
      }
    }
  
    return -1; // Retorna -1 se o valor não for encontrado no array
  }
  
  const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
  const valorBuscado = 20;
  
  const indiceEncontrado = buscaLinear(array, valorBuscado);
  
  if (indiceEncontrado !== -1) {
    console.log(`Valor ${valorBuscado} encontrado no índice ${indiceEncontrado}.`);
  } else {
    console.log(`Valor ${valorBuscado} não encontrado no array.`);
  }
  