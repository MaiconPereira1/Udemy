//                01234567
let umaString = ('Um texto');

console.log(umaString[5]);
/*o numero entre colchetes seve para achar o elemento
 de determinado indíce assim como o apontado acima  ou use: 
 console.log(umaString.charAt(5));*/

//CONCATENAÇÃO
//três formas de usar a concatenação, sendo a ultima a mais atualizada.
console.log(umaString.concat('em um lindo dia.'));
console.log(umaString + 'em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);

//Saber em qual indice começa uma parte especifica do elemento, use index.of e o elemento
//assim como o exemplo a seguir:
console.log(umaString.indexOf('texto'));

//replace substitui palavra, segui o exemplo abaixo
console.log(umaString.replace('Um', 'outra'));
// assim o elemento de string um será substituido por outra 

//como saber quantos caracteres tem uma string
console.log(umaString.length);

//Deixar o elemento todo em maiusculo use toUpperCase como 
//o exemplo abaixo 
console.log(umaString.toUpperCase());

//Deixar o elemento todo em minusculo use toLowerCase como 
//o exemplo abaixo 
console.log(umaString.toLowerCase());