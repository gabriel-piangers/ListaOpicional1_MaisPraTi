// 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
// Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
// valores da sequência.

const prompt = require('prompt-sync')()

const inicio = Number(prompt(`Primeiro valor: `))
const razao = Number(prompt(`Razão: `))
let soma = 0
const n = 10

for(i=0; i<n; i++) {
    console.log(inicio + i*razao)
    soma += inicio + i*razao
}

console.log(`Soma: ${soma}`)
