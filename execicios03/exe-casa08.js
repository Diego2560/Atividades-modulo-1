const valorDacompra = 12999;
const numeroDeParcelas = 1;

if (numeroDeParcelas === 1) {

let valorAPagarEmReais = (valorDacompra - valorDacompra * 0.4) / 100;
console.log (`Como o pagamento é a vista, você em um desconto de 10% e deve pagar
apena ${valorAPagarEmReais} reais.`);

} else { 
    let valorAPagarEmReais = valorDacompra / numeroDeParcelas / 100;
    console.log (` Como o pagamento é a prazo, você pagará em ${numeroDeParcelas} x de 
    ${valorAPagarEmReais} reais, totalizando ${valorDacompra/100} reais. `)

}