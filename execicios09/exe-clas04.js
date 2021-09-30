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

let totalAPagar = 0;

for(let item of comanda.produtos) {
totalAPagar = totalAPagar + (item.quantidade * item.precouUnit);
// outra forma de fazer a mesma coisa:
// totalAPagar += item.quantidade * item.precoUnit;
}

console.log (`${comanda.nome}, o valor total a pagar é de R$ 
${totalAPagar/100}`);