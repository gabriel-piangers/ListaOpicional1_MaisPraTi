// 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
// Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

const prompt = require('prompt-sync')()

function fibonacci(n) {
    if(isNaN(n) || n<0) return false
    
    let prev = 1
    let atual = 1
    for(i=0;i<(n-2);i++) {
        console.log(atual)
        const x = atual
        atual += prev
        prev = x
    }
    return atual
}

fibonacci(10)