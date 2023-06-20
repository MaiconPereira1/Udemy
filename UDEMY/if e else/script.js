/**
 * entre 0 e 11 bom dia 
 * entre 12 e 17 boa tarde 
 * entre 18 e 23 boa noite 
 */
//if pode ser usado sozinho
// sempre que utilizo o else. preciso de um if antes.
//posso ter quantos else e ifs eu quiser na checagem 
// só posso ter um else na checagem  
//podemos usar condições sem else if, utilizando apenas if e else
 
/*const hora = 18;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >=18 && hora <= 23){
    console.log('Boa noite');
} else {
    console.log('Ola');
}*/

/*const tenhoGrana = true;

if (tenhoGrana){
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair');
}*/

let num = 20

// If -> Se (num >= 0 && num <= 5) ocorrer faça isso {código}
// Else -> Se não faça isso {o código}
if(num >= 0 && num <= 5){
    console.log('O numero esta entre 0 e 5');
} else if(num >= 6 && num <= 8){
    console.log('O numero esta entre 6 e 8');
} else if (num >= 9 && num <= 11){
    console.log('O numero esta entre 9 e 11');
} else{
    console.log('O numero nao esta entre 0 e 11.');
}
