/*1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.*/

    let numero = parseInt(prompt("Digite um número inteiro:"));

    if (numero % 2 === 0) {
        console.log("O número é par.");
    } else {
        console.log("O número é ímpar.");
    }

/*2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.*/

    let idade = parseInt(prompt("Digite a idade da pessoa:"));

    if (idade >= 0 && idade <= 12) {
        console.log("A pessoa é uma criança.");
    }   else if (idade > 12 && idade <= 18) {
        console.log("A pessoa é um adolescente.");
    } else if (idade > 18 && idade <= 60) {
        console.log("A pessoa é um adulto.");
    } else if (idade > 60) {
        console.log("A pessoa é um idoso.");
    } else {
        console.log("Idade inválida.");
    }

/*3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado",
"Recuperação", ou "Reprovado" utilizando if-else if.*/

    let nota = parseFloat(prompt("Digite a nota (0 a 10):"));

    if (nota >= 6 && nota <= 10) {
        console.log("A pessoa está aprovada.");
    } else if (nota >= 4 && nota < 6) {
        console.log("A pessoa está em recuperação.");
    } else if (nota >= 0 && nota < 4) {
        console.log("A pessoa está reprovada.");
    } else {
        console.log("Nota inválida.");
    }

/*4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.*/

    console.log("Menu:");
    console.log("1. Opção 1");
    console.log("2. Opção 2");
    console.log("3. Opção 3");

    let escolha = parseInt(prompt("Digite o número da opção desejada:"));

    switch (escolha) {
        case 1:
            console.log("Você selecionou a Opção 1.");
            break;
        case 2:
            console.log("Você selecionou a Opção 2.");
            break;
        case 3:
            console.log("Você selecionou a Opção 3.");
            break;
        default:
            console.log("Opção inválida.");
    }

/*5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.*/

    let peso = parseFloat(prompt("Digite o peso em kg:"));
    let altura = parseFloat(prompt("Digite a altura em metros:"));

    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        console.log("A pessoa está com baixo peso.");
    } else if (imc >= 18.5 && imc < 25) {
        console.log("A pessoa está com peso normal.");
    } else if (imc >= 25 && imc < 30) {
        console.log("A pessoa está com sobrepeso.");
    } else {
        console.log("A pessoa está com obesidade.");
    }

/*6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
● Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C <
A + B
● Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
● Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
● Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)*/

    let ladoA = parseFloat(prompt("Digite o lado A do triângulo:"));
    let ladoB = parseFloat(prompt("Digite o lado B do triângulo:"));
    let ladoC = parseFloat(prompt("Digite o lado C do triângulo:"));

    if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
        if (ladoA === ladoB && ladoB === ladoC) {
            console.log("O triângulo é eqüilátero.");
        } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
            console.log("O triângulo é isósceles.");
        } else {
            console.log("O triângulo é escaleno.");
        }
    } else {
        console.log("Os lados fornecidos não formam um triângulo.");
    }

/*7. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a
média aritmética desses números.*/

    let soma = 0;
    let contador = 0;
    while (true) {
        let numeroDecimal = parseFloat(prompt("Digite um número decimal (ou 0 para finalizar):"));
        if (numeroDecimal === 0) {
            break;
        }
        soma += numeroDecimal;
        contador++;
    }
    if (contador > 0) {
        let media = soma / contador;
        console.log("A média aritmética dos números digitados é: " + media);
    } else {
        console.log("Nenhum número foi digitado.");
    }

/*8. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando
um loop for ou while.*/

    let numeroFatorial = parseInt(prompt("Digite um número para calcular o fatorial:"));
    let fatorial = 1;
    if (numeroFatorial < 0) {
        console.log("Fatorial não é definido para números negativos.");
    } else {
        for (let i = 1; i <= numeroFatorial; i++) {
            fatorial *= i;
        }
        console.log("O fatorial de " + numeroFatorial + " é: " + fatorial);
    }

/*9. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.*/

    let a = 0, b = 1;
    console.log("Sequência de Fibonacci:");
    for (let i = 0; i < 10; i++) {
        console.log(a);
        let temp = a;
        a = b;
        b = temp + b;
    }

