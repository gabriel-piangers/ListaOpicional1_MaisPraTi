// 16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
// (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
// depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.

const numbers = []

for (i=0; i<20; i++) {
    const rng = Math.floor(Math.random() * 99 +1)
    numbers.push(rng)
}

console.log(`Vetor`)
console.log(numbers)
console.log(`Vetor Ordenado`)
console.log(numbers.sort((a, b) => a-b))