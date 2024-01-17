const promessa = new Promise((resolve, reject) => {
    const condicao = false

    if(condicao){
        resolve("Verdadeiro!")
    } else {
        reject("Falso!")    
    }
});


// Métodos da promise 
// then -> Executa a promessa
// catch -> Quando a promessa não deu certo
promessa
    .then((mensagem) => {
        console.log(mensagem);
    })
    .catch((erro) => {
    console.log(erro);
    })

const promissa1 = Promise.resolve(3)
const promissa2 = new Promise((resolve, reject) => {
    setTimeOut(resolve, 2500, "Okay");
});
// Pegar todos os valores da Promise 
Promise.all([promessa1, promessa2])
