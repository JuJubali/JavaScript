var idade = 25
var nome = "Carolina"
var agora = Date();

// Meses começam com o índice 0
// Herdar de Date -> Classe 
const anoNovo = new Date(2024, 11, 31) // Objeto

// Concatenar
console.log('Idade: ' + 25 + ' anos')

// `Interpolação`
const verificacao = `Idade: ${idade} anos`

const pessoa = `A ${nome} tem ${idade} anos de idade` 

console.log(verificacao.toLowerCase())
console.log(pessoa.toUpperCase())
console.log(agora)
console.log(anoNovo)
