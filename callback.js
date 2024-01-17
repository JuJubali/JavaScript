// Callback -> Função em que é executada em uma outra função
function cumprimentar(nome, callback){
    console.log('Olá, ' + nome);
    callback(); // Invocar a função de callback
}

function mostrarSaudacao(){
    console.log('Como você está?');
}

cumprimentar("Júlia", mostrarSaudacao);

// Exercício aluno
function contarPresenca(aluno, callback){
    console.log('Boa tarde, ' + aluno);
    callback();
}

function pergunta(aluno, callback){
    console.log('Está presente?');
}

contarPresenca("Diego", pergunta);

// Settimeout -> Executar algo novamente depois de um tempo 
function mostrarMensagem(){
    console.log('Mensagem exibida em três segundos...');
}

setTimeout(mostrarMensagem,3000) // 1000ms === 1s

setTimeout(function(){
    console.log('Mensagem exibida após 5 segundos');
},5000);
