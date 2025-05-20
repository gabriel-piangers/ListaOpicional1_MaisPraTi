// 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

const prompt = require("prompt-sync")()

function jokenpo(p1, p2) {
    if (p1 === p2) return 'Empate'

    switch (p1) {
        case 1:
            switch(p2) {
                case 2:
                    return 'Perdeu'
                case 3: 
                    return 'Venceu'
            }
        case 2:
            switch(p2) {
                case 3:
                    return 'Perdeu'
                case 1: 
                    return 'Venceu'
            }
        case 3:
            switch(p2) {
                case 1:
                    return 'Perdeu'
                case 2: 
                    return 'Venceu'
            }
    }
}

function moveToString(move) {
    switch(move) {
        case 1:
            return 'Pedra'
        case 2: 
            return 'Papel'
        case 3:
            return 'Tesoura'
        default:
            return 'Entrada inválida'
    }
}

console.log('1 - Pedra')
console.log('2 - Papel')
console.log('3 - Tesoura')

const player = Number(prompt(`Escolha sua jogada(1-3): `))
const bot = Math.floor(Math.random() * 3 +1)
const resultado = jokenpo(player, bot)

console.log(`${moveToString(player)} VS ${moveToString(bot)}`)
console.log(`Resultado: ${jokenpo(player, bot)}`)
