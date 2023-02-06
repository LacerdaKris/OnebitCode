function escalarJogador() {
  const jogadores = document.getElementById("time");

  const ul = document.createElement("ul");
  ul.id = "formulario";
  ul.appendChild(document.createElement("br"));

  const camisaLi = document.createElement("li");
  camisaLi.innerText = "Camisa: ";
  const camisaInput = document.createElement("input");
  camisaInput.type = "number";
  camisaInput.id = "camisaNumero";
  camisaLi.appendChild(camisaInput);
  ul.appendChild(camisaLi);
  ul.appendChild(document.createElement("br"));

  const nomeLi = document.createElement("li");
  nomeLi.innerText = "Nome: ";
  const nomeInput = document.createElement("input");
  nomeInput.type = "text";
  nomeInput.id = "nomeJogador";
  nomeLi.appendChild(nomeInput);
  ul.appendChild(nomeLi);
  ul.appendChild(document.createElement("br"));

  const posicaoLi = document.createElement("li");
  posicaoLi.innerText = "Posição: ";
  const posicaoInput = document.createElement("input");
  posicaoInput.type = "text";
  posicaoInput.id = "posicaoJogador";
  posicaoLi.appendChild(posicaoInput);
  ul.appendChild(posicaoLi);
  ul.appendChild(document.createElement("br"));

  const botao = document.createElement("button");
  botao.innerHTML = '<button onclick="confirmaCadastro()">Cadastrar</button>';
  ul.append(botao);

  jogadores.append(ul);
}

function confirmaCadastro() {
  const confirma = confirm("Você confirma este jogador?");
  if (confirma) {
    const jogadores = document.getElementById("time");
    const formulario = document.getElementById("formulario");

    const camisaInput = document.getElementById("camisaNumero");
    const nomeInput = document.getElementById("nomeJogador");
    const posicaoInput = document.getElementById("posicaoJogador");

    const ul = document.createElement("ul");

    const camisaLi = document.createElement("li");
    camisaLi.innerText = "Camisa: " + camisaInput.value;
    ul.appendChild(camisaLi);

    const nomeLi = document.createElement("li");
    nomeLi.innerText = "Nome: " + nomeInput.value;
    ul.appendChild(nomeLi);

    const posicaoLi = document.createElement("li");
    posicaoLi.innerText = "Posição: " + posicaoInput.value;
    ul.appendChild(posicaoLi);
    ul.appendChild(document.createElement("br"));

    jogadores.append(ul);
    jogadores.removeChild(formulario);
  }
}

function removerJogador() {
  const remover = document.getElementById("time");
  const ul = document.getElementsByTagName("ul");

  const digite = document.createElement("p");
  digite.id = "digite";
  digite.innerText = "Digite a camisa do jogador a remover";
  const digitaCamisa = document.createElement("input");
  digitaCamisa.type = "number";
  digitaCamisa.id = "camisaDigitada";
  digite.appendChild(digitaCamisa);

  const botao = document.createElement("button");
  botao.innerHTML = '<button onclick="confirmaExclusao()">Enviar</button>';
  digite.appendChild(botao);

  remover.append(digite);
}

function confirmaExclusao() {
  const remover = document.getElementById("time");
  const ul = document.getElementsByTagName("ul");
  const camisa = document.getElementById("camisaDigitada").value;
  const digite = document.getElementById("digite");

  const confirma = confirm("Confirma a remoção do jogador " + camisa + "?");
  if (confirma) {
    remover.removeChild(ul[camisa - 1]);
    remover.removeChild(digite);
  }
}
