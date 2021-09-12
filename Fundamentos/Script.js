// === var - é carregada na inicialização do sistema. Pode ser declarada depois de ser "utilizada"

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area);


// === let - precisa ser declara antes de ser "utilizada"
// let forma = "";
// let altura = 5;
// let comprimento = 7;
// let area;

// if(forma == "retangulo"){
// area = altura * comprimento;
// }else{
//  area = (altura * comprimento) / 2;
// }
// console.log(area);

// == const - constante

const forma = "quadrado";
const altura = 5;
const comprimento = 7;
let area;
if (forma === "quadrado") {
    area = altura * comprimento;
} else if(forma == "triangulo") {
    area = (altura * comprimento) / 2;
}

console.log(area);

