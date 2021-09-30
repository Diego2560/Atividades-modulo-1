const localizacao = 'rio de janeiro-rj';

const endIndex = localizacao.indexOf('-');
const cidade = localizacao.slice(0,endIndex);
console.log(cidade);