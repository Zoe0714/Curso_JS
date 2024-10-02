const readline = require('readline'); 

// Configuração para entrada de dados no terminal 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

// Função para verificar se um número é par 
function ehPar (numero) { 
    return numero % 2 === 0; 
} 

// Função para verificar se um número é ímpar 
function ehImpar (numero) { 
    return numero % 2 !== 0; 
} 

// Pergunta os dois números e faz as verificações 
rl.question("Digite o primeiro número: ", (input1) => { 
    const num1 = parseInt(input1);

    rl.question("Digite o segundo número: ", (input2) => {
         const num2 = parseInt(input2); 
         
         // Verificações booleanas 
         let primeiroMaior = num1 > num2; 
         let primeiroPar = ehPar (num1); 
         let segundoImpar = ehImpar (num2); 
         
         // Exibe os resultados das verificações 
         console.log("O primeiro número é maior que o segundo?", primeiroMaior); 
         console.log("O primeiro número é par?", primeiroPar); 
         console.log("O segundo número é impar?", segundoImpar); 
         
         // Operadores lógicos 
         console.log("O primeiro número é maior que o segundo e é par?", primeiroMaior && primeiroPar);
         console.log("O primeiro ou o segundo número é par?", primeiroPar || ehPar (num2)); 
         rl.close(); 
        }); 
    });