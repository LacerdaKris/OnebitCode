function novaVaga() {
  vaga.nome = prompt("Nome da vaga: ");
  vaga.descricao = prompt("Descrição: ");
  vaga.data = prompt("Data limite: ");
  vaga.candidatos = [];
  vaga.total = 0;
  return vaga;
}
function listarVaga(indice, nome, total) {
  alert(indice + " - " + nome + "\nCandidatos inscritos nesta vaga: " + total);
}
const vaga = {};
const vagas = [];
let opcao = "";
do {
  opcao = prompt(
    "Digite o número da opção desejada:\n1- Listar vagas disponíveis\n2- Criar um nova vaga\n3- Visualizar uma vaga\n4- Inscrever um candidato em uma vaga\n5- Excluir uma vaga\n6- Sair"
  );
  switch (opcao) {
    case "1":
      vagas.forEach(listarVaga);
      break;
    case "2":
      novaVaga();
      const confirma = confirm(
        "Salvar os dados desta vaga?\n" +
          "Nome: " +
          vaga.nome +
          "\n" +
          "Descrição: " +
          vaga.descricao +
          "\n" +
          "Data limite: " +
          vaga.data
      );
      if (confirma) {
        vagas.unshift(vaga);
        vaga.shift();
      }
      break;
    case "3":
      //pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
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

//testes
const vagas = [
  {
    nome: "vendedor",
    descricao: "vendas internas e orçamentos",
    data: 25 / 02,
    candidatos: ["fulano", "ciclano", "beltrano"],
    total: 3,
  },
  {
    nome: "auxiliar adm",
    descricao: "agendamentos, arquivos e rotinas adm",
    data: 25 / 02,
    candidatos: ["mariazinha"],
    total: 1,
  },
];

function listarVaga(indice, nome, total) {
  console.log(
    indice + " - " + nome + "\nCandidatos inscritos nesta vaga: " + total
  );
}

vagas.forEach(listarVaga);
