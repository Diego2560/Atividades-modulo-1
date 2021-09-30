
let diego = {
    nome:'Diego',
    idade: 21,
    profissao:'designer',
    altura: 1.70,
    apresentar: function (){
        const faixaEtaria = this.obterFaixaEtaria(this.idade)

        console.log (`Olá! Meu nome é ${this.nome},sou um ${faixaEtaria} de ${this.idade}
        anos, ${this.altura}m de altura e sou ${this.profissao}`);
 
    },
    obterFaixaEtaria: function () {
        if (this.idade < 25) {
            return 'jovem';
        } else if (this.idade < 65){
            return 'adulto';
        }else {
            return 'idoso';
        }
    
    

    }
};

diego.apresentar();
console.log (diego.obterFaixaEtaria());