function menu() {
  opcao = prompt(
    "Bem-vindo(a) ao menu da agência de empregos!\n" +
      "Digite o número da opção desejada:\n" +
      "1- Listar vagas disponíveis\n" +
      "2- Criar um nova vaga\n" +
      "3- Visualizar uma vaga\n" +
      "4- Inscrever um candidato em uma vaga\n" +
      "5- Excluir uma vaga\n" +
      "6- Sair"
  );
  return opcao;
}

function novaVaga() {
  const nome = prompt("Nome da vaga: ");
  const descricao = prompt("Descrição: ");
  const data = prompt("Data limite: ");

  const confirma = confirm(
    "Salvar os dados desta vaga?\n" +
      "Nome: " +
      nome +
      "\n" +
      "Descrição: " +
      descricao +
      "\n" +
      "Data limite: " +
      data
  );

  if (confirma) {
    const novaVaga = { nome, descricao, data, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga criada!");
  }
}

function listarVaga() {
  const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
    textoFinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n";
    return textoFinal;
  }, "");

  alert(vagasEmTexto);
}

function verVaga(indice) {
  const vaga = vagas[indice]((textoFinal, vaga, indice) => {
    textoFinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n";
    return textoFinal;
  }, "");

  alert(vagasEmTexto);
}

const vagas = [];

function executar() {
  let opcao = "";
  do {
    opcao = menu();
    switch (opcao) {
      case "1":
        listarVaga();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        verVaga(prompt("Digite o número de índice da vaga: "));
        break;
      case "4":
        //pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
        break;
      case "5":
        //deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.
        break;
      case "6":
        alert("Saindo...");
    }
  } while (opcao !== "6");
}

executar();
