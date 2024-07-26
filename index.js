// EXEMPLO DA AULA ANTERIOR

let fervendoAgua = (chaleiraEstaNoFogao,fogoEstaLigado) => {

    return new Promise((resolve,reject) => {

        if(chaleiraEstaNoFogao && fogoEstaLigado){
            console.log("Começando o processo de ferver água!");
            resolve();
        }

        else{
            console.log("É necessário ligar o fogão e colocar a chaleira no fogo para ferver água!");
            reject();
        }

    })
}

let chaleiraEstaNoFogao = true;
let fogoEstaLigado = true;

let passarCafe = () => console.log("Passando café!");

// Chamando a função Promise com o "then"- chama a função passarCafe() quando terminar a ferverAgua() - interdependência

fervendoAgua(chaleiraEstaNoFogao, fogoEstaLigado).then(passarCafe);

console.log("Fazendo café!");