function obterFaixaEtaria(idade) {
    if (idade < 25) {
        return 'jovem';
    } else if (idade < 65){
        return 'adulto';
    }else {
        return 'idoso';
    }

}

function apresentar (pessoa) {

     const faixaEtaria = obterFaixaEtaria(pessoa.idade)

        console.log (`Olá! Meu nome é ${pessoa.nome},sou um ${faixaEtaria} de ${pessoa.idade}
        anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
        
}

let diego = {
    nome:'Diego',
    idade: 21,
    profissao:'designer',
    altura: 1.70,
};

apresentar(diego);
 
let lucila = {
    nome:'Lucila',
    idade: 30,
    profissao:'Medica',
    altura: 1.62,
};

apresentar(lucila);

let ana = {
    nome:'Ana',
    idade: 74,
    profissao:'Costureira',
    altura: 1.52,
};

apresentar(ana);
