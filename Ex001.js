// 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// vida um fumante perderá e exiba o total em dias.

const prompt = require("prompt-sync")()

function minToDays(min) {
    return min/(64*24)
}

const cigarros = Number.parseInt(prompt('Informe a quantidade de cigarros que já fumou: '))
const minutos = cigarros*10
console.log(`Você já perdeu ${Math.floor(minToDays(minutos))} dias de vida`)
