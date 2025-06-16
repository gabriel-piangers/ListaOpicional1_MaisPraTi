// 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
// cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
// a) O somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares.

const prompt = require('prompt-sync')()

let running = true
let menor = Infinity
let sum = 0
const pares = []
let total = 0


do {
    const input = Number(prompt(`Digite um número: `))
    total ++
    if (input<menor) menor = input
    if(input%2===0) pares.push(input)
    sum += input

    opt = prompt('Quer coninuar (s/n): ')
    if (opt.toLowerCase() === 'n') break
} while (running)

console.log(`Soma: ${sum}`)
console.log(`Menor: ${menor}`)
console.log(`Média: ${sum/total}`)
console.log(`Pares: ${(pares.length>0? pares: 'Não há números pares')}`)