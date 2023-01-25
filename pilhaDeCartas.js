// Pilha de cartas

let opções = "";
let baralho = [];

do {
  opções = prompt(
    "Cartas no baralho: " +
      baralho.length +
      "\n" +
      "Escolha uma opção digitando seu número:\n 1) Adicionar uma carta\n 2) Puxar uma carta\n 3) Sair"
  );

  switch (opções) {
    case "1":
      let nova = prompt("Nome da carta a adicionar:");
      baralho.push(nova);
      break;
    case "2":
      const cartaPuxada = baralho.pop();
      if (!cartaPuxada) {
        alert("Não há nenhuma carta no baralho!");
      } else {
        alert("Você puxou um(a) " + cartaPuxada);
      }
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida");
  }
} while (opções !== "3");
