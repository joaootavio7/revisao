/*Faça um programa para ler o valor do raio de um círculo, e depois mostrar o valor da área deste círculo com quatro
casas decimais conforme exemplos.
Fórmula da área: area = π . raio2
Considere o valor de π = 3.14159*/

console.log("Calculando Área do Círculo")

const teclado = require (`prompt-sync`)();

let raio: number;
let area: number;
const pi: number = 3.14159


raio = parseInt(teclado(`Digite o valor do raio: `));
area = (raio * raio) *  pi

console.log(`O valor da Area é ${area.toFixed(4)}`);