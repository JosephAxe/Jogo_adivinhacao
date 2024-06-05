let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p','Tente adivinhar o número secreto entre 1 e 10.');

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 100) + 1;
}

console.log(gerarNumeroAleatorio());

function novoJogo(){
    console.log('O botão novoJogo foi clicado!');
}