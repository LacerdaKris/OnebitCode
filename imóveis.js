let imóveis = {};
total = 0;
let opção = "";

do {
  opção = prompt(
    "Imóveis cadastrados: " +
      total +
      "\n" +
      "Digite:\n1) Para cadastrar um imóvel\n2) Mostrar todos os imóveis\n3) Sair"
  );

  switch (opção) {
    case "1":
      let proprietario = prompt("Nome do proprietário: ");
      let quartos = prompt("Quantidade de quartos: ");
      let banheiros = prompt("Quantidade de banheiros: ");
      let garagem = prompt("Possui garagem? (sim/não) ");
      total += 1;
      imóveis.imóvel({
        "Nome do proprietário: ": proprietario,
        "Quartos: ": quartos,
        "Banheiros: ": banheiros,
        "Garagem: ": garagem,
      });
      break;
    case "2":
      alert(imóveis);
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida");
  }
} while (opção != "3");
