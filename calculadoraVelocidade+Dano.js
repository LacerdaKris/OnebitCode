const veiculo1 = prompt("Insira o nome do primeiro veículo:");
const velocidade1 = prompt("E a sua velocidade:");
const veiculo2 = prompt("Insira o nome do segundo veículo:");
const velocidade2 = prompt("E a sua velocidade:");
const vel1 = parseFloat(velocidade1);
const vel2 = parseFloat(velocidade2);
if (vel1 > vel2) {
  alert("O carro mais rápido é:" + veiculo1);
} else if (vel2 > vel1) {
  alert("O carro mais rápido é:" + veiculo2);
} else {
  alert("Empate!");
}

const player1 = prompt("Nome do primeiro jogador:");
const pontosataque = prompt("Poder de ataque:");
const ataque = parseFloat(pontosataque);
const player2 = prompt("Nome do segundo jogador:");
const pontosvida = prompt("Quantidade de pontos de vida:");
const vida = parseFloat(pontosvida);
const pontosdefesa = prompt("Poder de defesa:");
const defesa = parseFloat(pontosdefesa);
const escudo = prompt("Tem um escudo? Digite 1 pra sim e 2 pra não");
let dano = 0;
if (ataque > defesa && escudo == 2) {
  dano = ataque - defesa;
} else if (ataque > defesa && escudo == 1) {
  dano = (ataque - defesa) / 2;
} else {
  dano = 0;
}
alert("Dano causado:" + dano + "\n" + "Pontos de vida atual:" + (vida - dano));
