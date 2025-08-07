/*Fazer um programa para ler quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto
de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).*/
var teclado = require("prompt-sync")();
var a = parseInt(teclado("Digite o valor de A:"));
var b = parseInt(teclado("Digite o valor de B: "));
var c = parseInt(teclado("Digite o valor de C:"));
var d = parseInt(teclado("Digite o valor de D: "));
var diferenca = a * b - c * d;
console.log("A diferen\u00E7a dos n\u00FAmeros \u00E9: ".concat(diferenca));
