const imoveis = [];
let opção = "";

do {
  opção = prompt(
    "Imóveis cadastrados: " +
      imoveis.length +
      "\n" +
      "Digite:\n1) Para cadastrar um imóvel\n2) Mostrar todos os imóveis\n3) Sair"
  );

  switch (opção) {
    case "1":
      const imovel = {};
      imovel.proprietario = prompt("Nome do proprietário: ");
      imovel.quartos = prompt("Quantidade de quartos: ");
      imovel.banheiros = prompt("Quantidade de banheiros: ");
      imovel.garagem = prompt("Possui garagem? (sim/não) ");

      const confirma = confirm(
        "Salvar este imóvel?\n" +
          "\nProprietário: " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quartos +
          "\nBanheiros: " +
          imovel.banheiros +
          "\nPossui Garagem? " +
          imovel.garagem
      );
      if (confirma) {
        imoveis.push(imovel);
      }
      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nProprietário: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiros +
            "\nPossui Garagem? " +
            imoveis[i].garagem
        );
      }
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida");
  }
} while (opção !== "3");
