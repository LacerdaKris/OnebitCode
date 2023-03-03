const inputnome1 = document.getElementById("nome1").value;
const inputnome2 = document.getElementById("nome2").value;
let simbolo1 = document.querySelector("input[name='simbolo1']");
let simbolo2 = document.querySelector("input[name='simbolo2']");
const jogo = document.getElementById("jogo");
const quadrantes = document.querySelectorAll("button[class='botões']");
const radios = document.querySelectorAll("input[type='radio']");
//começar com opções radio marcadas, clicando pode trocar
document.getElementById("simboloX1").checked = true;
document.getElementById("simboloO2").checked = true;

//seleciona todos os inputs do tipo radio e adiciona ouvinte
radios.forEach(function (radio) {
  radio.addEventListener("click", function () {
    //pra cada opção radio clicada, seleciona o oposto no outro jogador
    if (radio.id === "simboloX1") {
      simbolo2.value = "O";
      document.getElementById("simboloO2").checked = true;
    } else if (radio.id === "simboloO1") {
      simbolo1.value = "O";
      simbolo2.value = "X";
      document.getElementById("simboloX2").checked = true;
    } else if (radio.id === "simboloX2") {
      simbolo1.value = "O";
      document.getElementById("simboloO1").checked = true;
    } else if (radio.id === "simboloO2") {
      simbolo1.value = "X";
      simbolo2.value = "O";
      document.getElementById("simboloX1").checked = true;
    }
  });
});

const iniciar = document.getElementById("iniciar");
//seleciona o botão iniciar e adiciona revezamento de qual jogador é a vez
iniciar.addEventListener("click", function () {
  //se ambos inputs estiverem preenchidos, seguir execução, se não, alertar
  if (inputnome1 !== "" && inputnome2 !== "") {
    jogo.removeChild(iniciar);
    jogador1.style.setProperty("border-color", "#ca7397");
    let jogada = jogador1;
    //seleciona ouvinte aos botões quadrantes do jogo da velha
    quadrantes.forEach(function (quadrante) {
      quadrante.addEventListener("click", function () {
        if (jogada === jogador1) {
          quadrante.innerText = simbolo1.value;
          jogador1.style.setProperty("border-color", "white");
          jogador2.style.setProperty("border-color", "#ca7397");
          jogada = jogador2;
        } else {
          quadrante.innerText = simbolo2.value;
          jogador1.style.setProperty("border-color", "#ca7397");
          jogador2.style.setProperty("border-color", "white");
          jogada = jogador1;
        }

        const vencedor = verificaGanhador();
        if (vencedor !== null) {
          alert("O jogador ${vencedor} venceu!");
          limparJogo();
        }
        //verifica se todos os quadrantes foram preenchidos
        if (botõespreenchidos()) {
          const confirma = alert("Fim da partida!\nDeseja jogar novamente?");
          if (confirma) {
            limparJogo();
          }
        }
      });
    });
  } else {
    alert("Nomes devem estar preenchidos para jogar");
  }
});

//verifica se todos os botões do jogo têm innerText preenchido
function botõespreenchidos() {
  for (let i = 0; i < quadrantes.length; i++) {
    if (quadrantes[i].innerText === "") {
      return false;
    }
  }
  return true;
}

//pega todas as combinações em linha e verifica se o texto é igual
function verificaGanhador() {
  const linhas = [
    //linhas horizontais
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //linhas verticais
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //linhas diagonais
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < linhas.length; i++) {
    const [a, b, c] = linhas[i];
    if (
      quadrantes[a].innerText !== "" &&
      quadrantes[a].innerText === quadrantes[b].innerText &&
      quadrantes[b].innerText === quadrantes[c].innerText
    ) {
      //há um ganhador
      return quadrantes[a].innerText;
    }
  }
  //não há ganhador
  return null;
}

//deixar pronto para nova partida
function limparJogo() {
  const botãoIniciar = document.createElement("button");
  botãoIniciar.innerText = "INICIAR PARTIDA";
  botãoIniciar.id = "iniciar";
  jogo.appendChild(botãoIniciar);
  quadrantes.forEach(function (quadrante) {
    quadrante.innerText = "";
  });
}
