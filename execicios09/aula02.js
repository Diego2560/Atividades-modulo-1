function apresentar (pessoa) {

    if (pessoa.idade < 25) {
        console.log (`Olá! Meu nome é ${pessoa.nome},sou um jovem de ${pessoa.idade}
    anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`)
    
    } else if (pessoa.idade < 60) {
        console.log (`Olá! Meu nome é ${pessoa.nome},sou um adulto de ${pessoa.idade}
        anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`)
        
    
    } else {
        console.log (`Olá! Meu nome é ${pessoa.nome},sou um idoso de ${pessoa.idade}
        anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`)
        
    }

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
