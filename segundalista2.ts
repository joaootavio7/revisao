/*Fazer um programa para ler um número inteiro e dizer se este número é par ou ímpar.*/

const teclado = require(`prompt-sync`)();

let n: number = parseInt(teclado(`Digite o valor do número:`));

if (
    n % 2 !== 0
) console.log(`O número é impar`)
else console.log(`O número é par`)