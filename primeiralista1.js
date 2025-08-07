/*Faça um programa para ler dois valores inteiros, e depois mostrar na tela a soma desses números com uma
mensagem explicativa, conforme exemplos.*/
var teclado = require("prompt-sync")();
var n1 = parseInt(teclado("Digite o valor do primeiro n\u00FAmero:"));
var n2 = parseInt(teclado("Digite o valor do segundo n\u00FAmero: "));
var soma = n1 + n2;
console.log("A soma deu ".concat(soma));
