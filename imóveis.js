let imóveis = [];
let opção = "";

do {
  opção = prompt(
    "Imóveis cadastrados: " +
      imóveis.lenght +
      "\n" +
      "Digite:\n1) Para cadastrar um imóvel\n2) Mostrar todos os imóveis\n3) Sair"
  );

  switch (opção) {
    case "1":
      const imovel = {}

      imovel.proprietario = prompt("Nome do proprietário: ");
      imovel.quartos = prompt("Quantidade de quartos: ");
      imovel.banheiros = prompt("Quantidade de banheiros: ");
      imovel.garagem = prompt("Possui garagem? (sim/não) ");
            }
      imóveis.unshift({
        "Nome do proprietário: ": proprietario,
        "Quartos: ": quartos,
        "Banheiros: ": banheiros,
        "Garagem: ": garagem,
      });
      break;
    case "2":
      alert(imóveis.join((separador = "\n")));
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida");
  }
} while (opção != "3");
