/*Ler um número inteiro N e calcular todos os seus divisores.*/


const teclado = require(`prompt-sync`)();

let n = parseInt(teclado(`Digite o número que deseja ver os divisores: `));

for(let i = 1; i <= n; i++){
    if(n % i == 0){
        console.log(i);
    }
}