const palavra = 'Brasileiro';

let quantidade = 0;

for (let letra of palavra) {

    if(letra === 'i') {
        quantidade++;
    }
}
if (quantidade === 0){
    console.log ('Não há nenhuma letra "i" nessa palavra ');
}

else if (quantidade === 1) {
    console.log ('tem uma letra "i" nessa palavra');

} else {
    console.log (`tem ${quantidade} letras "i" nessa palavra `);
}

