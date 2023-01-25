// Fila de pacientes aguardando em consultório médico

let opções = "";
let pacientes = [];

do {
  let lista = [];

  for (let i = 0; i < pacientes.length; i++) {
    let j = i + 1;
    lista.push(j + "º " + pacientes[i]);
  }

  opções = prompt(
    lista.join([(separador = "\n")]) +
      "\n Escolha uma opção digitando seu número:\n 1) Novo paciente\n 2) Consultar paciente\n 3) Sair"
  );

  switch (opções) {
    case "1":
      let novo = prompt("Nome do paciente a ser adicionado na fila:");
      pacientes.push(novo);
      break;
    case "2":
      const pacienteConsultado = fila.shift()
      if (!pacienteConsultado) {
        alert("Não há pacientes na fila!")
      } else {
        alert(pacienteConsultado + " foi removido da fila.")
      }
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida");
  }
} while (opções !== "3");
