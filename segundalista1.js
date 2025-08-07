/*Fazer um programa para ler um número inteiro, e depois dizer se este número é negativo ou não.*/
var teclado = require("prompt-sync")();
var n = parseInt(teclado("Digite o valor do n\u00FAmero:"));
if (n < 0)
    console.log("O n\u00FAmero \u00E9 negativo");
else
    console.log("O n\u00FAmero \u00E9 positivo");
