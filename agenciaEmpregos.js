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
    textoFinal += indice + 1 + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n";
    return textoFinal;
  }, "");

  alert(vagasEmTexto);
}

function verVaga() {
  const indice = prompt("Digite o número de índice da vaga: ");
  const vaga = vagas[indice - 1];
  const vagaEmTexto =
    "Nome: " +
    vaga.nome +
    "\nDescrição: " +
    vaga.descricao +
    "\nData limite: " +
    vaga.data +
    "\nCandidatos: " +
    vaga.candidatos;
  alert(vagaEmTexto);
}

function inscreverCandidato() {
  const candidato = prompt("Nome completo do(a) candidato(a): ");
  const indice = prompt("Digite o número de índice da vaga: ");
  const vaga = vagas[indice - 1];

  const confirma = confirm(
    "Confirma inscrição de " +
      candidato +
      "nesta vaga?\n Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.data +
      "\nTotal de candidatos inscritos: " +
      vaga.candidatos.length
  );
  if (confirma) {
    vaga.candidatos.push(candidato);
    alert("Inscrição realizada!");
  }
}

function excluirVaga() {
  const indice = prompt("Digite o número da vaga que deseja excluir: ");
  const vaga = vagas[indice - 1];

  const confirma = confirm(
    "Confirma a exclusão da seguinte vaga?\n Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nTotal de candidatos inscritos: " +
      vaga.candidatos.length
  );
  if (confirma) {
    vagas.splice(vaga, 1);
    alert("Vaga excluída!");
  }
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
        verVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Saindo...");
    }
  } while (opcao !== "6");
}

executar();
