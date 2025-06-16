// 13. Crie um programa que preencha automaticamente (usando lógica, não apenas
// atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
// da sequência de Fibonacci.

const n = 15
const vetor = []

let prev = 1
let atual = 1
vetor.push(prev)
vetor.push(atual)
for(i=0;i<(n-2);i++) {
    const x = atual
    atual += prev
    prev = x
    vetor.push(atual)
}

console.log(vetor)