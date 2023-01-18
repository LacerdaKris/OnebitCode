nome = prompt("Insira o seu nome:");
sobrenome = prompt("Insira o seu sobrenome:");
estudo = prompt("Insira o seu campo de estudo:");
nascimento = prompt("Ano de nascimento:");

alert(
  "Cadastrado com sucesso!\n" +
    nome +
    " " +
    sobrenome +
    "\nEstudo:" +
    estudo +
    "\nIdade:" +
    (2023 - nascimento)
);

const numA = prompt("Insira um numero:");
const numB = prompt("Insira um numero:");
const num1 = parseFloat(numA);
const num2 = parseFloat(numB);
alert(
  "Soma:" +
    (num1 + num2) +
    "\nSubtração:" +
    (num1 - num2) +
    "\nMultiplicação:" +
    num1 * num2 +
    "\nDivisão:" +
    num1 / num2
);
