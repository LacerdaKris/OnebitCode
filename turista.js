const turista = prompt("Insira o nome do turista:");
let visitou = prompt("Visitou alguma cidade? (sim/não)").toUpperCase();
let cidades = [];

while (visitou == "SIM") {
  let cidade = prompt("Qual o nome da cidade?");
  cidades.push(cidade);
  visitou = prompt("Visitou mais alguma cidade? (sim/não)").toUpperCase();
}

alert(
  turista +
    "visitou um total de " +
    cidades.length +
    " cidades.\nSão elas: " +
    cidades
);
