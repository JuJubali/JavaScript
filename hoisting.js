// Invocar a função antes de ela ter sido declarada 
hoisting()
hw("JavaScript")

function hw(tecnologia){
    console.log('Hello World ' + tecnologia);
}

function hoisting(){
    console.log('Correto!');
}

// Arrow Function 
const primeiraArrow = () => console.log('Testando a Arrow!');

// Arrow invoca do mesmo jeito que uma função()
// Arrow NÃO funciona Hoisting
primeiraArrow()
