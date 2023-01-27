function triangulo(base, altura) {
  alert("A área do triângulo é de " + (base * altura) / 2);
}
function retangulo(base, altura) {
  alert("A área do retângulo é de " + base * altura);
}
function quadrado(lado) {
  alert("A área do quadrado é de " + lado ** lado);
}
function trapezio(baseMaior, baseMenor, altura) {
  alert("A àrea do trapézio é de " + (baseMaior + baseMenor) * altura) / 2;
}
function circulo(raio) {
  alert("A àrea do círculo é de " + 3.14 * raio ** raio);
}

let opções = "";

do {
  opções = prompt(
    "Digite a forma geométrica que deseja calcular a àrea digitando seu número:\n1) Triângulo\n2)Retângulo\n3) Quadrado\n4) Trapézio\n5) Círculo\n6) Sair"
  );
  switch (opções) {
    case "1":
      let baseTriangulo = prompt("Digite a base: ");
      let alturaTriangulo = prompt("E a altura: ");
      triangulo(baseTriangulo, alturaTriangulo);
      break;
    case "2":
      let baseRetangulo = prompt("Digite a base: ");
      let alturaRetangulo = prompt("E a altura: ");
      retangulo(baseRetangulo, alturaRetangulo);
      break;
    case "3":
      let lado = prompt("Digite o lado: ");
      quadrado(lado);
      break;
    case "4":
      let baseMaior = prompt("Digite a maior base: ");
      let baseMenor = prompt("a menor base: ");
      let altura = prompt("E a altura: ");
      trapezio(baseMaior, baseMenor, altura);
      break;
    case "5":
      let raio = prompt("Digite o raio: ");
      quadrado(raio);
      break;
    case "6":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida");
  }
} while (opções !== 6);

//ou todas as etapas como funções:
function triangulo(base, altura) {
  const base = parseFloat(prompt("Informe a base do triângulo:"));
  const altura = parseFloat(prompt("Informe a altura do triângulo:"));
  return (base * altura) / 2;
}
function retangulo(base, altura) {
  const base = parseFloat(prompt("Informe a base do retângulo:"));
  const altura = parseFloat(prompt("Informe a altura do retângulo:"));
  return base * altura;
}
function quadrado(lado) {
  const lado = parseFloat(prompt("Informe a área do quadrado:"));
  return lado * lado;
}
function trapezio(baseMaior, baseMenor, altura) {
  const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"));
  const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"));
  const altura = parseFloat(prompt("Informe a altura do trapézio:"));
  return ((baseMaior + baseMenor) * altura) / 2;
}
function circulo(raio) {
  const raio = parseFloat(prompt("Informe o raio do círculo:"));
  return 3.14 * raio * raio;
}

function exibirMenu() {
  return prompt(
    "Calculadora Geométrica\n" +
      "1. Calcular área de triângulo\n" +
      "2. Calcular área de retângulo\n" +
      "3. Calcular área de quadrado\n" +
      "4. Calcular área de trapézio\n" +
      "5. Calcular área de círculo\n" +
      "6. Sair\n"
  );
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = triangulo();
        break;
      case "2":
        resultado = retangulo();
        break;
      case "3":
        resultado = quadrado();
        break;
      case "4":
        resultado = trapezio();
        break;
      case "5":
        resultado = circulo();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida!");
        break;
    }

    if (resultado) {
      alert("A àrea é de: " + resultado);
    }
  } while (opcao !== "6");
}

executar();
