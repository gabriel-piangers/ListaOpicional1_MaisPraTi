// 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
// comprimentos e diga se é possível formar um triângulo com essas retas.
// Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
// lado deve ser menor que a soma dos outros dois.

const prompt = require(`prompt-sync`)()

const a = Number(prompt('Comprimento do Lado a do trinangulo: '))
const b = Number(prompt('Comprimento do Lado b do trinangulo: '))
const c = Number(prompt('Comprimento do Lado c do trinangulo: '))

if(!a || !b || !c) {
    console.log('Valores inválidos')
} else {
    if(a < b+c && b < a+c && c < a+b) {
        if(a===b===c) console.log('Triângulo Equilatero')
        else if(a===b || a===c || c===b) console.log('Triângulo Isóceles')
        else console.log('Triângulo Escaleno')

    } else {
        console.log('Não se pode formar um triângulo com estes lados')
    }
}