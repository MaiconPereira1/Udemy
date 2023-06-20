//use {} para criar objetos assim como o exemplo abaixo 

/*const pessoa1 = {
    nome: 'Maicon',
    sobrenome: 'Pereira',
    idade: 26
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);*/






/*function criaPessoa (nome, sobrenome, idade){
    return {nome, sobrenome, idade};
}
 const pessoa1 = criaPessoa('Luiz', 'Miranda', '25');
 const pessoa2 = criaPessoa('João', 'Moura', '22');
 const pessoa3 = criaPessoa('Jose', 'Henrique', '27');
 const pessoa4 = criaPessoa('Paulo', 'Oliveira', '29');

 console.log(pessoa1.nome, pessoa1.sobrenome);*/



 const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 26,
     
    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    }
 }
 pessoa1.fala();
