const idade = 15;

if (idade < 18){
    throw new Error("É preciso ter ao menos 18 anos");
}

console.log("Continuando...");

// Tratamento de Erros 
try{
    const fruta = "Cereja";
    if(fruta === "Cereja") {
        throw new Error("A fruta tinha que ser cereja");
    }
    
} catch(error){
    console.log(error.message);
}
