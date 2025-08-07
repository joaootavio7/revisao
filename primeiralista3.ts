/*Fazer um programa para ler quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto
de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).*/

const teclado = require(`prompt-sync`)();

let a: number = parseInt(teclado(`Digite o valor de A:`));
let b: number = parseInt(teclado(`Digite o valor de B: `));
let c: number = parseInt(teclado(`Digite o valor de C:`));
let d: number = parseInt(teclado(`Digite o valor de D: `));

let diferenca: number = a * b - c * d

console.log(`A diferença dos números é: ${diferenca}`)