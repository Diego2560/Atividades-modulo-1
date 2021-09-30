const palavra = 'Alemanha';

for (let letra of palavra) {

    if (letra === 'h'){
        encontrado = true
        console.log ('tem a letra h');
        break; 
    }

}

if (!encontrado) {
console.log ('Não tem a letra h')

}


//for (let i = 1; i <=10; i ++) {
 //   console.log(i);
//}


//let x = 1;
//while (x <= 10) {
//console.log(x);
//x++;

//}