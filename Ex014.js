// 14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
// mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
// que eles foram informados.

const prompt = require('prompt-sync')()

const names = []

for(i=0;i<7;i++) {
    const newName = prompt(`Nome: `)
    names.push(newName)
}

console.log(names.reverse())
