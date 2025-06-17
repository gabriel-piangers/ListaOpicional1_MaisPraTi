// 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
// repetição. Escrever cada um deles no formato HH.MM.SS.

const prompt = require('prompt-sync')()

function checkHour(hour) {
    if (hour>=0 && hour<24) {
        return true
    }
    return false
}

function checkMinSec(n) {
    if (n>=0 && n<60) return true
    return false
}

const result = []

for (i=0; i<5; i++) {
    let hour = null
    let min = null
    let sec = null
    while (true) {
        hour = Number.parseInt(prompt('Hora: '))
        if (checkHour(hour)){
            break
        } else {
            console.log('Entrada inválida')
        }
    }
    while (true) {
        min = Number.parseInt(prompt('Minutos: '))
        if (checkMinSec(min)){
            break
        } else {
            console.log('Entrada inválida')
        }
    }
    while (true) {
        sec = Number.parseInt(prompt('Segundos: '))
        if (checkMinSec(sec)){
            break
        } else {
            console.log('Entrada inválida')
        }
    }

    result.push(`${hour}:${min}:${sec}`)
}

console.log(`------Horarios-------`)
result.forEach(time => console.log(time))
