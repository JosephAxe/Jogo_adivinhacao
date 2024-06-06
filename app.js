let listaDeNumerosSorteados = [];
let numeroLimite = 7;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log(numeroSecreto);


function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    resposiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p',`Tente adivinhar o número secreto entre 1 e ${numeroLimite}.`);
}
exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Voce acertou!');
        let  palavraTentativas= tentativas == 1 ? 'tentativa' : 'tentativas';
        let mensagem = `Você acertou em ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(chute > numeroSecreto) {
        exibirTextoNaTela('h1', 'Voce errou!');
        exibirTextoNaTela('p','O número secreto é menor!');
    } else {
        exibirTextoNaTela('h1', 'Voce errou!');
        exibirTextoNaTela('p','O número secreto é maior!');
    }tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite) + 1;
    let quantidadeDeElementoNaLista = listaDeNumerosSorteados.length;
    if(quantidadeDeElementoNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio(); 
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input').value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);

}