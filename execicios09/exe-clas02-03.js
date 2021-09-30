const comanda = {
    nome: 'Diego',
    idade: 29,
    produtos: [
{

    nome:'Batata Frita',
    preçoUnitario: 1500,
    quantidade: 2
},
{

    nome:'Queijo Coalho',
    preçoUnitario: 1800,
    quantidade: 1
},
{

    nome:'cerveja',
    preçoUnitario: 800,
    quantidade: 2
},

    ]
};

console.log(comanda.nome);
console.log (comanda.idade)
comanda.idade = 20;
console.log(comanda.idade)
console.log(comanda.produtos[0].nome);
console.log(comanda.produtos[comanda.produtos.length - 1].preçoUnitario)
