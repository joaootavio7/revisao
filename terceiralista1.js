/*Escreva um programa que repita a leitura de uma senha até que ela seja válida. Para cada leitura de senha
incorreta informada, escrever a mensagem "Senha Invalida". Quando a senha for informada corretamente deve ser
impressa a mensagem "Acesso Permitido" e o algoritmo encerrado. Considere que a senha correta é o valor 2002.*/
var teclado = require("prompt-sync")();
var senha = parseInt(teclado("Digite a senha:"));
if (senha == 2002) {
    console.log("Senha Correta");
}
else
    console.log("Senha Incorreta");
