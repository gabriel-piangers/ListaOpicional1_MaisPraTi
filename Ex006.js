// 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
// tentar descobrir qual foi o valor sorteado.

const prompt = require("prompt-sync")()

const guess = Number(prompt('Chute um número de 1 a 5: '))

if(guess >= 1 && guess <= 5) {
    const rng = Math.floor(Math.random() * 5 + 1)
    if(guess === rng) {
        console.log('Você acertou!')
    } else {
        console.log(`Você errou! o número era ${rng}`)
    }
} else {
    console.log('Está nem era uma opção. Você é muito ruim nisso.')
}