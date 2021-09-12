// tipo de dado
// booleanos

// == conversão implícita 
const numero = 456;
const numeroString = "456"
// console.log(numero == numeroString); // faz a conversao para igualar tipos de string
// console.log(numero === numeroString);//não faz a conversao para igualar tipos de string
// console.log(numero + numeroString); // faz a concatenação

// == conversão explícita

// Number() -> string para numero
// String() -> numero para string

console.log(numero + Number(numeroString)); // faz a concatenação
