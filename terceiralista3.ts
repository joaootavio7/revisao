/*Um Posto de combustíveis deseja determinar qual de seus produtos tem a preferência de seus clientes. Escreva
um algoritmo para ler o tipo de combustível abastecido (codificado da seguinte forma: 1.Álcool 2.Gasolina 3.Diesel
4.Fim). Caso o usuário informe um código inválido (fora da faixa de 1 a 4) deve ser solicitado um novo código (até
que seja válido). O programa será encerrado quando o código informado for o número 4. Deve ser escrito a
mensagem: "MUITO OBRIGADO" e a quantidade de clientes que abasteceram cada tipo de combustível, conforme
exemplo.*/

let teclado = require(`prompt-sync`)()

console.log(`+++++++++++++++++++++++++++++++++`)
console.log(`++      POSTO DE GASOLINA      ++`)
console.log(`+++++++++++++++++++++++++++++++++`)

console.log(`---------------------------------`)
console.log(`--           CATALOGO          --`)
console.log(`--  1- Álcool                  --`)
console.log(`--  2- Gasolina                --`)
console.log(`--  3- Diesel                  --`)
console.log(`--  4- Fim                     --`)
console.log(`---------------------------------`)

let pergunta: number = parseInt(teclado(`Digite o primeiro número: `))

if(pergunta == 1 || pergunta == 2 || pergunta == 3 || pergunta == 4){
console.log(`MUITO OBRIGADO!!!!!`)
}
else console.log(`Código inválido`)