/*10. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.*/

    let nomes = [];
    for (let i = 0; i < 7; i++) {
        let nome = prompt("Digite o nome da pessoa " + (i + 1) + ":");
        nomes.push(nome);
    }
    console.log("Nomes informados na ordem inversa:");
    for (let i = nomes.length - 1; i >= 0; i--) {
        console.log(nomes[i]);
    }

/*11. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.*/

    let nomesPessoas = [];
    let idadesPessoas = [];
    for (let i = 0; i < 9; i++) {
        let nome = prompt("Digite o nome da pessoa " + (i + 1) + ":");
        let idade = parseInt(prompt("Digite a idade de " + nome + ":"));
        nomesPessoas.push(nome);
        idadesPessoas.push(idade);
    }
    console.log("Pessoas menores de idade:");
    for (let i = 0; i < 9; i++) {
        if (idadesPessoas[i] < 18) {
            console.log("Nome: " + nomesPessoas[i] + ", Idade: " + idadesPessoas[i]);
        }
    }

/*12. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa
e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso

ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.*/

    function calcularPesoIdeal(altura, sexo) {
        if (sexo.toLowerCase() === "masculino") {
            return 72.7 * altura - 58;
        } else if (sexo.toLowerCase() === "feminino") {
            return 62.1 * altura - 44.7;
        } else {
            return "Sexo inválido. Use 'masculino' ou 'feminino'.";
        }
    }
    let alturaPessoa = parseFloat(prompt("Digite a altura da pessoa em metros:"));
    let sexoPessoa = prompt("Digite o sexo da pessoa (masculino/feminino):");
    let pesoIdeal = calcularPesoIdeal(alturaPessoa, sexoPessoa);
    console.log("O peso ideal é: " + pesoIdeal);

/*13. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no
seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
○ Matrícula:
○ Nome:
○ Salário bruto:
○ Dedução INSS:
○ Salário líquido:
○ (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a
redução do INSS).*/

    let funcionarios = [];
    for (let i = 0; i < 80; i++) {
        let matricula = prompt("Digite a matrícula do funcionário " + (i + 1) + ":");
        let nome = prompt("Digite o nome do funcionário " + (i + 1) + ":");
        let salarioBruto = parseFloat(prompt("Digite o salário bruto do funcionário " + (i + 1) + ":"));
        funcionarios.push({ matricula, nome, salarioBruto });
    }
    console.log("Contracheques dos funcionários:");
    funcionarios.forEach(funcionario => {
        let deducaoINSS = funcionario.salarioBruto * 0.12;
        let salarioLiquido = funcionario.salarioBruto - deducaoINSS;
        console.log("Matrícula: " + funcionario.matricula);
        console.log("Nome: " + funcionario.nome);
        console.log("Salário bruto: R$ " + funcionario.salarioBruto.toFixed(2));
        console.log("Dedução INSS: R$ " + deducaoINSS.toFixed(2));
        console.log("Salário líquido: R$ " + salarioLiquido.toFixed(2));
        console.log("-----------------------------");
    });
    

/*14. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados
sobre salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até
R$350,00.*/

    function analisarPesquisa() {
        let totalSalario = 0;
        let totalFilhos = 0;
        let maiorSalario = 0;
        let contadorPessoas = 0;
        let contadorSalarioAte350 = 0;
        while (true) {
            let salario = parseFloat(prompt("Digite o salário da pessoa (ou 0 para finalizar):"));
            if (salario === 0) {
                break;
            }
            let filhos = parseInt(prompt("Digite o número de filhos da pessoa:"));
            totalSalario += salario;
            totalFilhos += filhos;
            if (salario > maiorSalario) {
                maiorSalario = salario;
            }
            if (salario <= 350) {
                contadorSalarioAte350++;
            }
            contadorPessoas++;
        }
        let mediaSalario = totalSalario / contadorPessoas;
        let mediaFilhos = totalFilhos / contadorPessoas;
        let percentualSalarioAte350 = (contadorSalarioAte350 / contadorPessoas) * 100;

        console.log("Média de salário: R$ " + mediaSalario.toFixed(2));
        console.log("Média do número de filhos: " + mediaFilhos.toFixed(2));
        console.log("Maior salário: R$ " + maiorSalario.toFixed(2));
        console.log("Percentual de pessoas com salário até R$350,00: " + percentualSalarioAte350.toFixed(2) + "%");
    }

