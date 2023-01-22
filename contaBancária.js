let inicial = prompt("Digite o valor inicial da conta: ");
let valor = parseFloat(inicial);
do {
  opção = prompt(
    "Seu valor atual é de:" +
      valor +
      "\nEscolha uma opção: \n1) Adicionar dinheiro. \n2) Remover dinheiro. \n3) Sair"
  );
  switch (opção) {
    case "1":
      valor += parseFloat(prompt("Quanto deseja depositar?"));
      break;
    case "2":
      valor -= parseFloat(prompt("Quanto deseja sacar?"));
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida");
  }
} while (opção !== "3");
