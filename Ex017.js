// 17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
// dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
// os dados das pessoas menores de idade.

const prompt = require('prompt-sync')()

const names = []
const ages = []

for (i=0; i<9; i++) {
    const newName = prompt('Nome: ')
    names.push(newName)
    const newAge = prompt('Idade: ')
    ages.push(newAge)
}

console.log()

for (i=0; i<9; i++) {
    if (ages[i]<18) {
        console.log(`${names[i]}: ${ages[i]} anos`)
    }
}