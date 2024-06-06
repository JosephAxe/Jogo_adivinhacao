let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p','Tente adivinhar o número secreto entre 1 e 10.');
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
    return parseInt(Math.random() * 10) + 1;
}

function limparCampo(){
    chute = document.querySelector('input').value = '';
}
console.log(numeroSecreto);

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);

}