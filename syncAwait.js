/*async function obterValor(){
    const promessa = new Promesse ((resolve, reject) => {
        const condicao = false

            if (condicao){
                resolve ("Verdadeiro")
            } else {
                reject("Falso");
            }
    });
}*/

async function obterValor(){

    const promessa = new Promise ((resolve, reject) => {
        setTimeOut (() => resolver("Valor Obitido"), 2000);
    });

    const valor = await promessa; //espera a promessa antes de ser executado 
    
    console.log(valor);
}

obterValor();

async function obterValorComErro(){
    try {
        const promessa = new Promise ((resolve, reject) => {
        setTimeOut (() => reject("Valor com erro"), 2000);
        });
    
        const valorComErro = await promessa; //espera a promessa antes de ser executado 
        
        console.log(valorComErro);
    } catch(error){
        console.log(error.message);
    }
}
