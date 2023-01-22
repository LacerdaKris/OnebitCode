const metragem = prompt("Insira valor em metros");
const metros = parseFloat(metragem);

const opções = prompt(
  "Escolha uma alternativa de conversão digitando seu número: \n1- milímetro (mm) \n2- centímetro (cm) \n3- decímetro (dm) \n4- decâmetro (dam) \n5- hectômetro (hm) \n6- quilômetro (km) "
);
const opção = parseFloat(opções);

let convertido = 0;

switch (opção) {
  case 1:
    convertido = metros / 1000;
    alert("O resultado é: " + convertido);
    break;
  case 2:
    convertido = metros / 100;
    alert("O resultado é: " + convertido);
    break;
  case 3:
    convertido = metros / 10;
    alert("O resultado é: " + convertido);
    break;
  case 4:
    convertido = metros / 0.1;
    alert("O resultado é: " + convertido);
    break;
  case 5:
    convertido = metros / 0.01;
    alert("O resultado é: " + convertido);
    break;
  case 6:
    convertido = metros / 0.001;
    alert("O resultado é: " + convertido);
    break;
  default:
    alert("Opção inválida");
}
