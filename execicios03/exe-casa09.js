const valorDacompra = 12999;
const numeroDeParcelas = 12;

if (numeroDeParcelas === 1) {

let valorAPagarEmReais = (valorDacompra - valorDacompra * 0.4) / 100;
console.log (`Como o pagamento é a vista, você em um desconto de 10% e deve pagar
apena ${valorAPagarEmReais} reais.`);

} else if (numeroDeParcelas >= 2 && numeroDeParcelas < 7)   { 
    let valorAPagarEmReais = (valorDacompra / numeroDeParcelas / 100).toFixed(2);

    console.log (` Como o pagamento é a prazo, você pagará em ${numeroDeParcelas} x de 
    ${valorAPagarEmReais} reais sem juros, totalizando ${valorDacompra/100} reais. `)

} else if (numeroDeParcelas <= 12 ) {

    const valorComJuros = valorDacompra * Math.pow((1+0.01), numeroDeParcelas);
    let valorAPagarEmReais = (valorComJuros / numeroDeParcelas / 100).toFixed(2);
    console.log (` Como o pagamento é a prazo, você pagará em ${numeroDeParcelas} x de 
    ${valorAPagarEmReais} reais com juros, totalizando ${(valorComJuros/100).toFixed(2)} reais. `)

} else {

    console.log (`Não é possível dividir nessa quantidade de parcelas`);
}