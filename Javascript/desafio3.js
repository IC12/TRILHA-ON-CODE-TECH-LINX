const arrayNums = [12, 24, 32, 15, 29, 64, 77, 89, 90];

const qtdNums = arrayNums.length;

let soma = 0;

for(let i = 0; i < qtdNums; i++) {
    soma += arrayNums[i];
}

let media = soma / qtdNums;

console.log('Soma dos números do array: ' + soma);

console.log('Média dos números do array feito com o laço for: ' + media);

let index = 0;

while(index < qtdNums) {
    soma += arrayNums[index];
    index++;
}

console.log('Média dos números do array feito com o laço while: ' + media);