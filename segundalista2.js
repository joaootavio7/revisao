/*Fazer um programa para ler um número inteiro e dizer se este número é par ou ímpar.*/
var teclado = require("prompt-sync")();
var n = parseInt(teclado("Digite o valor do n\u00FAmero:"));
if (n % 2 !== 0)
    console.log("O n\u00FAmero \u00E9 impar");
else
    console.log("O n\u00FAmero \u00E9 par");
