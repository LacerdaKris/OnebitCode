const button = document.getElementById("add-button");

//ouvindo pra chamar a função de cadastrar tecnologia quando o botão for clicado
button.addEventListener("click", cadastrarTecnologia);

//criar formulário com informações da tecnologia
function cadastrarTecnologia(ev) {
  const section = ev.currentTarget.parentNode;

  const formulario = document.createElement("form");
  formulario.appendChild(document.createElement("br"));

  const nomeTecnologia = document.createElement("label");
  nomeTecnologia.innerText = "Nome da tecnologia: ";
  const nomeInput = document.createElement("input");
  nomeInput.type = "text";
  nomeInput.name = "tecnologia";
  nomeTecnologia.appendChild(nomeInput);
  formulario.appendChild(nomeTecnologia);
  formulario.appendChild(document.createElement("br"));

  //3 opções radio para tempo de experiência com a tecnologia acima
  const experiencia = document.createElement("label");
  experiencia.innerText = "Tempo de experiência: ";
  formulario.appendChild(experiencia);

  const experiencia1 = document.createElement("input");
  experiencia1.type = "radio";
  experiencia1.name = "tempo";
  experiencia1.id = "tempo1";
  experiencia1.value = "0-2 anos";
  const tempo1 = document.createElement("label");
  tempo1.innerText = "0-2 anos";
  tempo1.for = "tempo1";
  formulario.appendChild(experiencia1);
  formulario.appendChild(tempo1);

  const experiencia2 = document.createElement("input");
  experiencia2.type = "radio";
  experiencia2.name = "tempo";
  experiencia2.id = "tempo2";
  experiencia2.value = "3-4 anos";
  const tempo2 = document.createElement("label");
  tempo2.innerText = "3-4 anos";
  tempo2.for = "tempo2";
  formulario.appendChild(experiencia2);
  formulario.appendChild(tempo2);

  const experiencia3 = document.createElement("input");
  experiencia3.type = "radio";
  experiencia3.name = "tempo";
  experiencia3.id = "tempo1";
  experiencia3.value = "5+ anos";
  const tempo3 = document.createElement("label");
  tempo3.innerText = "5+ anos";
  tempo3.for = "tempo1";
  formulario.appendChild(experiencia3);
  formulario.appendChild(tempo3);
  formulario.appendChild(document.createElement("br"));

  //adicionar botões com funções anônimas ao serem clicados
  formulario.appendChild(document.createElement("br"));
  const remover = document.createElement("button");
  remover.innerText = "Remover tecnologia";
  remover.name = "remover-button";
  remover.id = "remover-button";
  formulario.appendChild(remover);

  const cadastrar = document.createElement("button");
  cadastrar.innerText = "Cadastrar tecnologia";
  cadastrar.name = "cadastrar-button";
  cadastrar.id = "cadastrar-button";
  formulario.appendChild(cadastrar);

  section.append(formulario);

  remover.addEventListener("click", function (ev) {
    const removerTecnologia = ev.currentTarget.parentNode;
    section.removeChild(removerTecnologia);
  });
}
