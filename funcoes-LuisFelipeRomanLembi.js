/*
1. Função com parâmetros e retorno: Criar uma função que calcule a média de três notas
passadas como parâmetros.
Instruções:
- Criar uma função que receba três parâmetros (nota1, nota2,nota3);
- A função deve calcular a média das três notas e retornar o valor;
- Chamar a função e exibir a média no console.
2. Função com parâmetros: Criar uma função que verifique se uma pessoa é maior de
idade ou menor de idade.
Instruções:
- Criar uma função chamada que receba um parâmetro (idade);
- Se a idade for 18 ou mais, a função deve retornar a mensagem "Você é maior de idade";
- Se a idade for menor que 18, a função deve retornar a mensagem "Você é menor de idade";
- Chamar a função passando uma idade e exibir o resultado no console.
3. Função com parâmetros e retorno: Criar uma função que receba dois números e um
operador e retorne o resultado da operação.
Instruções:
- Criar uma função chamada calculadora que receba três parâmetros: num1, num2 e operador.
- O operador pode ser um dos seguintes: + (soma), - (subtração), *(multiplicação), / (divisão);
- A função deve retornar o resultado da operação;
- Chamar a função com diferentes operadores e exibir os resultados no console.
*/

// 1. Função para calcular a média de três notas
function calcularMedia(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3;
    return media;
}

// 1.1. Chamar a função e exibir a média no console
const mediaNotas = calcularMedia(7, 8, 9);
console.log("A média das notas é: " + mediaNotas);

// 2. Função para verificar maioridade
function verificarIdade(idade) {
    if (idade >= 18) {
        return "Você é maior de idade";
    }
    return "Você é menor de idade";
}

// 2.1. Chamar a função e exibir o resultado no console
console.log(verificarIdade(17));

// 3. Função calculadora
function calculadora(num1, num2, operador) {
    switch (operador) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Divisão por zero não é permitida";
        default:
            return "Operador inválido";
    }
}

// 3.1. Chamar a função com diferentes operadores e exibir os resultados no console
console.log(calculadora(10, 5, "+"));
console.log(calculadora(10, 5, "-"));
console.log(calculadora(10, 5, "*"));
console.log(calculadora(10, 5, "/"));

