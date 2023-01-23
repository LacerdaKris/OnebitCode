const num = prompt("Digite um número: ");
const numero = parseFloat(num);
let tabuada = "";
for (i = 1; i <= 20; i++) {
  tabuada += i + "X" + numero + "=" + i * numero + "\n";
}
alert("Tabuada do " + numero + ":\n" + tabuada);
