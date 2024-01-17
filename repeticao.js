var nomeAluno = [
    'Giovana', 'Pedro', 'Carolina', 'Miguel', 'Rafaela', 
    'Gustavo', 'Patricia', 'Enzo', 'Ana', 'Carlos'
]

// Repetição - For
for (let i = 0; i <= 9; i++) {
    // format: + varivel + || ${variável}
    console.log('A nota de ' + nomeAluno[i] + ' é de: ' + (i+1));
}

let alunoAprovado = 4;

while (alunoAprovado >= 4 && alunoAprovado <= 9){
    console.log('Parabéns! ' + nomeAluno[alunoAprovado] + ' sua nota é de: ' + (alunoAprovado+1))
    alunoAprovado ++
}

let alunoReprovado = 0;

do {
    console.log('Tente Novamente ' + nomeAluno[alunoReprovado])
    alunoReprovado++
} while (alunoReprovado < 4)