/*15. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal
principal são iguais a 1 e os demais são nulos.*/

    let matrizIdentidade = [];
    for (let i = 0; i < 7; i++) {
        matrizIdentidade[i] = [];
        for (let j = 0; j < 7; j++) {
            if (i === j) {
                matrizIdentidade[i][j] = 1;
            } else {
                matrizIdentidade[i][j] = 0;
            }
        }
    }
    console.log("Matriz Identidade:");
    for (let i = 0; i < 7; i++) {
        console.log(matrizIdentidade[i].join(" "));
    }


/*16. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.*/

    let M = [];
    for (let i = 1; i <= 6; i++) {
        M[i] = [];
        for (let j = 1; j <= 8; j++) {
            M[i][j] = parseFloat(prompt(`Digite o elemento M[${i}][${j}]:`));
        }
    }
    let C = [];
    for (let i = 1; i <= 6; i++) {
        C[i] = 0;
        for (let j = 1; j <= 8; j++) {
            if (M[i][j] < 0) {
                C[i]++;
            }
        }
    }
    console.log("Vetor C:");
    for (let i = 1; i <= 6; i++) {
        console.log(`Linha ${i}: ${C[i]} elementos negativos`);
    }

/*17. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade.*/

    let pessoa = {
        nome: "Luis",
        idade: 26
    };
    console.log("Idade da pessoa: " + pessoa.idade);
    pessoa.email = "luis@email.com";
    console.log("Email da pessoa: " + pessoa.email);

/*18. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.*/

    let dados = {
        nome: "Luis",
        idade: 26,
        emails: ["luis@email.com", "luis@outlook.com"],
        telefones: ["11999999999", "11888888888"]
    };

    function obterArrays(obj) {
        let arrays = {};
        for (let key in obj) {
            if (Array.isArray(obj[key])) {
                arrays[key] = obj[key];
            }
        }
        return arrays;
    }

    console.log("Arrays no objeto dados:");
    console.log(obterArrays(dados));

/*19. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm
precedência sobre as do obj1 em caso de conflitos.*/

    let obj1 = {
        nome: "Luis",
        idade: 26,
        cidade: "Porto Alegre"
    };
    let obj2 = {
        nome: "Maria",
        idade: 25,
        email: "maria@email.com"
    };

    function combinarObjetos(o1, o2) {
        return { ...o1, ...o2 };
    }

    let objetoCombinado = combinarObjetos(obj1, obj2);
    console.log("Objeto combinado:");
    console.log(objetoCombinado);

/*20. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o
número de vezes que a string aparece no array.*/

    let arrayDeStrings = ["bmw", "volvo", "bmw", "renault", "volvo", "bmw"];
    let contagem = {};
    arrayDeStrings.forEach(str => {
        if (contagem[str]) {
            contagem[str]++;
        } else {
            contagem[str] = 1;
        }
    });
    console.log("Contagem de strings:");
    console.log(contagem);

/*21. Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.*/

    let vendas = [
        { vendedor: "Alisson", valor: 100 },
        { vendedor: "Junior", valor: 150 },
        { vendedor: "Alisson", valor: 200 },
        { vendedor: "Junior", valor: 50 }
    ];
    function totalVendasPorVendedor(vendas) {
        let totalPorVendedor = {};
        vendas.forEach(venda => {
            if (totalPorVendedor[venda.vendedor]) {
                totalPorVendedor[venda.vendedor] += venda.valor;
            } else {
                totalPorVendedor[venda.vendedor] = venda.valor;
            }
        });
        return totalPorVendedor;
    }
    console.log("Total de vendas por vendedor:");
    console.log(totalVendasPorVendedor(vendas));
    