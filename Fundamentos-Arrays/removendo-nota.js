const notas = [10.7, 8, 5, 10];
notas.pop();
console.log(notas);
let media = 0;
notas.push(5);
var i = 0;
while (i < notas.length) {
    media += notas[i];
    i++;
}
media = media / notas.length

console.log(`a média é ${media}`);