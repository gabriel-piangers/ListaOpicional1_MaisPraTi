// 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h, 
// exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
// multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

const prompt = require("prompt-sync")()

const km = Number(prompt('Informe sua velociade (km/h): '))
const diff = km - 80

if(diff>0) {
    console.log(`Você recebeu uma multa de ${diff*5} reais`)
} else {
    console.log('Você não foi multado. Ainda.')
}
