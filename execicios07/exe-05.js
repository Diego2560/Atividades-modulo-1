const nomes = ['João', 'Luiz', 'Pedro'];

let encontrado = false;
for (let i = 0; i < nomes. length; i++) {
const item = nomes [i];

    if (item === 'João') {
        console.log (`João está no indece ${i}`);
        encontrado = true
        break;
    }
}

if (!encontrado) {
console.log('não encontrado');
}