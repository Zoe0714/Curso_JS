// Exemplo de tipos de dados básicos em JavaScript

// 1. String - Armazenar o nome de uma pessoa
let nome = "Alice";
console.log("Nome:" + nome);

// 2. Number - Armazenar a idade de uma pessoa
let idade = 25;
console.log("Idade: " + idade);

// 3. Boolean - Verificar se a pessoa está inscrita em um curso
let inscrito = true;
console.log("Está inscrito?" + inscrito);

// 4. Object - Armazenar informações mais complexas sobre a pessoa
let pessoa = {
  nome: "Alice",
  idade: 25,
  inscrito: true,
  curso: "Introdução à Programação",
};
console.log("Informações sobre a pessoa:");
console.log(pessoa);

// 5. Operações simples usando os dados
if (pessoa.inscrito) {
  console.log(pessoa.nome + " está inscrita no curso de " + pessoa.curso + ".");
} else {
  console.log(pessoa.nome + " não está inscrita em nenhum curso.");
}
