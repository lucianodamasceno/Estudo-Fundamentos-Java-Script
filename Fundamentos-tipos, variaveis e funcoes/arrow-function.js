// -- funções comuns

var nome = "Luciano";
function apresentar() {
    return `meu nome é ${nome}`;
}
console.log(apresentar());


//-- arrow functions
const apresentarArrow = nome => `meu nome é ${nome}`;
console.log(apresentarArrow("luciano"));
//--
const soma = (num1, num2) => num1 + num2;
console.log(soma(1, 1));
//--
const somaNumerosPequeno = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente numeros de 1 a 9!"
    } else {
        return num1 + num2; 
    }
}
console.log(somaNumerosPequeno(9, 8));

