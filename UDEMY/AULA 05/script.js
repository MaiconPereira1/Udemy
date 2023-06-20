/*Maicon Pereira de Oliveira tem 26 anos,
  pesa 78 KG tem 1.89 de altura e seu IMC é de 25.9
Maicon Pereira nasceu em 1997  */
const nome = "Maicon";
const sobrenome = "Pereira";
const idade = 26;
const peso = 78;
const alturaEmM = 1.89;
let imc;//Peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade}anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu ICM é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)