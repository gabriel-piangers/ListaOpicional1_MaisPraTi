// 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
// final, mostre quais são os números pares que foram digitados e em que posições eles
// estão armazenados.

const prompt = require('prompt-sync')()
const numbers = []

for (i=0;i<10;i++) {
    const newNumber = Number(prompt(`Numero: `))
    numbers.push(newNumber)
}

console.log()

for(i=0;i<numbers.length;i++) {
    if (numbers[i]%2 === 0) {
        console.log(`Indice: ${i}  |   ${numbers[i]}`)
    }
}