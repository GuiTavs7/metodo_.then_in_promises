// 1) Corrigindo o erro do "callback hell" com o uso do método ".then()"

let ferverAgua = (chaleiraEstaNoFogao,fogoEstaLigado) => {

    return new Promise((resolve,reject) => {

        if(chaleiraEstaNoFogao && fogoEstaLigado){
            console.log("Passo 1 finalizado: Água foi fervida");
            resolve();
        }

        else{
            console.log("É necessário ligar o fogão e colocar a chaleira no fogo para ferver água!");
            reject();
        }

    })
}

let passarOCafe = (aguaFervida) => {
    return new Promise((resolve) => {
        console.log("Passo 2 finalizado: Café foi passado");
        resolve(true);
    })
}

let tomarCafe = (cafePassado) => {
    return new Promise((resolve) => {
        console.log("Passo 3 finalizado: Terminei de tomar o café");
        resolve(true);
    })
}

let lavarXicara = (cafeTomado) => {
    return new Promise((resolve) => {
        console.log("Passo 4 finalizado: Terminei de lavar a xícara");
        resolve(true);
    })
}

let chaleiraNoFogao = true;
let fogoLigado = true;

// 2) Substituindo encadeamento de callback's por ".then()" - uma função depende da outra para ser executada!

ferverAgua(chaleiraNoFogao, fogoLigado)

    .then(() => {
        return passarOCafe();
    })
    .then(() => {
        return tomarCafe();
    })
    .then(() => {
        return lavarXicara();
    })
    .then(() =>{
        console.log("Finalizado o ritual do café, bora trabalhar!");
    })