/*Leia 1 valor inteiro N, que representa o número de casos de teste que vem a seguir. Cada caso de teste consiste
de 3 valores reais, cada um deles com uma casa decimal. Apresente a média ponderada para cada um destes
conjuntos de 3 valores, sendo que o primeiro valor tem peso 2, o segundo valor tem peso 3 e o terceiro valor tem
peso 5.*/
var teclado = require("prompt-sync")();
var n = parseInt(teclado("Quantos casos de teste? "));
for (var i = 0; i < n; i++) {
    var valor1 = teclado("Digite o 1\u00B0 valor separado por espa\u00E7o: ");
    var valor2 = teclado("Digite o 2\u00B0 valor separado por espa\u00E7o: ");
    var valor3 = teclado("Digite o 3\u00B0 valor separado por espa\u00E7o: ");
    var a = valor1;
    var b = valor2;
    var c = valor3;
    var media = (a * 2 + b * 3 + c * 5) / 10;
    console.log("M\u00E9dia: ".concat(media));
}
