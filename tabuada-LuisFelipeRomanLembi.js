/*Nesta atividade, você deverá criar um programa em JavaScript que mostre a tabuada de um número utilizando um laço de repetição (for ou while).

O programa deve:

criar uma variável com um número

mostrar a tabuada desse número de 1 até 10

exibir os resultados no console*/

// Criando uma variável com um número
let num = 10;
// Mostrando a tabuada do número de 1 até 10
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}