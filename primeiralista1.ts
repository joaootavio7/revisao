/*Faça um programa para ler dois valores inteiros, e depois mostrar na tela a soma desses números com uma
mensagem explicativa, conforme exemplos.*/


const teclado = require(`prompt-sync`)();

let n1: number = parseInt(teclado(`Digite o valor do primeiro número:`));
let n2: number = parseInt(teclado(`Digite o valor do segundo número: `));

let soma: number = n1 + n2

console.log(`A soma deu ${soma}`)