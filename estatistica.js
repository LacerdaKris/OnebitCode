//passando varios números como parâmetro e o reduce itera sobre cada um, seu valor começa 0
const mediaSimples = (...numeros) => {
  let somaNumeros = numeros.reduce(
    (acumulador, numero) => acumulador + numero,
    0
  );
  return somaNumeros / numeros.length;
}
console.log(`Média Aritmética Simples: ${mediaSimples(2, 6, 3, 7, 4)}`);

//passando varios números, cada um multiplicado por seu peso para chegar num valor proporcional
function mediaPonderada(...entradas) {
  //se não existir peso no número, considerar peso 1 (p ?? 1)
  let multiplicaEsoma = entradas.reduce(
    (acumulador, { n, p }) => acumulador + n * (p ?? 1),
    0
  );
  return (
    multiplicaEsoma /
    entradas.reduce((acumulador, entrada) => acumulador + (entrada.p ?? 1), 0)
  );
}
console.log(
  `Média Aritmética Ponderada: ${mediaPonderada(
    { n: 9, p: 3 },
    { n: 7, p: 1 },
    { n: 10, p: 1 }
  )}`
);

//passando uma lista, e a ordenando. Se ela tem um número central ele é a mediana
//Se não, faz a média dos dois números centrais
function mediana(lista) {
  const array = [...lista].sort((a, b) => a - b);
  const arrayDividido = array.length / 2;
  if (array.length % 2 !== 0) {
    const centroArray = array[Math.floor(arrayDividido)];
    return centroArray;
  } else {
    const centroArray = mediaSimples(array[arrayDividido], array[arrayDividido - 1]);
    return centroArray;
  }
}
const arrayComCentral = [15, 14, 8, 7, 3];
const arraySemCentral = [2, 8, 7, 110, 40, 9];
console.log(`Mediana: ${mediana(arraySemCentral)}`);

//identificar qual número se repete mais vezes no conjunto
const moda = (...conjunto) => {
  const quantidades = conjunto.map(num => [
    num,
    conjunto.filter(n => num === n).length
  ])
  quantidades.sort((a, b) => b[1] - a[1])
  return quantidades[0][0]
}
console.log(`Moda: ${moda(1, 2, 3, 4, 4, 5, 5, 4, 4)}`);
