//For of trabalha com valores
function attNumbersForOf() {
    const numbers = [2, 4, 8, 10, 32, 64, 128, 250];
    
    let sum = 0;
    
    for (let num of numbers) {
        sum += num;
    }
    
    console.log('Soma: ' + sum);
    console.log('Média: ' + sum / numbers.length);
}

//For in trabalha com índices
function attNotasBimestre() {
    const notas = {
        bimestre1: 7.8,
        bimestre2: 3.7,
        bimestre3: 6.4,
        bimestre4: 8.8
    };

    let soma = 0;
    let contagem = 0;

    for (let bimestre in notas) {
        contagem += 1;
        soma += notas[bimestre];
    }

    console.log('Soma total das notas: ' + soma);

    let media = soma / contagem;

    if (media >= 7)
        console.log('O aluno foi aprovado! ' + media);
    else
        console.log('O aluno foi reprovado ' + media);
}

function attYearsDoWhile() {
    let birthYear = 2000;
    let currentYear = 2024;
    
    do {
        console.log(birthYear);
    
        birthYear++;
    } while (birthYear <= currentYear);
}

function attBreakContinue() {
    const customers = [
        { name: "Ana", age: "37", credit: 4500.0 },
        { name: "Robert", age: "67", credit: 10000.0 },
        { name: "John", age: "15", credit: 1500.0 },
        { name: "Maria", age: "20", credit: 2000.0 },
    ];
    
    for (person of customers) {
        //if (person.credit < 2000) continue;
        if (person.credit < 2000) break;
    
        console.log("=======================");
        console.log("Name: ", person.name);
        console.log("Age: ", person.age);
        console.log("Credit: ", person.credit);
    }
}

function attArrays() {
    const array = ['Lógica de Programação', 'HTML', 'CSS', 'JavaScript', 'Git', 'Algoritmos', 'Dados'];

    //adiciona ao final do array
    array.push('Cloud');
    console.log(array);

    //adiciona no início do array
    array.unshift('Sistemas');
    console.log(array);

    //remove o último item do array
    array.pop();
    console.log(array);

    //remove o primeiro item do array
    array.shift();
    console.log(array);

    //tamanho do array
    console.log(array.length);

    //item do array através do índice
    console.log(array[6]);

    //Alterar algum item do array
    array[0] = 'Software';
    console.log(array);

    //Ordenando array
    array.sort();
    console.log(array);
}

// Conversão Celsius para Fahrenheit
function attCelsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

// Imprimindo maior número de um array de números
function attSpreadOperator(){
    const arr = [1, 3, 54, 23, 89, 8, 7, 0, 2, 44, 12, 11];
    console.log(Math.max(...arr));
}

//Função Anônima
function attAnonima() {
    const iara = function (peso, altura) {
      return peso / (altura * altura);
    }
    
    console.log(iara(59, 1.61));
}

attNumbersForOf();
attNotasBimestre();
attYearsDoWhile();
attBreakContinue();
attArrays();
attCelsiusToFahrenheit(37);
attSpreadOperator();
attAnonima();