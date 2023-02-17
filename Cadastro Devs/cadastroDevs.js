//funções para automatizar a criação de inputs após clicar em "Adicionar tecnologia"
//pra criar a label recebe um texto e o "for" da tag criada:
function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.innerText = text;
  return label;
}
//pra criar input recebe os valores e texto de ex da caixa(placeholder) inicialmente vazio
function createInput(id, value, name, type = "text", placeholder = "") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

//variáveis globais
const addTechBtn = document.getElementById("add-button");
const form = document.getElementById("devform");
const devs = [];
//contador de linhas dentro da ul "stackinputs"
let inputRows = 0;

//função para informações da tecnologia quando o botão "adicionar tecnologia" for clicado
addTechBtn.addEventListener("click", function (ev) {
  //seleciona a ul vazia do HTML e cria uma nova linha dentro
  const stackInputs = document.getElementById("stackinputs");
  const newRow = document.createElement("li");
  //aumenta o contador pra numerar itens da lista e usar como índice
  inputRows++;
  const rowIndex = inputRows;
  //cada item da lista será da mesma classe, porém com id conf.indice
  newRow.id = "inputRow-" + rowIndex;
  newRow.className = "inputRow";

  //chamar funções pra criar nome e input da tecnologia passando parâmetros na mesma ordem
  const techNameLabel = createLabel("Nome: ", "techName-" + rowIndex);
  const techNameInput = createInput("nomeDev-" + rowIndex, null, "techName");
  //3 opções radio para tempo de experiência com a tecnologia acima
  const expLabel = createLabel("Experiência: ");
  const id1 = "expRadio-" + rowIndex + ".1";
  const expRadio1 = createInput(
    id1,
    "0-2 anos",
    "techExp-" + rowIndex,
    "radio"
  );
  const expLabel1 = createLabel("0-2 anos", id1);
  const id2 = "expRadio-" + rowIndex + ".2";
  const expRadio2 = createInput(
    id2,
    "3-4 anos",
    "techExp-" + rowIndex,
    "radio"
  );
  const expLabel2 = createLabel("3-4 anos", id2);
  const id3 = "expRadio-" + rowIndex + ".3";
  const expRadio3 = createInput(id3, "5+ anos", "techExp-" + rowIndex, "radio");
  const expLabel3 = createLabel("5+ anos", id3);

  //adicionar botão com função de remover tecnologia
  const remover = document.createElement("button");
  remover.innerText = "Remover tecnologia";
  remover.type = "button";
  remover.addEventListener("click", function () {
    stackInputs.removeChild(newRow);
  });

  //adicionar tecnologia e experiencia na linha, e linha na ul (lista)
  newRow.append(
    techNameLabel,
    techNameInput,
    expLabel,
    expRadio1,
    expLabel1,
    expRadio2,
    expLabel2,
    expRadio3,
    expLabel3,
    remover
  );
  stackInputs.appendChild(newRow);
});

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  //seleciona nome do dev + todas as linhas
  const fullnameInput = document.getElementById("fullname");
  const inputRows = document.querySelectorAll(".inputRow");
  let tecnologias = [];

  //iterar em cada linha de tecnologia e armazenar no array acima
  inputRows.forEach(function (row) {
    // # para selecionar id com input de name "techname"
    const tecName = document.querySelector(
      "#" + row.id + ' input[name="techName"]'
    ).value;
    const techExp = document.querySelector(
      "#" + row.id + ' input[type="radio"]:checked'
    ).value;
    tecnologias.push({ name: tecName, exp: techExp });
  });

  const newDev = { fullname: fullnameInput.value, tecnologies: tecnologias };
  devs.push(newDev);
  alert("Dev cadastrado com sucesso");

  //limpar formulário
  fullnameInput.value = "";
  inputRows.forEach(function (row) {
    row.remove();
  });

  console.log(devs);
});
