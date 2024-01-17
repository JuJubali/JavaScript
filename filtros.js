// Arrow Function -> Map, Filter, Reduce 
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* .find -> Encontrar elemento com um padrão específico
Somente retorna o PRIMEIRO elemento do critério*/
const numeroPar = numeros.find((numP) => numP % 2 === 0);
const numeroImpar = numeros.find((numI) => numI % 2 === 1);

/* .filer() -> Filtra elementos dentro da array 
ElementoS com um padrão específico*/
const numerosPares = numeros.filter((nums) => nums % 2 === 0);
const numerosImpares = numeros.filter((numsI) => numsI % 2 === 1); 

console.log(`Primeiro número par: ${numeroPar}`)
console.log(`Total de números pares: ${numerosPares}`)
console.log(`Primerio número ímpar: ${numeroImpar}`)
console.log(`Toal de números pares: ${numerosImpares}`)

// Exercício com frutas
const frutas = ["Maçã", "Banana", "Abacaxi", "Morango", "Manga", "Pêssego", ]

const stringCinco = frutas.filter((cincoLetras) => cincoLetras.length > 5);

console.log(stringCinco)
