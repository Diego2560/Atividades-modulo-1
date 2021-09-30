const pessoa = {
nome: 'Diego',
idade: 29,
altura: 1.70,
temCNH: true,
apelidos: ['Dih', 'Diego']

};

let textoCNH = '';

if (pessoa.temCNH){
    textoCNH = 'possui';

} else {
   textoCNH = 'não possui';

}


console.log (` ${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${textoCNH} CNH
os seguentes apelidos:`);
for (let apelido of pessoa.apelidos){
    console.log(`-${apelido}`);
}












//const none = "JOsé";
//const idade = 30;
//const altura = 1.73;
//const tenCNH = true
//const apelidos = ["Jr", "Juninho"];