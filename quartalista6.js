var teclado = require("prompt-sync")();
var n = parseInt(teclado("Digite o n\u00FAmero que deseja ver os divisores: "));
for (var i = 1; i <= n; i++) {
    if (n % i == 0) {
        console.log(i);
    }
}
