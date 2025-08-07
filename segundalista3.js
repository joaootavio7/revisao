/*Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao
Multiplos", indicando se os valores lidos são múltiplos entre si. Atenção: os números devem poder ser digitados em
ordem crescente ou decrescente.*/
console.log("Verifique se dois números são múltiplos: ");
var teclado = require("prompt-sync")();
var A = parseInt(teclado("Digite o primeiro valor inteiro (A): "));
var B = parseInt(teclado("Digite o segundo valor inteiro (B): "));
if (A % B === 0 || B % A === 0) {
    console.log("Os n\u00FAmeros ".concat(A, " e ").concat(B, " s\u00E3o m\u00FAltiplos."));
}
else {
    console.log("Os n\u00FAmeros ".concat(A, " e ").concat(B, " n\u00E3o s\u00E3o m\u00FAltiplos."));
}
