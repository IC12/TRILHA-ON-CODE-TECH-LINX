function calculadora() {
    const operacao = Number(prompt(
        'Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'
    ));

    if (!operacao || operacao >= 7)
        alertaOperacaoInvalida();
    else {
        let resultado;
        let n1 = Number(prompt("Insira o primeiro valor:"));
        let n2 = Number(prompt("Insira o segundo valor:"));

        if (!n1 || !n2)
            alertaOperacaoInvalida()
        else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
            }
            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
            }
            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado à ${n2}ª é igual a ${resultado}`);
            }

            switch (operacao) {
                case 1:
                    soma();
                break;
                case 2:
                    subtracao();
                break;
                case 3:
                    multiplicacao();
                break;
                case 4:
                    divisaoReal();
                break;
                case 5:
                    divisaoInteira();
                break;
                case 6:
                    potenciacao();
                break;
            }
        }
    }
}

function alertaOperacaoInvalida() {
    alert("Erro - Operação inválida!");
    calculadora();
}

calculadora();