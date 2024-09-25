const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Pedir ao usuário para inserir o nome
rl.question("Insira seu nome: ", (nome) => {
  // Exibir o nome em maiúsculas
  console.log("Seu nome em maiúsculas: " + nome.toUpperCase());

  // Contar o número de letras (sem espaços)
  let numLetras = nome.replace(/\s+/g, "").length;
  console.log("Número de letras no nome: " + numLetras);

  // Exibir a primeira letra do nome
  console.log("A primeira letra do seu nome é: " + nome.charAt(0));

  rl.close();
});
