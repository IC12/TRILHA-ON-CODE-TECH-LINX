let objConquer = {
    plataforma: "Conquer",
    fundacao: "2016",
    cursos: {dados: ["excel", "SQL"],
            lideranca: ["apresentação de alto impacto", "inteligência emocional"],
            marketing: ["branding", "linkedin"]},
    inovacao_constante: true
}

let objUser = {
    nome: "iara",
    idade: 23,
    cidade: "BH"
}

objConquer['objUser'] = objUser;

objConquer['objUser']['nome'] = "iara camargos"

objConquer['fundacao'] = Number(objConquer['fundacao']);

//Da para usar o console.table(objConquer) para visualização em tabela
console.log(objConquer);
