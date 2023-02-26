//referências a variáveis com nome pra cores usadas em todo o style
const root = document.querySelector(":root");
//demais variáveis globais
const main = document.querySelector("main");
const input = document.getElementById("input");
const resultado = document.getElementById("resultado");
const permitidas = [
  "(",
  ")",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "%",
];

//alternar tema entre escuro/claro
document.getElementById("temaBotão").addEventListener("click", function () {
  if (main.dataset.tema === "escuro") {
    root.style.setProperty("--bg-color", "#ffffffc7");
    root.style.setProperty("--font-color", "#000000e8");
    root.style.setProperty("--primary-color", "mediumvioletred");
    main.dataset.tema = "claro";
  } else {
    root.style.setProperty("--bg-color", "#000000e8");
    root.style.setProperty("--font-color", "#ffffffc7");
    root.style.setProperty("--primary-color", "#f35cda");
    main.dataset.tema = "escuro";
  }
});

//adicionar valor dos botoes ao input
document.querySelectorAll(".botões").forEach(function (cadaBotao) {
  cadaBotao.addEventListener("click", function () {
    const valor = cadaBotao.dataset.valor;
    input.value += valor;
    input.focus();
  });
});

//apagar ao apertar botão "C"
document.getElementById("C").addEventListener("click", function () {
  input.value = "";
  input.focus();
  resultado.value = "";
  resultado.classList.remove("erro");
  //voltar ao normal o botão "copiar", caso esteja como "copiado"
  const copiar = document.getElementById("copiar")
  copiar.innerText = "Copiar";
  copiar.classList.remove("sucesso");
});

//ativar botão "="
document.getElementById("igual").addEventListener("click", calcular);

//função com evento para o botão copiar
document.getElementById("copiar").addEventListener("click", function (ev) {
  const botao = ev.currentTarget;
  //trocar texto e cor da borda/letras conforme classe sucesso do css
  if (botao.innerText === "Copiar") {
    botao.innerText = "Copiado!";
    botao.classList.add("sucesso");
    //copiar o texto pra area de transferência
    navigator.clipboard.writeText(resultado.value);
  } else {
    botao.innerText = "Copiar";
    botao.classList.remove("sucesso");
  }
});

//limitar valores que podem ser digitados e ativar funções pelo teclado
input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (permitidas.includes(ev.key)) {
    const tecla = ev.key;
    //incluir espaçamento caso forem os sinais, como ao clicar as teclas
    if (
      tecla === "(" ||
      tecla === ")" ||
      tecla === "+" ||
      tecla === "-" ||
      tecla === "*" ||
      tecla === "/"
    ) {
      input.value += " " + tecla + " ";
    } else {
      input.value += tecla;
    }
  }
  if (ev.key === "Backspace") {
    //do caracter inicial ao penultimo, e excluir o ultimo
    input.value = input.value.slice(0, -1);
    return;
  }
  if (ev.key === "Enter" || ev.key === "=") {
    calcular();
  }
});

//função para dar o resultado da calculadora
function calcular() {
  let valorInput = input.value;
  //verificar quando há "%" no input
  if (valorInput.indexOf("%") !== -1) {
    //verificar se está num cálculo com + ou - antes do percentual
    //se nao tiver, apenar trocar % por /100
    const converterPercComSoma = valorInput.match(
      /(\d+(\.\d+)?)\s*\+\s*(\d+(\.\d+)?)\s*%/
    );
    const converterPercComSubtração = valorInput.match(
      /(\d+(\.\d+)?)\s*\-\s*(\d+(\.\d+)?)\s*%/
    );
    if (converterPercComSoma) {
      const valorAntesSinal = parseFloat(converterPercComSoma[1]);
      const valorAntesPercentual = parseFloat(converterPercComSoma[3]) / 100;
      const percentualSomado =
        valorAntesSinal + valorAntesSinal * valorAntesPercentual;
      valorInput = valorInput.replace(
        converterPercComSoma[0],
        percentualSomado
      );
    } else if (converterPercComSubtração) {
      const valorAntesSinal = parseFloat(converterPercComSubtração[1]);
      const valorAntesPercentual =
        parseFloat(converterPercComSubtração[3]) / 100;
      const percentualSubtraido =
        valorAntesSinal - valorAntesSinal * valorAntesPercentual;
      valorInput = valorInput.replace(
        converterPercComSubtração[0],
        percentualSubtraido);
    } else {
      valorInput = valorInput.replace("%", "/100")
    }
  }
  //começa como valor e estilo da classe "erro" no CSS
  resultado.value = "ERRO";
  resultado.classList.add("erro");
  //calcular o input exatamente pelo que está digitado com o método "eval"
  const valorResultado = eval(valorInput);
  //se dá certo, mostra o resultado e remove o "erro"
  resultado.value = valorResultado;
  resultado.classList.remove("erro");
}
