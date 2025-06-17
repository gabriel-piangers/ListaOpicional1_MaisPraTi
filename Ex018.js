// 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
// um funcionário e ao final escreva o conteúdo do registro.

const prompt = require('prompt-sync')();

let funcionario = {
  nome: '',
  cargo: '',
  salario: 0
};

funcionario.nome = prompt('Nome: ');
funcionario.cargo = prompt('Cargo: ');
funcionario.salario = parseFloat(prompt('Salário: '));

console.log()
console.log('\n--- Dados do Funcionário ---');
console.log(`Nome: ${funcionario.nome}`);
console.log(`Cargo: ${funcionario.cargo}`);
console.log(`Salário: R$ ${funcionario.salario.toFixed(2)}`);