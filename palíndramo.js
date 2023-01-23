const palavra = prompt("Digite uma palavra: ");
let contrario = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  contrario += palavra[i];
}

if (palavra === contrario) {
  alert(palavra + " é um palíndramo!");
} else {
  alert(palavra + " não é um palíndramo, pois o inverso fica: " + contrario);
}
