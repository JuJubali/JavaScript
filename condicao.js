console.log('hello world')

/* var
 Não é obrigatório inicializar, valor global e dinâmico */

var name = 'Bia'
var notaUm = 1
var notaDois = 1
var trabalho = 1
var media = (notaUm + notaDois + trabalho) / 3

console.log('Olá, ' + name + ' como está?')
console.log('A média de ' + name + ' é de: '+ media)

// alert('Seja bem vindo (a)');

// if, else e else if
if (media == 10){
    console.log('Parabéns, você foi incrível!');
} else if (media >= 5 && media < 10){
    console.log('Aprovado. Parabéns!');
} else {
    console.log('Reprovado. Tente novamente');
}
// switch  

/* const
 Obrigatorio ser inicializada, referente à um bloco específico (local) e constante*/ 

const materia = "historia"

switch(materia){
     case "historia": 
        console.log('Matéria: '+ materia +' Estudar Revolução Francesa');
        break;
    case "matematica":
        console.log('Estudar Geomatria Plana');
        break;
    case "portugues":
        console.log('Estudar Concordância');
        break;
    case "biologia":
        console.log('Estudar Estrutura Celular');
        break;
    default:
        console.log('Reprovação por falta');
    }

/* let
Não obrigatório ser inicializada, variável local e dinâmico */
