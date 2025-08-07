/*Escreva um programa para ler as coordenadas (X,Y) de uma quantidade indeterminada de pontos no sistema
cartesiano. Para cada ponto escrever o quadrante a que ele pertence. O algoritmo será encerrado quando pelo
menos uma de duas coordenadas for NULA (nesta situação sem escrever mensagem alguma).*/
var teclado = require("prompt-sync")();
var x = 0;
var y = 1;
while (x != 0 || y != 0) {
    x = parseInt(teclado("Digite um n\u00FAmero para a coordenada X: "));
    y = parseInt(teclado("Digite um n\u00FAmero para a coordenada Y: "));
    if (x >= 1 && y >= 1) {
        console.log("Primeiro");
    }
    if (x < 0 && y >= 1) {
        console.log("Segundo");
    }
    if (x < 0 && y < 0) {
        console.log("Terceiro");
    }
    if (x >= 1 && y < 0) {
        console.log("Quarto");
    }
}
