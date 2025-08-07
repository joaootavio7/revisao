/*Fazer um programa para ler um número inteiro, e depois dizer se este número é negativo ou não.*/

const teclado = require(`prompt-sync`)();

let n: number = parseInt(teclado(`Digite o valor do número:`));

if(
    n < 0
)console.log(`O número é negativo`)
else console.log(`O número é positivo`)

