const frase = "Hello, World! ";

const palavras = frase.trim().split(" ");

console.log(frase)
console.log(palavras)

// Lembre-se JS é case sensitive! 
console.log(frase.startsWith("Hello"))  // true
console.log(frase.endsWith("! ")) // true -> Considera todos os espaços 
