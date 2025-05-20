// 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
// Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
// R$ 0.45 para viagens mais longas.

const prompt = require("prompt-sync")()

const km = Number(prompt("Quantos km vai percorrer: "))

if(km <200) {
    console.log(`Preço da passagem: ${km*0.5} reais`)
} else {
    console.log(`Preço da passagem: ${km*0.45} reais`)
}